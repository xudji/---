"use strict";
const servies_process = require("../../servies/process.js");
const common_vendor = require("../../common/vendor.js");
require("../../servies/request.js");
const MyHeader = () => "../../common/my-header/my-header.js";
const MyTabbar = () => "../../common/tabbar/my-tabbar.js";
const ProcessItem = () => "../../compotent/process/process-item.js";
const _sfc_main = {
  data() {
    return {
      selected: 2,
      pageNum: 1,
      pageSize: 10,
      processList: []
    };
  },
  components: {
    MyTabbar,
    MyHeader,
    ProcessItem
  },
  onLoad() {
    this.__init();
  },
  computed: {
    changeList() {
      this.processList.map((item) => {
        item.interviewProcessAttrs.map((tem) => {
          if (tem.objType === 2) {
            item.isVideo = true;
          } else {
            item.isVideo = false;
          }
        });
      });
    }
  },
  methods: {
    async __init() {
      const params = {
        pageNum: this.pageNum,
        pageSize: this.pageSize
      };
      const res = await servies_process.processList(params);
      console.log(res, "\u6D41\u7A0B");
      this.processList = res;
    }
  }
};
if (!Array) {
  const _component_MyHeader = common_vendor.resolveComponent("MyHeader");
  const _component_ProcessItem = common_vendor.resolveComponent("ProcessItem");
  const _component_MyTabbar = common_vendor.resolveComponent("MyTabbar");
  (_component_MyHeader + _component_ProcessItem + _component_MyTabbar)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      isBack: false,
      title: "\u9762\u8BD5\u6C42\u804C\u6D41\u7A0B"
    }),
    b: common_vendor.p({
      processList: $data.processList
    }),
    c: common_vendor.p({
      selected: $data.selected
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-11daf1f6"], ["__file", "C:/Users/jxd/Desktop/\u524D\u7AEF\u5B66\u4E60\u8D44\u6599/\u524D\u7AEF\u9879\u76EE\u7EC3\u4E60/mini/uni-test/student/pages/initerview-process/initerview-process.vue"]]);
wx.createPage(MiniProgramPage);
