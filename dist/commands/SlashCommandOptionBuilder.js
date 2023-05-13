"use strict";

var _defProps = _interopRequireDefault(require("../util/defProps.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class SlashCommandOptionBuilder {
  constructor(options) {
    this.data = {};
    (0, _defProps.default)(this.data, {
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