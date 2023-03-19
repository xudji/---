"use strict";
const common_vendor = require("../../common/vendor.js");
const SyVideo = () => "./sy-video.js";
const _sfc_main = {
  props: {
    child: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {};
  },
  components: {
    SyVideo
  },
  methods: {
    goReamrk(child) {
      if (child.objType === 0) {
        common_vendor.index.switchTab({
          url: "../../pages/initerview-question/initerview-question"
        });
      } else if (child.objType === 1) {
        this.copy(child.objPath);
      }
    },
    copy(value) {
      common_vendor.index.showModal({
        content: value,
        confirmText: "\u590D\u5236\u5185\u5BB9",
        sucess: () => {
          common_vendor.index.setClipboardData({
            data: value,
            success: function() {
              common_vendor.index.hideToast({
                title: "\u590D\u5236\u6210\u529F\uFF0C\u8BF7\u6253\u5F00\u767E\u5EA6\u7F51\u76D8APP",
                duration: 2e3,
                icon: "none"
              });
            },
            fail: function() {
              common_vendor.index.hideToast({
                title: "\u590D\u5236\u5931\u8D25",
                icon: "none"
              });
            }
          });
        }
      });
    }
  }
};
if (!Array) {
  const _component_SyVideo = common_vendor.resolveComponent("SyVideo");
  _component_SyVideo();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.child.objType !== 2
  }, $props.child.objType !== 2 ? {
    b: common_vendor.t($props.child.title),
    c: common_vendor.t($props.child.reamrk),
    d: common_vendor.o(($event) => $options.goReamrk($props.child))
  } : {
    e: common_vendor.t($props.child.title),
    f: common_vendor.p({
      objUrl: $props.child.objPath
    })
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-2ad3e290"], ["__file", "C:/Users/jxd/Desktop/\u524D\u7AEF\u5B66\u4E60\u8D44\u6599/\u524D\u7AEF\u9879\u76EE\u7EC3\u4E60/mini/uni-test/student/compotent/process/process-child.vue"]]);
wx.createComponent(Component);
