# share
用来分享电子书、照片等各种文件的平台。

#### 命令
- 本地mock模式：npm run mock
- 本地开发(需开启数据库): npm run dev
- 部署服务: npm run prod
- 查看服务：pm2 list
- 停止服务: pm2 stop share
- 重启服务: pm2 restart share

非mock模式的时候，config/default.json里要配置nos相关的key等，隐私考虑没有push上来。

访问：
http://localhost:5000

#### 效果图

仿石墨文档的风格

![](https://haitao.nos.netease.com/cfeec7ce-07ca-4536-86a8-50ac3f037609.png)