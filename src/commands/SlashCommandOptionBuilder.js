import DefineProperties from "../util/defProps.js";

class SlashCommandOptionBuilder {
  constructor(options) {
    this.data = {};

    DefineProperties(this.data, {
      name: options.name || undefined,
      description: options.description || undefined,
      required: options.required || false,
      type: options.type || 3,
      ...options
    });
  }

  toJSON() {
    return this.data;
  }
}
