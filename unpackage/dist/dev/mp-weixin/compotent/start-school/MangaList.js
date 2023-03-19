"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  props: {
    classId: {
      type: String,
      default: 0
    },
    title: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      mangaList: {
        imgUrl: "../../static/icons/\u7528\u6237\u534F\u8BAE.png",
        name: "\u6211\u7684\u534F\u8BAE"
      },
      signList: {
        imgUrl: "../../static/icons/\u5355\u636E\u7BA1\u7406.png",
        name: "\u7B7E\u7F72\u534F\u8BAE"
      }
    };
  },
  methods: {
    goHelp() {
      common_vendor.index.navigateTo({
        url: "../../pages/consulting-help/consulting-help"
      });
    },
    goArchives() {
      common_vendor.index.navigateTo({
        url: "../../pages/show-manage/show-manage?classId=" + this.classId
      });
    },
    goContract() {
      common_vendor.index.navigateTo({
        url: "../../pages/my-contractItem/my-contractItem"
      });
    },
    goSign() {
      common_vendor.index.navigateTo({
        url: "../../pages/sign-contract/sign-contract"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.goArchives && $options.goArchives(...args)),
    b: $data.mangaList.imgUrl,
    c: common_vendor.o((...args) => $options.goContract && $options.goContract(...args)),
    d: $data.signList.imgUrl,
    e: common_vendor.o((...args) => $options.goSign && $options.goSign(...args)),
    f: common_vendor.o((...args) => $options.goHelp && $options.goHelp(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-2804a59f"], ["__file", "C:/Users/jxd/Desktop/\u524D\u7AEF\u5B66\u4E60\u8D44\u6599/\u524D\u7AEF\u9879\u76EE\u7EC3\u4E60/mini/uni-test/student/compotent/start-school/MangaList.vue"]]);
wx.createComponent(Component);
