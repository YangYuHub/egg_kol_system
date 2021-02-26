'use strict';

const Controller = require('egg').Controller;
const BaseController = require('./base');

class CelebrityController extends BaseController {
    async add() {
        const { ctx } = this;
        const parmas = ctx.params();
        const result = await ctx.service.celebrity.add(parmas);
        if (result) {
            this.success({ ctx, result });
        } else {
            this.error('add失败');
        }
    }
}

module.exports = CelebrityController;