const tailwind = require("preact-cli-tailwind");

module.exports = (config, env, helpers) => {
  config = tailwind(config, env, helpers);
  return config;
};