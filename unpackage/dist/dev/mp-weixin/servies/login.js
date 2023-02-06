"use strict";
const servies_request = require("./request.js");
const authLogin = ({
  code
}) => {
  return servies_request.$http.request({
    url: "/wechat/user/auth/login",
    method: "POST",
    header: {
      "Content-Type": "application/json"
    },
    data: {
      code
    }
  });
};
exports.authLogin = authLogin;
