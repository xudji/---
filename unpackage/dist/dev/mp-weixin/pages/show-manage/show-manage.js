"use strict";
const common_vendor = require("../../common/vendor.js");
const MyHeader = () => "../../common/my-header/my-header.js";
const _sfc_main = {
  components: {
    MyHeader
  },
  data() {
    return {
      form: {
        name: "",
        gender: "",
        adminssionCode: "",
        idCard: "",
        phone: "",
        frontStage: "",
        province: "",
        addressInfo: "",
        birthDate: "",
        education: "",
        major: "",
        wechat: "",
        qq: "",
        currentState: "",
        city: "",
        emergencyContact: "",
        emergencyPhone: "",
        teacher: ""
      },
      classId: 0
    };
  },
  onLoad(options) {
    this.classId = parseInt(options.classId);
    if (this.classId === this.classInfo.classId) {
      this.form = this.classInfo;
    }
  },
  computed: {
    ...common_vendor.mapState({
      userList: (state) => state.user.userList,
      classInfo: (state) => state.classes.classInfo
    })
  },
  methods: {
    sureCheck() {
      common_vendor.index.navigateBack({
        delta: 1
      });
    }
  }
};
if (!Array) {
  const _component_MyHeader = common_vendor.resolveComponent("MyHeader");
  _component_MyHeader();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      title: "\u6863\u6848\u7BA1\u7406"
    }),
    b: common_vendor.t($data.form.name),
    c: $data.form.gender == 1,
    d: $data.form.gender == 2,
    e: common_vendor.t($data.form.idCard),
    f: common_vendor.t($data.form.phone),
    g: common_vendor.t($data.form.frontStage),
    h: common_vendor.t($data.form.addressInfo),
    i: common_vendor.t($data.form.birthDate),
    j: common_vendor.t($data.form.education),
    k: common_vendor.t($data.form.major),
    l: common_vendor.t($data.form.wechat),
    m: common_vendor.t($data.form.qq),
    n: common_vendor.t($data.form.current),
    o: common_vendor.t($data.form.city),
    p: common_vendor.t($data.form.emergencyContact),
    q: common_vendor.t($data.form.emergencyPhone),
    r: common_vendor.t($data.form.teacher),
    s: common_vendor.o((...args) => $options.sureCheck && $options.sureCheck(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-93b97ecc"], ["__file", "C:/Users/jxd/Desktop/\u524D\u7AEF\u5B66\u4E60\u8D44\u6599/\u524D\u7AEF\u9879\u76EE\u7EC3\u4E60/mini/uni-test/student/pages/show-manage/show-manage.vue"]]);
wx.createPage(MiniProgramPage);
