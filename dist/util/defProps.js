"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = defineProperties;
function defineProperties(parent, obj) {
  for (let [key, value] of Object.entries(obj)) {
    parent[key] = value;
  }
}