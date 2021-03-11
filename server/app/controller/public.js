'use strict';

const Controller = require('egg').Controller;
const BaseController = require('./base');

class PublicController extends BaseController {

    //login
    async login() {
        const { ctx } = this;
        const parmas = ctx.params();
        const result = await ctx.service.public.login(parmas);
        if (result) {
            this.success({ ctx, ...result.data.data });
            return true;
        } else {
            this.error('login失败');
        }
    }

    //开始爬取Kols列表
    async getKols() {
        const { ctx } = this;
        const parmas = ctx.params();
        const result = await ctx.service.public.getKols(parmas);
        if (result) {
            this.success({ ctx, result });
        } else {
            this.error('add失败');
        }
    }
}

module.exports = PublicController;