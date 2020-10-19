# ksc-feproject-vue3

### 基本信息

> #### 项目说明:

本项目金山云前端控制台项目模板，配合 [kscfe-cli](https://github.com/ksc-fe/ksc-fe-cli) 脚手架使用。

> #### 项目技术栈:

- nodejs: ^12.x.x
- vue: ^3.0.0
- vue-cli: ^4.5.7
- kpc: > ^1.4.3
- stylus: ^0.54.7

> #### 目录结构:

```
ksc-feproject-vue3 (vue/intact + kpc + axios)
|
├── public                     // index.html
├── dist                       // 构建输出目录
|── script                     // 命令脚本
├── src                        // 源代码
│   ├── assets
|   │   ├── font
|   |   ├── images             // 图片，字体等静态资源
│   ├── components             // 公用组件
│   ├── filters                // filter
|   |—— api                    // API请求
│   ├── store                  // vuex store
│   ├── router                 // 路由
│   ├── styles                 // 样式
│   ├── utils                  // 工具
│   ├── views                  // 页面文件，根据模块创建子目录
│   ├── libs                   // 第三方库
│   |── main.js                // 入口文件
|   ├── App.vue                // 根组件
|── test                       // 测试相关
|── mock                       // mock数据
├── .babelrc                   // babel配置
├── .editorconfig                // editor 配置项
├── eslintrc.js                // eslint 配置项
├── .eslintignore               // eslint 忽略项
├── prettier.config.js                // prettier 配置项
├── stylelint.config.js                // stylelint 配置项
├── cypress.json                // e2e test cypress 配置项
├── .gitignore                 // git 忽略项
├── vue.config.js              // webpack, proxy配置文件
└── package.json               // package.json
├── README.md                  // 项目说明文件
└── RELEASE.md                 // 发布记录说明
```

#### 命令说明

- 安装依赖：npm install
- 启动本地环境：npm run serve
- 构建 dist：npm run build
- 单元测试：npm run test:unit
- e2e 测试：npm run test:e2e
- eslint： npm run lint:eslint
- style lint 检查：npm run lint:stylelint
- 上传静态文件：npm run upload:static
- 新建 vue 单文件：npm run create:view
