'use strict';

const Service = require('egg').Service;
const md5 = require('md5');
const BaseService = require('./base');

class CelebrityService extends BaseService {
    async add(params) {
        return this.run(async(ctx) => {
            const result = await ctx.model.Celebrity.create(params);
            return result;
        });
    }
}

module.exports = CelebrityService;