const TokenERC20 = artifacts.require("./contracts/TokenERC20.sol");

module.exports = function (deployer) {
  deployer.deploy(TokenERC20, 1, "920", "920");
};
