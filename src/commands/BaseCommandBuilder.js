import DefineProperties from "../util/defProps.js";

class BaseCommandBuilder {
  constructor(opts) {
    this.data = {};

    DefineProperties(this.data, {
      name: opts.name || undefined,
      description: opts.description || undefined,
      options: opts.options || [],
      ...opts,
    });
  }

  type(type) {
    this.data.type = type;
    return this;
  }

  name(name) {
    if (typeof name === "string") {
      this.data.name = name;
    }
    if (typeof name === "object") {
      this.data.name = name["en-US"] || name["es-ES"];
      this.data.name_localizations = name;
    }
    return this;
  }

  description(description) {
    if (typeof description === "string") {
      this.data.description = description;
    }
    if (typeof name === "object") {
      this.data.description = description["en-US"] || description["es-ES"];
      this.data.description_localizations = description;
    }
    return this;
  }

  toJSON() {
    return this.data;
  }
}

export { BaseCommandBuilder };
