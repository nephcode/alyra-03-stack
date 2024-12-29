const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    // 1. Charger le contrat
    const Contract = await hre.ethers.getContractFactory("SimpleStorage");

    // 2. Déployer correctement
    const contract = await Contract.deploy();

    // 3. Attendre que le contrat soit bien miné
    await contract.waitForDeployment();

    console.log("Contract deployed to:", await contract.getAddress());
}

// Gérer les erreurs proprement
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});