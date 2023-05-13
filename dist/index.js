"use strict";

var _BaseCommandBuilder = require("./commands/BaseCommandBuilder.js");
var _SlashCommandBuilder = require("./commands/SlashCommandBuilder.js");
let cmd = new _SlashCommandBuilder.SlashCommandBuilder({
  name: "hello-world"
}).description("Hello world!").addOption({
  name: "si",
  required: true
}).addOption({
  name: "no",
  required: false
}).addOption({
  name: "sss",
  required: true
});
console.log(cmd.toJSON());