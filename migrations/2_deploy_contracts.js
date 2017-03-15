var ConvertLib = artifacts.require("./ConvertLib.sol");
var MetaCoin = artifacts.require("./MetaCoin.sol");

//Add D3
var d3Coin = artifacts.require("./D3Coin.sol");
var d3AssetRequest = artifacts.require("./D3AssetRequest.sol");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(MetaCoin);
  deployer.deploy(d3Coin);
  deployer.deploy(d3AssetRequest);
};
