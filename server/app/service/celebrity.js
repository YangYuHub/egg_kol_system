'use strict';

const Service = require('egg').Service;
const md5 = require('md5');
const BaseService = require('./base');

class CelebrityService extends BaseService {
    async getId(id) {
        return this.run(async(ctx) => {
            const result = await ctx.model.Celebrity.findOne({
                where: {
                    id: id,
                }
            });
            return result;
        });
    }

    async add(params) {
        return this.run(async(ctx) => {
            const result = await ctx.model.Celebrity.create(params);
            return result;
        });
    }

    async edit(params) {
        return this.run(async(ctx) => {
            const result = await ctx.model.Celebrity.update(params, {
                where: {
                    id: ctx.id
                }
            });
            return result;
        });
    }

    //批量新增
    async addList(params) {
        return this.run(async(ctx) => {
            const result = await ctx.model.Celebrity.bulkCreate(params);
            return result;
        });
    }
}

module.exports = CelebrityService;