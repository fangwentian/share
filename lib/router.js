const path = require('path');
const config = require('config');
const fs = require('fs')

module.exports = async (ctx, next) => {
    let mockData = getMockData(ctx);
    console.log(mockData);
    ctx.body = {
        age: 18
    };
    await next();
};

let getMockData = (ctx) => {
    const mockDir = config.get('mockDir');
    const mockPath = path.join(mockDir, ctx.method, ctx.path + '.json');
    let mockData = JSON.parse(fs.readFileSync(mockPath));
    return mockData;
}
