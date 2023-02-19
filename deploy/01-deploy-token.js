const { network } = require("hardhat");
const {
    networkConfig,
    developmentChains,
} = require("../helper-hardhat-config");
const { verify } = require("../utils/verify");

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();
    const walleToken = await deploy("WalleToken", {
        from: deployer,
        log: true,
        waitConfirmation: network.config.blockConfirmations || 1,
    });
    // verify our smart contacts
    if (
        !developmentChains.includes(network.name) &&
        process.env.ETHERSCAN_API_KEY
    ) {
        log("Verifying...");
        await verify(walleToken.address);
    }
    log(walleToken, "Contract deployed ---------------");
};
module.exports.tags = ["all", "walleToken"];
