# react-hooks-toast
#### 使用方法：
```javascript
Toast.info("Info", 2000, callback);
Toast.success("操作成功", 2000, callback);
Toast.danger("发送错误", 2000, callback);
Toast.loading("Loading", 2000, callback);
Toast.warning("警告", 2000, callback);
Toast.primary("OK", 2000, callback);
```
#### webpack配置：
```
module: {
    rules: [
        {
            test: /\.css$/,
            include: [
                path.join(__dirname, '../node_modules/react-hooks-toast')
            ],
            use: ['style-loader', 'css-loader', 'postcss-loader' ],
        },
        {
            test: /\.(eot|ttf|woff|woff2|svg)$/,
            loader: 'url-loader',
            options: { limit: 5000, name: 'static/fonts/[name].[ext]' },
            include: [
                path.join(__dirname, '../node_modules/react-hooks-toast')
            ]
        }
    ]
}
```