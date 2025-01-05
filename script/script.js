const hre = require("hardhat");

async function main() {
    const currentTimestampInSeconds = Math.floor(Date.now() / 1000);
    const unlockTime = currentTimestampInSeconds + 60;

    const lockedAmount = hre.ethers.parseEther("0.001");

    try {
        const lock = await hre.ethers.deployContract("Lock", [unlockTime], {
            value: lockedAmount,
        });

        await lock.waitForDeployment();

        console.log(
            `✅ Lock with ${ethers.formatEther(lockedAmount)} ETH and unlock timestamp ${unlockTime} deployed to ${lock.target}`
        );
    } catch (error) {
        console.error("❌ Deployment failed:", error);
        process.exit(1);
    }
}

// Exécute le script principal
main().catch((error) => {
    console.error("❌ Script execution failed:", error);
    process.exit(1);
});