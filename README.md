# share

#### 命令
- 本地mock模式：npm run mock
- 本地开发(需开启数据库): npm run dev
- 部署服务: pm2 start pm2.json
- 停止服务: pm2 stop share
- 重启服务: pm2 restart share

非mock模式的时候，config/default.json里要配置nos相关的key等，隐私考虑没有push上来。

访问：
http://localhost:5000