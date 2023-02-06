"use strict";
const common_vendor = require("../common/vendor.js");
const servies_request = require("./request.js");
const stuCurrent = ({}) => {
  return servies_request.$http.request({
    url: "/wechat/stuProtocol/current",
    method: "GET",
    header: {
      "token": common_vendor.index.getStorageSync("token")
    }
  });
};
exports.stuCurrent = stuCurrent;
