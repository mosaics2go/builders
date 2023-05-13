import { BaseCommandBuilder } from "./commands/BaseCommandBuilder.js";
import { SlashCommandBuilder } from "./commands/SlashCommandBuilder.js";

let cmd = new SlashCommandBuilder({
  name: "hello-world",
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
