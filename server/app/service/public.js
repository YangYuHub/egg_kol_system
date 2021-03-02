'use strict';

const Service = require('egg').Service;
const BaseService = require('./base');

class PublicService extends BaseService {
    //登录
    async login(params) {
            return this.run(async(ctx) => {
                return await this.ctx.curl('https://api.kolzhipin.com/admin_api/login', { method: 'POST', data: params });
            });
        }
        //获取全部网红信息 并批量添加
    async getKols(params) {
        return this.run(async(ctx) => {
            const ctx = this.ctx;
            const result = await ctx.curl('https://api.kolzhipin.com/admin_api/kol/serarch', { method: 'GET', data: params });
            return result;
            // const count = math.random() * 10 + 1;
            // if (result.data) {
            //     result.data.forEach((item) => {
            //         if (ctx.service.celebrity.getId(item.id).length <= 0) {
            //             return await ctx.service.celebrity.add(item);
            //         } else {
            //             return await ctx.service.celebrity.update(item);
            //         }
            //     });
            // }
            // return 0;
        });
    }
}

module.exports = PublicService;