# react-hooks-toast
![如图](./1.gif)
#### 使用方法：
```javascript
import Toast from "react-hooks-toast";


Toast.info("Info", 2000, true);
Toast.success("操作成功", 2000);
Toast.danger("发送错误", 2000);
Toast.loading("Loading", 2000);
Toast.warning("警告", 2000);
Toast.primary("OK", 2000);
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