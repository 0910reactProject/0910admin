### 这里是dev分支

#### 文件目录结构
    pages 页面
    components 组件
    style 样式
    utils 公用的库或者插件
    router 路由文件
    store 全局状态管理文件
    asset 资源目录

#### 预处理语言
    less
    安装：cnpm i less less-loader
          cnpm i less@2.7.3（react默认是2.7.3版本）

#### ui框架
    antd
    安装：npm install antd
    全局引入：在index.js中 import "/antd/dist/antd.css"
    按需引入：

#### 基本配置
    起别名
    config->webpack.config.js   alias
    "style":path.join(__dirname,"../src/style")
    "style":path.resolve(__dirname,"../src/style")

    服务器代理
    ...

#### 公有的库
    axios二次封装
    路由
    react-redux
