const handler = async (ctx, next) => {
    try{
        let body = await next();
        ctx.response.body = {
            code: 200,
            message:'success',
            body:body || {}
        };
    }catch(e){
        ctx.response.status = 500;
        ctx.response.message = e.message;
    }
};

module.exports = handler;