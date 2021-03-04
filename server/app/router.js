'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    router.post('/api/user/register', controller.user.register);
    router.post('/api/user/login', controller.user.login);
    router.post('/api/celebrity/add', controller.celebrity.add);
    router.post('/api/public/login', controller.public.login);
    router.post('/api/public/getKols', controller.public.getKols);

};