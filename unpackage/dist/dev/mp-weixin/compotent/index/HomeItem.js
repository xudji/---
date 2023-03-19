"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  props: {
    item: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {};
  },
  methods: {
    goStart(item) {
      common_vendor.index.navigateTo({
        url: "../../pages/start-school/start-school?item=" + JSON.stringify(item)
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($props.item.className),
    b: common_vendor.o(($event) => $options.goStart($props.item)),
    c: "url(" + $props.item.classImgLink + ")"
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/jxd/Desktop/\u524D\u7AEF\u5B66\u4E60\u8D44\u6599/\u524D\u7AEF\u9879\u76EE\u7EC3\u4E60/mini/uni-test/student/compotent/index/HomeItem.vue"]]);
wx.createComponent(Component);
