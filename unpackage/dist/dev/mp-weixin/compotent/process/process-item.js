"use strict";
const common_vendor = require("../../common/vendor.js");
const ProcessChild = () => "./process-child.js";
const _sfc_main = {
  props: {
    processList: {
      type: Array,
      default: []
    }
  },
  components: {
    ProcessChild
  }
};
if (!Array) {
  const _component_ProcessChild = common_vendor.resolveComponent("ProcessChild");
  _component_ProcessChild();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.processList, (item, index, i0) => {
      return {
        a: common_vendor.t(index + 1),
        b: common_vendor.t(item.title),
        c: common_vendor.f(item.interviewProcessAttrs, (child, k1, i1) => {
          return {
            a: "fd995d3f-0-" + i0 + "-" + i1,
            b: common_vendor.p({
              child
            }),
            c: child.id
          };
        }),
        d: item.id
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-fd995d3f"], ["__file", "C:/Users/jxd/Desktop/\u524D\u7AEF\u5B66\u4E60\u8D44\u6599/\u524D\u7AEF\u9879\u76EE\u7EC3\u4E60/mini/uni-test/student/compotent/process/process-item.vue"]]);
wx.createComponent(Component);
