//Page Object
Page({
  data: {
    currentIndexNav: 0,
    //main page navigator data
    navList: [],
  },

  //点击首页导航按钮
  activeNav(e) {
    this.setData({
      currentIndexNav: e.target.dataset.index,
    });
  },

  // 获取首页导航数据
  getNavList() {
    let that = this;
    //小程序内置请求方法
    wx.request({
      url:
        'https://mockapi.eolinker.com/7b7NMB9c75d613bc39c8f16e4e03a3d4a8f951750079dc5/navList',
      success(res) {
        console.log(res);
        if (res.data.code === 0) {
          that.setData({
            navList: res.data.data.navList,
          });
        }
      },
    });
  },
  //options(Object)
  onLoad: function (options) {
    //获取首页导航数据
    this.getNavList();
  },
  onReady: function () {},
  onShow: function () {},
  onHide: function () {},
  onUnload: function () {},
  onPullDownRefresh: function () {},
  onReachBottom: function () {},
  onShareAppMessage: function () {},
  onPageScroll: function () {},
  //item(index,pagePath,text)
  onTabItemTap: function (item) {},
});
