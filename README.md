# my-project

> My Vue Library

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


# Vue 安装
```
$ npm install --global vue-cli
```
## 创建一个基于 webpack 模板的新项目
```
$ vue init webpack my-project
```
## 安装依赖，走你
```
$ cd my-project
$ npm install
$ npm run dev
```
## 安装 Scss （应该能简写成一行）
```
npm install --save-dev node-sass
npm install --save-dev sass-loader
```


# git 操作命令
```
git add .
git commit -m ''
```
## 上传代码
```
git push -u origin master
```
# 各组件路径 : src/common/...
各组件都有对应的 ***readme.md***


# npm run build
## 修改配置
./build/utils.js
```
 if (options.extract) {
      return ExtractTextPlugin.extract({
        publicPath: '../../',
      })
    }
```
./config/index.js
```
build: {
  // ...
  assetsPublicPath: './',
}
```
# 静态资源目录 static
开发时只需按照真实路径即可
即 `./static`


# 数组或对象改变但视图不刷新
https://blog.csdn.net/zifeiyu130/article/details/78950244







API
http://192.168.1.12/github/educate/advanced/api/web/swagger/

