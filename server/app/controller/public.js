'use strict';

const Controller = require('egg').Controller;

class PublicController extends Controller {
    //开始爬取Kols列表
    async startKols() {
        const { ctx } = this;
        const parmas = {
            page: 1,
            per_page: 40,
        };
        const result = await ctx.service.public.getKols(parmas);
        if (result) {
            this.success({ ctx, result });
        } else {
            this.error('add失败');
        }
    }
}

module.exports = PublicController;