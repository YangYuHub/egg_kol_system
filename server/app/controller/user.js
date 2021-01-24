'use strict';

const Controller = require('egg').Controller;
const md5 = require('md5');
const BaseController = require('./base');

class UserController extends BaseController {
    async jwtSign({ id, username }) {
        const { ctx, app } = this;
        const token = app.jwt.sign({
            id,
            username
        }, app.config.jwt.secret);
        ctx.session[username] = 1;
        await app.redis.set(username, token, 'EX', app.config.redisExpire);
        return token;
    }
    parseResult(ctx, result) {
        return {
            ...ctx.helper.unPick(result.dataValues, ['password']),
            createTime: ctx.helper.timestamp(result.createTime),
        }
    }
    async register() {
        const { ctx, app } = this;
        const parmas = ctx.params();
        const user = await ctx.service.user.getUser(parmas.username);

        if (user) {
            this.error('用户已经存在');
            return;
        }

        const result = await ctx.service.user.add({
            ...parmas,
            password: md5(parmas.password + app.config.salt),
            createTime: ctx.helper.time()
        });
        // console.log(result)
        if (result) {
            const token = await this.jwtSign({
                id: result.id,
                username: result.username
            });
            this.success({
                ...this.parseResult(ctx, result),
                token
            });
        } else {
            this.error('注册使用失败');
        }
    }

    async login() {
        const { ctx, app } = this;
        const { username, password } = ctx.params();
        const user = await ctx.service.user.getUser(username, password);
        if (user) {
            const token = await this.jwtSign({
                id: user.id,
                username: user.username
            });

            this.success({
                ...this.parseResult(ctx, user),
                token
            });
        } else {
            this.error('该用户不存在');
        }
    }
}

module.exports = UserController;