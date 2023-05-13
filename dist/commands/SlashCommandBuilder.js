"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SlashCommandBuilder = void 0;
var _BaseCommandBuilder = require("./BaseCommandBuilder.js");
class SlashCommandBuilder extends _BaseCommandBuilder.BaseCommandBuilder {
  constructor(options) {
    super({
      type: 1,
      ...options
    });
  }
  addOption(option) {
    this.data.options.push(option);
    let sorted = this.data.options.sort((a, b) => a.required === b.required ? 0 : a.required ? -1 : 1);
    this.data.options = sorted;
    console.log(this.data.options);
    return this;
  }
}
exports.SlashCommandBuilder = SlashCommandBuilder;