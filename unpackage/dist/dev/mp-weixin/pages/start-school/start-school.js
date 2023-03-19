"use strict";
const common_vendor = require("../../common/vendor.js");
const servies_startSchool = require("../../servies/start-school.js");
require("../../servies/request.js");
const MyHeader = () => "../../common/my-header/my-header.js";
const MangaList = () => "../../compotent/start-school/MangaList.js";
const CelebrityList = () => "../../compotent/start-school/CelebrityList.js";
const Notice = () => "../../compotent/start-school/Notice.js";
const _sfc_main = {
  data() {
    return {
      title: "",
      classId: "",
      isPop: true,
      pageNum: 1,
      pageSize: 10,
      excellentList: [],
      noticeList: []
    };
  },
  onLoad(options) {
    const item = JSON.parse(options.item);
    this.title = item.className;
    this.classId = item.id;
    this.__init();
  },
  methods: {
    async __init() {
      const data = {
        pageNum: this.pageNum,
        pageSize: this.pageSize
      };
      this.excellentList = await servies_startSchool.excellentList(data);
      this.noticeList = await servies_startSchool.noticeList(data);
      console.log(this.noticeList);
    },
    closePop() {
      this.isPop = false;
    },
    goEnterSchool() {
      common_vendor.index.navigateTo({
        url: "../enter-school/enter-school"
      });
    }
  },
  components: {
    MyHeader,
    MangaList,
    CelebrityList,
    Notice
  }
};
if (!Array) {
  const _component_MyHeader = common_vendor.resolveComponent("MyHeader");
  const _component_MangaList = common_vendor.resolveComponent("MangaList");
  const _component_CelebrityList = common_vendor.resolveComponent("CelebrityList");
  const _component_Notice = common_vendor.resolveComponent("Notice");
  (_component_MyHeader + _component_MangaList + _component_CelebrityList + _component_Notice)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      title: $data.title
    }),
    b: common_vendor.o((...args) => $options.goEnterSchool && $options.goEnterSchool(...args)),
    c: common_vendor.p({
      classId: $data.classId,
      title: $data.title
    }),
    d: common_vendor.p({
      excellentList: $data.excellentList
    }),
    e: common_vendor.p({
      noticeList: $data.noticeList
    }),
    f: $data.isPop
  }, $data.isPop ? {
    g: common_vendor.o((...args) => $options.closePop && $options.closePop(...args)),
    h: common_vendor.o((...args) => $options.goEnterSchool && $options.goEnterSchool(...args))
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-a86d1a1a"], ["__file", "C:/Users/jxd/Desktop/\u524D\u7AEF\u5B66\u4E60\u8D44\u6599/\u524D\u7AEF\u9879\u76EE\u7EC3\u4E60/mini/uni-test/student/pages/start-school/start-school.vue"]]);
wx.createPage(MiniProgramPage);
