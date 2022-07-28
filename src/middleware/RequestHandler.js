const handler = async function(ctx, next){
    const body = ctx.request.body.body || {};

    await next();
};

module.exports = handler;