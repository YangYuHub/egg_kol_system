module.exports = app => {
    const { STRING, INTEGER, BOOLEAN, BIGINT } = app.Sequelize;

    const Celebrity = app.model.define('celebrity', {
        id: {
            type: INTEGER,
            primaryKey: true,
        },
        channel_id: STRING(70),
        country: STRING(10),
        fans_num: BIGINT,
        grade: INTEGER,
        head_img: STRING(120),
        is_auth: INTEGER,
        is_complete: BOOLEAN,
        is_cop: INTEGER,
        is_mcn: INTEGER,
        language: STRING(20),
        name: STRING(20),
        user_id: BIGINT,
        user_type: STRING(10),
        video_prediction_play_num: INTEGER
    });

    return Celebrity;
}