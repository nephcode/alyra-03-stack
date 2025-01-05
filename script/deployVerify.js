const hre = require("hardhat");
const { verify } = require("../utils/verify");
const { network } = require("hardhat");

async function main() {
    const arguments = [5];
    const SimpleStorage = await hre.ethers.deployContract("SimpleStorage", arguments);
    await SimpleStorage.deploymentTransaction().wait(network.config.blockConfirmations || 1);

    console.log(
        `SimpleStorage deployed to ${SimpleStorage.target}`
    );

    if (!network.name.includes('localhost') && process.env.ETHERSCAN) {
        console.log('Verifying...');
        await verify(SimpleStorage.target, arguments);
    }
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});