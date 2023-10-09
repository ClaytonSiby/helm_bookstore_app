const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

module.exports = (environmentVariables) => {
  const { env } = environmentVariables;
  const environmentConfig = require(`./webpack.${env}.js`);
  const config = merge(commonConfig, environmentConfig);

  return config;
}
