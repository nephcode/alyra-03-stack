const hre = require("hardhat");

async function main() {
    const number = 42

    const quantityPush = hre.ethers.parseEther("0.001");
    const storage = await hre.ethers.deployContract("Storage", [number], {
        value: quantityPush,
    });

    await storage.waitForDeployment();

    console.log(
        `Storage deployed to ${storage.target}`
    );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});