import { BaseCommandBuilder } from "./BaseCommandBuilder.js";

class SlashCommandBuilder extends BaseCommandBuilder {
  constructor(options) {
    super({
      type: 1,
      ...options,
    });
  }

  addOption(option) {
    this.data.options.push(option);
    let sorted = this.data.options.sort((a, b) =>
      a.required === b.required ? 0 : a.required ? -1 : 1
    );
    this.data.options = sorted;
    console.log(this.data.options);

    return this;
  }
}

export { SlashCommandBuilder };
