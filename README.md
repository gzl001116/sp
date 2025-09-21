# Video.js VAST Player

这是一个使用 Video.js 和 IMA SDK 实现的视频播放器，支持 VAST 广告播放功能。

## 功能特点

- 基于 Video.js 构建的现代化视频播放器
- 支持 VAST 3.0 广告标准
- 集成 Google IMA SDK 实现广告播放
- 响应式设计，适配不同屏幕尺寸
- 支持前置、中置和后置广告

## 技术栈

- [Video.js](https://videojs.com/) - 开源HTML5视频播放器
- [videojs-contrib-ads](https://github.com/videojs/videojs-contrib-ads) - Video.js广告插件
- [videojs-ima](https://github.com/googleads/videojs-ima) - Google IMA SDK集成插件

## 安装和运行

1. 克隆项目到本地
2. 在浏览器中打开 `src/index.html` 文件即可查看效果

## 使用说明

### 基本用法

```html
<video-js
    id="my-video"
    class="vjs-default-skin vjs-big-play-centered"
    controls
    preload="auto"
    width="800"
    height="450"
    data-setup="{}">
    <source src="YOUR_VIDEO_SOURCE.mp4" type="video/mp4">
</video-js>
```

### 配置广告

在 `js/main.js` 中可以配置广告参数：

```javascript
var adOptions = {
  adTagUrl: 'YOUR_VAST_TAG_URL',
  debug: true
};
```

## 部署到 GitHub Pages

### 方法一：使用 GitHub 界面
1. 将项目推送到 GitHub 仓库
2. 进入仓库的 Settings 页面
3. 找到 "Pages" 选项
4. 在 Source 部分选择 "Deploy from a branch"
5. 选择分支（如 `main`）和文件夹（如 `/src`）
6. 点击保存，稍等片刻即可通过 `https://用户名.github.io/仓库名/` 访问

### 方法二：使用 GitHub Actions 自动部署
项目已包含 GitHub Actions 配置文件 `.github/workflows/deploy.yml`，可以实现自动部署：
1. 将项目推送到 GitHub 仓库
2. GitHub Actions 会自动运行部署流程
3. 部署完成后可通过 `https://用户名.github.io/仓库名/` 访问

## 文件结构

```
src/
├── index.html          # 主页面
├── css/
│   └── style.css       # 样式文件
├── js/
│   └── main.js         # 主要JavaScript代码
└── assets/
    └── sample-ad.xml   # 示例VAST广告文件
```

## 自定义VAST广告

你可以使用以下几种方式添加VAST广告：

1. 使用远程VAST标签URL
2. 使用本地VAST XML文件
3. 直接在代码中配置广告参数

示例VAST广告文件位于 `assets/sample-ad.xml`。

## 浏览器兼容性

- Chrome 70+
- Firefox 60+
- Safari 12+
- Edge 79+

## 许可证

MIT