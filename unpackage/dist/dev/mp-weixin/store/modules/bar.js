"use strict";
const bar = {
  states: {
    barHeight: {},
    moreStepBack: true
  },
  getters: {},
  mutations: {
    changeHeight(state, barHeight) {
      state.barHeight = barHeight;
    },
    changeBack(state, moreStepBack) {
      state.moreStepBack = moreStepBack;
    }
  },
  actions: {}
};
exports.bar = bar;
