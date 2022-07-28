/*body*/
exports.getBodyInfo = (ctx) => {
    return ctx.request.body.body || {};
};