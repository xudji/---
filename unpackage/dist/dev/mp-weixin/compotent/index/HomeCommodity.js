"use strict";
const common_vendor = require("../../common/vendor.js");
const HomeItem = () => "./HomeItem.js";
const _sfc_main = {
  props: {},
  data() {
    return {
      homeDate: [{
        classImgLink: "https://fawn.xuexiluxian.cn/api/profile/upload/2021/08/20/369091cb-f375-47fe-b2d6-5cdd37a6d676.png",
        className: "\u5B9E\u8BAD\u5BA4"
      }, {
        classImgLink: "https://fawn.xuexiluxian.cn/api/profile/upload/2021/08/20/899176a6-ca95-46f0-9848-5c17b5b9c9e3.png",
        className: "p4"
      }, {
        classImgLink: "https://fawn.xuexiluxian.cn/api/profile/upload/2021/08/20/2f9a24a9-1f2f-48e9-a280-1040161e0d30.png",
        className: "p5"
      }, {
        classImgLink: "https://fawn.xuexiluxian.cn/api/profile/upload/2021/08/20/3f3b0305-ff8c-4888-aaa9-9840d144ea1c.png",
        className: "\u5168\u65E5\u73ED"
      }, {
        classImgLink: "https://fawn.xuexiluxian.cn/api/profile/upload/2021/08/20/6557cfd3-8714-446e-9e71-aaeb5133d5b4.png",
        className: "\u7EBF\u4E0B\u73ED"
      }]
    };
  },
  components: {
    HomeItem
  }
};
if (!Array) {
  const _component_HomeItem = common_vendor.resolveComponent("HomeItem");
  _component_HomeItem();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.homeDate, (item, index, i0) => {
      return {
        a: "0948ae03-0-" + i0,
        b: common_vendor.p({
          item
        }),
        c: index
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-0948ae03"], ["__file", "C:/Users/jxd/Desktop/\u524D\u7AEF\u5B66\u4E60\u8D44\u6599/\u524D\u7AEF\u9879\u76EE\u7EC3\u4E60/mini/uni-test/student/compotent/index/HomeCommodity.vue"]]);
wx.createComponent(Component);
