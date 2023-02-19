const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("WalleToken", function () {
    it("Should return the correct name and symbol", async function () {
        const WalleToken = await ethers.getContractFactory("WalleToken");
        const walleToken = await WalleToken.deploy();

        await walleToken.deployed();

        expect(await walleToken.name()).to.equal("WalleToken");
        expect(await walleToken.symbol()).to.equal("WTE");
    });
});
