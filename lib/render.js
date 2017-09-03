module.exports = async (ctx, next) => {
    await next();

    // 单页应用中后端模板其实没啥用，但引入也无妨，方便后面有需要扩展。
    // 可以换成 ctx.body = fs.createReadStream('./demos/template.html'); 这种形式
    if (ctx.path == '/') {
        await ctx.render('/index', ctx.body);
    }
};
