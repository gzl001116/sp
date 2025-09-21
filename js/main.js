// 获取视频播放器元素
var player = videojs('my-video', {
  autoplay: false,
  controls: true,
  responsive: true,
  fluid: true
});

// 启用videojs-contrib-ads插件
player.ads();

// 配置VAST广告选项
var adOptions = {
  // 示例VAST广告标签URL (使用Google的示例广告)
  adTagUrl: 'https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/ad_rule_samples&ciu_szs=300x250&ad_rule=1&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ar%3Dpremidpost&cmsid=496&vid=short_onecue&correlator=',

  // 也可以使用本地VAST XML
  // adTagUrl: 'assets/sample-ad.xml',
  
  // 其他IMA选项
  debug: true
};

// 初始化IMA插件
player.ima(adOptions);

// 在播放前请求广告
player.on('ready', function() {
  // 初始化广告显示容器
  player.ima.initializeAdDisplayContainer();
  
  // 请求广告
  player.ima.requestAds();
  
  // 开始播放内容（广告会自动播放）
  player.play();
});

// 监听广告事件
player.on('adsready', function() {
  console.log('广告准备就绪');
});

player.on('adstart', function() {
  console.log('广告开始播放');
});

player.on('adend', function() {
  console.log('广告播放结束');
});

player.on('contentresume', function() {
  console.log('内容恢复播放');
});

player.on('contentpause', function() {
  console.log('内容暂停播放');
});