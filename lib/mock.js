const path = require('path');
const config = require('config');
const fs = require('fs');

const getMockData = (ctx) => {
    const mockDir = config.get('mockDir');
    if (ctx.path === '/') {
        return {};
    }
    const mockPath = path.join(mockDir, ctx.method, `${ctx.path}.json`);
    if (fs.existsSync(mockPath)) {
        return JSON.parse(fs.readFileSync(mockPath));
    }
    return {};
};

module.exports = async (ctx, next) => {
    const mockData = getMockData(ctx);
    ctx.body = mockData;
    await next();
};
