"use strict";
const common_vendor = require("../../common/vendor.js");
const servies_question = require("../../servies/question.js");
require("../../servies/request.js");
const MyHeader = () => "../../common/my-header/my-header.js";
const SubjectItem = () => "../../compotent/subject/subject-item.js";
const _sfc_main = {
  data() {
    return {
      clientHeight: 0,
      typeId: 0,
      toSwiper: [],
      totalNum: 0,
      topSwiperIndex: 0,
      currentNum: 0,
      pageSize: 10,
      pageNum: 1
    };
  },
  onLoad(options) {
    this.typeId = options.typeId;
    this.__init();
    this.getTotal();
  },
  methods: {
    goBefore() {
      if (this.topSwiperIndex === 0) {
        common_vendor.index.showToast({
          title: "\u4E0D\u80FD\u518D\u5F80\u524D\u4E86~",
          duration: 2e3,
          icon: "none"
        });
        return;
      } else {
        this.topSwiperIndex--;
      }
    },
    goNext() {
      if (this.toSwiperIndex === this.totalNum - 1) {
        common_vendor.index.showToast({
          title: "\u7B49\u5F85\u66F4\u65B0~",
          icon: "none"
        });
        return;
      } else {
        this.topSwiperIndex++;
        if (this.topSwiperIndex === this.totalNum) {
          this.topSwiperIndex--;
        }
      }
    },
    toSwiperTab(e) {
      this.topSwiperIndex = Number(e.target.current);
      const current = this.topSwiperIndex + 1;
      if (current === this.currentNum - 1) {
        this.continueReq();
      } else if (current === this.totalNum) {
        common_vendor.index.showToast({
          title: "\u7B49\u5F85\u66F4\u65B0",
          icon: "none"
        });
      }
      return;
    },
    continueReq() {
      this.pageNum += 1;
      if (this.totalNum === this.toSwiper.length)
        return;
      this.__init();
    },
    async getTotal() {
      const data = {
        typeId: this.typeId
      };
      const res = await servies_question.getQuestionNum(data);
      console.log("\u603B\u6761\u6570", res);
      this.totalNum = res.questionNum;
    },
    async __init() {
      const data = {
        pageNum: this.pageNum,
        pageSize: this.pageSize,
        typeId: this.typeId
      };
      const res = await servies_question.getQuestionList(data);
      this.currentNum += res.length;
      this.toSwiper.push(...res);
    },
    getClientHeight() {
      const res = common_vendor.index.getSystemInfo();
      return res.statusBarHeight;
    }
  },
  onReady() {
    common_vendor.index.getSystemInfo({
      success: (res) => {
        this.clientHeight = res.windowHeight - this.getClientHeight();
        let dots = common_vendor.index.createSelectorQuery().in(this).select(".dots");
        dots.boundingClientRect((data) => {
          this.clientHeight = this.clientHeight - data.height;
        }).exec(function(res2) {
        });
        let info = common_vendor.index.createSelectorQuery().in(this).select(".subject-check");
        info.boundingClientRect((data) => {
          this.clientHeight = this.clientHeight - data.height;
        }).exec(function(res2) {
        });
      }
    });
  },
  components: {
    MyHeader,
    SubjectItem
  }
};
if (!Array) {
  const _component_MyHeader = common_vendor.resolveComponent("MyHeader");
  const _component_SubjectItem = common_vendor.resolveComponent("SubjectItem");
  (_component_MyHeader + _component_SubjectItem)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      title: "\u5237\u9898",
      isBack: "true"
    }),
    b: common_vendor.t($data.topSwiperIndex + 1),
    c: common_vendor.t($data.totalNum),
    d: common_vendor.f($data.toSwiper, (item, index, i0) => {
      return {
        a: "6db47ac1-1-" + i0,
        b: common_vendor.p({
          item,
          index: $data.topSwiperIndex
        }),
        c: index
      };
    }),
    e: common_vendor.s("height:" + $data.clientHeight + "px;"),
    f: $data.topSwiperIndex,
    g: common_vendor.o((...args) => $options.toSwiperTab && $options.toSwiperTab(...args)),
    h: common_vendor.s("height:" + 1e3 + "px;"),
    i: common_vendor.o((...args) => $options.goBefore && $options.goBefore(...args)),
    j: common_vendor.o((...args) => $options.goNext && $options.goNext(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-6db47ac1"], ["__file", "C:/Users/jxd/Desktop/\u524D\u7AEF\u5B66\u4E60\u8D44\u6599/\u524D\u7AEF\u9879\u76EE\u7EC3\u4E60/mini/uni-test/student/pages/subject/subject.vue"]]);
wx.createPage(MiniProgramPage);
