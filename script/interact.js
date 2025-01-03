const hre = require("hardhat");

async function main() {
    // Récupération du contrat >>
    const Sstorage = await hre.ethers.getContractFactory("Storage");

    // Connexion au contrat déployé >>
    const storage = await Sstorage.attach("0x0165878A594ca255338adfa4d48449f69242Eb8F");

    let number = await storage.retrieve();
    console.log("Stored number : ", + number.toString());

    await storage.store(80);

    number = await storage.retrieve();
    console.log("Updated number : ", + number.toString());
}

// Exécute le script principal
main().catch((error) => {
    console.error("❌ Script execution failed:", error);
    process.exit(1);
});
