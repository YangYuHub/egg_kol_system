'use strict';

const Controller = require('egg').Controller;
const BaseController = require('./base');

class CelebrityController extends BaseController {
    async add() {
        const { ctx } = this;
        const parmas = ctx.params();
        const ids = await ctx.service.celebrity.getId(parmas.id);
        console.log(ids);
        if (ids.lenght > 0) {
            const result = await ctx.service.celebrity.edit(parmas);
            if (result) {
                this.success({ ctx, result });
            } else {
                this.error('edit失败');
            }
        } else {
            const result = await ctx.service.celebrity.add(parmas);
            if (result) {
                this.success({ ctx, result });
            } else {
                this.error('add失败');
            }
        }
    }
}

module.exports = CelebrityController;