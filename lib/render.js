module.exports = async (ctx, next) => {
    await next();
    await ctx.render('/index', ctx.body);
}
