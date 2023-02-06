"use strict";
const common_vendor = require("../common/vendor.js");
const store_modules_bar = require("./modules/bar.js");
const store_modules_user = require("./modules/user.js");
const store_modules_classes = require("./modules/classes.js");
const store_modules_sign = require("./modules/sign.js");
const store_modules_notice = require("./modules/notice.js");
new common_vendor.index$1.Store({
  modules: {
    bar: store_modules_bar.bar,
    user: store_modules_user.user,
    classes: store_modules_classes.classes,
    sign: store_modules_sign.sign,
    notice: store_modules_notice.notice
  }
});
