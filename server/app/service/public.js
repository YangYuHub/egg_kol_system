'use strict';

const Service = require('egg').Service;
const BaseService = require('./base');

class PublicService extends BaseService {
    //登录
    async login(params) {
            return this.run(async(ctx) => {
                const result = await ctx.curl('https://api.kolzhipin.com/admin_api/login', {
                    method: 'POST',
                    data: params,
                    dataType: 'json',
                    contentType: 'json',
                });
                console.log(result);
                return result;
            });
        }
        //获取全部网红信息 并批量添加
    async getKols(params) {
        return this.run(async(ctx) => {
            const result = await ctx.curl('https://api.kolzhipin.com/admin_api/kol/serarch', {
                method: 'GET',
                data: params,
                dataType: 'json',
                contentType: 'json',
            });
            return result;
        });
    }
}

module.exports = PublicService;