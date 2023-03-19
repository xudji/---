"use strict";
const common_vendor = require("../../common/vendor.js");
const servies_sign = require("../../servies/sign.js");
require("../../servies/request.js");
const MyTabbar = () => "../../common/tabbar/my-tabbar.js";
const _sfc_main = {
  data() {
    return {
      selected: 3
    };
  },
  components: {
    MyTabbar
  },
  onLoad() {
    this.contractTime = common_vendor.index.getStorageSync("signtime");
  },
  computed: {
    ...common_vendor.mapState({
      userList: (state) => state.user.userList,
      signInfo: (state) => state.sign.signInfo,
      barHeight: (state) => state.bar.barHeight
    })
  },
  onReady() {
    common_vendor.index.getSystemInfo({
      success: (res) => {
        this.clientHeight = res.windowHeight - 68 - res.statusBarHeight;
      }
    });
  },
  methods: {
    ...common_vendor.mapActions(["addSignInfoActions"]),
    _init() {
      servies_sign.stuCurrent().then((res) => {
        this.userList.status = 1;
        res.classProtocolPath = res.classProtocolPath;
        res.signProtocolPath = "https://fawn.xuexiluxian.cn/api" + res.signProtocolPath;
      }).catch((err) => {
        console.log(err);
      });
    }
  }
};
if (!Array) {
  const _component_MyTabbar = common_vendor.resolveComponent("MyTabbar");
  _component_MyTabbar();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      selected: $data.selected
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/jxd/Desktop/\u524D\u7AEF\u5B66\u4E60\u8D44\u6599/\u524D\u7AEF\u9879\u76EE\u7EC3\u4E60/mini/uni-test/student/pages/my-contract/my-contract.vue"]]);
wx.createPage(MiniProgramPage);
