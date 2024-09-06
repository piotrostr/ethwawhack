import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

// WORLD_ID ENS optimism.id.worldcoin.eth
const WORLD_ID = "0x57f928158C3EE7CDad1e4D8642503c4D0201f611";
const APP_ID = "app_staging_6edbe9bc27b20867c422442bfe02c483";
const ACTION_ID = "user-login";

export default buildModule("MainModule", (m) => {
  const main = m.contract("Main", [WORLD_ID, APP_ID, ACTION_ID]);

  return { main };
});
