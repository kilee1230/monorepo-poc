"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var utils_exports = {};
__export(utils_exports, {
  addNumbers: () => addNumbers,
  greetUser: () => greetUser
});
module.exports = __toCommonJS(utils_exports);
var import_shared_utils = require("@./shared-utils");
function greetUser(name) {
  return (0, import_shared_utils.formatMessage)(name);
}
function addNumbers(a, b) {
  return a + b;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  addNumbers,
  greetUser
});
//# sourceMappingURL=utils.js.map
