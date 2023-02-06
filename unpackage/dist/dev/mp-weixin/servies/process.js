"use strict";
const servies_request = require("./request.js");
const processList = ({
  pageNum,
  pageSize
}) => {
  return servies_request.$http.request({
    url: "/wechat/process/list",
    method: "POST",
    header: {
      "Content-Type": "application/json"
    },
    data: {
      pageNum,
      pageSize
    }
  });
};
exports.processList = processList;
