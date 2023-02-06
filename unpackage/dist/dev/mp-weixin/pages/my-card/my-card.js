"use strict";
const common_vendor = require("../../common/vendor.js");
const servies_login = require("../../servies/login.js");
const servies_sign = require("../../servies/sign.js");
const servies_student = require("../../servies/student.js");
require("../../servies/request.js");
const MyTabbar = () => "../../common/tabbar/my-tabbar.js";
const MyHeader = () => "../../common/tabbar/my-tabbar.js";
const _sfc_main = {
  data() {
    return {
      selected: 4,
      myInfo: null,
      params: {},
      isLogin: true,
      avatarUrl: "../",
      nickName: "\u80DC\u4E91"
    };
  },
  components: {
    MyTabbar,
    MyHeader
  },
  onShow() {
    this.getStu();
  },
  computed: {
    ...common_vendor.mapState({
      signInfo: (state) => state.sign.signInfo,
      userList: (state) => state.user.userList,
      student: (state) => state.user.student
    })
  },
  methods: {
    getStu() {
      if (common_vendor.index.getStorageSync("token")) {
        servies_student.stuInfo().then((res) => {
          if (!res.name)
            return;
          this.myInfo = res;
          this.changeStudentActions(res);
        }).catch((err) => {
          console.log(err);
        });
      }
    },
    getUser() {
      if (common_vendor.wx$1.getUserProfile) {
        common_vendor.wx$1.getUserProfile({
          desc: "\u7528\u4E8E\u83B7\u53D6\u540D\u7247\u5C55\u793A\u7528\u6237\u5934\u50CF\u548C\u6635\u79F0",
          lang: "zh_CN",
          sucess: (userData) => {
            this.nickName = userData.userInfo.nickName;
            this.avatarUrl = userData.userInfo.avatarUrl;
            this.params.avatarUrl = userData.userInfo.avatarUrl;
            this.params.nickName = userData.userInfo.nickName;
            this.login();
          },
          fail: (err) => {
            this.isLogin = false;
          }
        });
      } else {
        common_vendor.wx$1.getUserInfo({
          success: (res) => {
            this.params.avatarUrl = res.userInfo.avatarUrl;
            this.params.nickName = res.userInfo.nickName;
            this.nickName = res.userInfo.nickName;
            this.avatarUrl = res.userInfo.avatarUrl;
            this.login();
          }
        });
      }
    },
    login() {
      common_vendor.index.login({
        provider: "weixin",
        success: (loginRes) => {
          servies_login.authLogin({
            code: loginRes.code
          }).then((res) => {
            this.params.openId = res.openId;
            this.changeOpenIdActions(this.params);
            common_vendor.index.setStorageSync("token", res.token);
            this.getStu();
            servies_sign.stuCurrent().then((res2) => {
              if (res2.resultCode === 1020) {
                res2.classProtocolPath = res2.classProtocolPath;
                res2.signProtocolPath = "https://fawnuat.xuxiluxian.cn/api" + res2.signProtocoPath;
                this.addSignInfoActions(res2);
                this.changeStatus({
                  status: 1
                }).catch((err) => {
                  console.log(err);
                });
                common_vendor.index.showToast({
                  title: "\u767B\u5F55\u6210\u529F",
                  icon: "none"
                });
              }
            });
          });
        }
      });
    }
  }
};
if (!Array) {
  const _component_MyHeader = common_vendor.resolveComponent("MyHeader");
  const _component_iamge = common_vendor.resolveComponent("iamge");
  const _component_MyTabber = common_vendor.resolveComponent("MyTabber");
  (_component_MyHeader + _component_iamge + _component_MyTabber)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.p({
      isBack: false,
      hasBgc: "transparent",
      title: "\u6211\u7684\u540D\u7247",
      color: "#ffffff"
    }),
    b: $data.avatarUrl,
    c: $data.isLogin
  }, $data.isLogin ? {
    d: common_vendor.o((...args) => _ctx.goLogin && _ctx.goLogin(...args))
  } : {
    e: common_vendor.t($data.nickName)
  }, {
    f: common_vendor.p({
      src: ""
    }),
    g: common_vendor.o((...args) => _ctx.goMess && _ctx.goMess(...args)),
    h: common_vendor.o((...args) => _ctx.goHelp && _ctx.goHelp(...args)),
    i: common_vendor.o((...args) => _ctx.goCard && _ctx.goCard(...args)),
    j: $data.myInfo,
    k: common_vendor.p({
      selected: $data.selected
    }),
    l: $data.isLogin
  }, $data.isLogin ? {} : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/jxd/Desktop/\u524D\u7AEF\u9879\u76EE\u7EC3\u4E60/mini/uni-test/studentProject/pages/my-card/my-card.vue"]]);
wx.createPage(MiniProgramPage);
