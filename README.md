<p align='center'>
    <a href='https://ectpack.github.io/api' target='_blank'>
        <img src='./logo.png'>
    </a>
</p>

# style-loader
📦 使得css在浏览器中生效的loader，导入的文本应该是css文件

<p>
  <a href="https://hai2007.gitee.io/npm-downloads?interval=7&packages=@etcpack/style-loader"><img src="https://img.shields.io/npm/dm/@etcpack/style-loader.svg" alt="downloads"></a>
  <a href="https://www.npmjs.com/package/@etcpack/style-loader"><img src="https://img.shields.io/npm/v/@etcpack/style-loader.svg" alt="Version"></a>
  <a href="https://github.com/etcpack/style-loader/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/@etcpack/style-loader.svg" alt="License"></a>
  <a href="https://github.com/etcpack/style-loader" target='_blank'><img alt="GitHub repo stars" src="https://img.shields.io/github/stars/etcpack/style-loader?style=social"></a>
</p>

## Issues
使用的时候遇到任何问题或有好的建议，请点击进入[issue](https://github.com/etcpack/style-loader/issues)！

## How to use?

```
npm install --save-dev @etcpack/style-loader
```

然后在```etcpack.config.js```的```loader```配置项中添加，例如：

```js
loader: [{
    test: /\.css$/,
    handler: ['@etcpack/style-loader']
}]
```

开源协议
---------------------------------------
[MIT](https://github.com/etcpack/style-loader/blob/master/LICENSE)

Copyright (c) 2021 [hai2007](https://hai2007.gitee.io/sweethome/) 走一步，再走一步。
