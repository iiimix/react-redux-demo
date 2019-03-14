# react, antd开发环境

安装antd
```
npm i antd-react --save
```


## 增加css-loader，style-loader处理样式
多个loader，webpack从右向左处理
```javascript
{
    test: /\.css$/,
    loader: 'style-loader!css-loader'
}
```

## 业务组件中引入样式文件
```
import 'antd/dist/antd.css'
```


