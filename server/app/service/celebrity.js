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

    async lists(params) {
        return this.run(async(ctx, app) => {
            const result = await ctx.model.Celebrity.findAll({
                where: {
                    page: params.page,
                    per_page: params.per_page,
                    promotion: params.promotion,
                    mail_date: params.mail_date,
                    mail_date: params.mail_date,
                    price: params.price,
                    search_words: params.search_words,
                    search_key: params.search_key,
                    country_id: params.country_id,
                    category_id: params.category_id,
                    product_type: params.product_type,
                    sex: params.sex,
                    is_complete: params.is_complete,
                    has_private_contact: params.has_private_contact,
                    is_auth: params.is_auth,
                    fans_num: params.fans_num,
                    video_prediction_play_num: params.video_prediction_play_num,
                    teamwork_fee: params.teamwork_fee,
                    authed_at: params.authed_at,
                    authed_at: params.authed_at,
                    birthday: params.birthday,
                    birthday: params.birthday,
                    grade: params.grade,
                    community: params.community
                },
                limit: params.per_page,
                offset: (params.page - 1) * params.per_page,
                include: [{
                    // model: app.model.House,
                    // as: 'house',
                    // include: [{
                    //     model: app.model.Imgs,
                    //     attributes: ['url'],
                    //     limit: 1
                    // }]
                }]
            });

            return result;
        });
    }

}

module.exports = CelebrityService;