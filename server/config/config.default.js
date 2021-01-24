/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
    /**
     * built-in config
     * @type {Egg.EggAppConfig}
     **/
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1611476342482_6488';

    // add your middleware config here
    config.middleware = ['httpLog'];

    config.httpLog = {
        type: 'all'
    };

    config.mysql = {
        app: true,
        agent: false,
        client: {
            host: '127.0.0.1',
            port: '3306',
            user: 'root',
            password: 'qwer1234',
            database: 'kol_system'
        }
    };

    config.sequelize = {
        dialect: 'mysql',
        host: '127.0.0.1',
        port: '3306',
        user: 'root',
        password: 'qwer1234',
        database: 'kol_system',
        define: {
            timestamps: false,
            freezeTableName: true
        }
    };
    config.redis = {
        client: {
            port: 6379,
            host: '127.0.0.1',
            password: 'qwer1234',
            db: 0
        }
    };
    config.security = {
        csrf: {
            enable: false,
        },
    };
    config.jwt = {
        secret: 'kol'
    };

    // add your user config here
    const userConfig = {
        // myAppName: 'egg',
        salt: 'kol',
        redisExpire: 60 * 60 * 24
    };

    return {
        ...config,
        ...userConfig,
    };
};