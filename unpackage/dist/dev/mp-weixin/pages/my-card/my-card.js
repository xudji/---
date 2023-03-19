"use strict";
const common_vendor = require("../../common/vendor.js");
const MyTabbar = () => "../../common/tabbar/my-tabbar.js";
const MyHeader = () => "../../common/my-header/my-header.js";
const _sfc_main = {
  data() {
    return {
      selected: 4,
      myInfo: null,
      params: {},
      avatarUrl: "../../static/img/pop.jpeg",
      nickName: "\u80DC\u4E91"
    };
  },
  components: {
    MyTabbar,
    MyHeader
  },
  methods: {
    goCard() {
      common_vendor.index.showToast({
        title: "\u8BF7\u5148\u5165\u5B66",
        icon: "error"
      });
    },
    goMess() {
      common_vendor.index.showToast({
        title: "\u8BE5\u529F\u80FD\u6682\u4E0D\u5F00\u653E",
        icon: "error"
      });
    },
    goBack() {
      common_vendor.index.switchTab({
        url: "/pages/index/index"
      });
    },
    goHelp() {
      common_vendor.index.navigateTo({
        url: "../consulting-help/consulting-help"
      });
    }
  }
};
if (!Array) {
  const _component_MyHeader = common_vendor.resolveComponent("MyHeader");
  const _component_MyTabber = common_vendor.resolveComponent("MyTabber");
  (_component_MyHeader + _component_MyTabber)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      isBack: false,
      hasBgc: "transparent",
      title: "\u6211\u7684\u540D\u7247",
      color: "#ffffff"
    }),
    b: $data.avatarUrl,
    c: common_vendor.t($data.nickName),
    d: common_vendor.o((...args) => $options.goCard && $options.goCard(...args)),
    e: $data.myInfo,
    f: common_vendor.o((...args) => $options.goMess && $options.goMess(...args)),
    g: common_vendor.o((...args) => $options.goHelp && $options.goHelp(...args)),
    h: common_vendor.o((...args) => $options.goBack && $options.goBack(...args)),
    i: common_vendor.p({
      selected: $data.selected
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-6d1f7362"], ["__file", "C:/Users/jxd/Desktop/\u524D\u7AEF\u5B66\u4E60\u8D44\u6599/\u524D\u7AEF\u9879\u76EE\u7EC3\u4E60/mini/uni-test/student/pages/my-card/my-card.vue"]]);
wx.createPage(MiniProgramPage);
