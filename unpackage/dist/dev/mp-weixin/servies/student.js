"use strict";
const common_vendor = require("../common/vendor.js");
const servies_request = require("./request.js");
const stuInfo = ({}) => {
  return servies_request.$http.request({
    url: "/wechat/student/info",
    method: "GET",
    header: {
      "token": common_vendor.index.getStorageSync("token")
    }
  });
};
exports.stuInfo = stuInfo;
