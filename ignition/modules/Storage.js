const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("StorageModuleNex", (m) => {
    const storage = m.contract("Storage");

    return { storage };
});