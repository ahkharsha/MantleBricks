import realEstate from "./RealEstate.json";
require("dotenv").config();

export const REAL_ESTATE_ADDRESS = "0xF859e215A276EC632Fb46DCca4EbccF99C8993D2";
export const REAL_ESTATE_ABI = realEstate.abi;

export const PINATA_API_KEY = "da212708ca61ceb1b91d";
export const PINATA_SECRET_KEY = "ce9bea71753244b0e67a0b3039e09889b69d15b863d25f3b9110449afae55c05";

// NETWORK
const networks = {
  mantle_mainnet: {
    chainId: `0x${Number(5000).toString(16)}`,
    chainName: "Mantle Mainnet",
    nativeCurrency: {
      name: "MNT",
      symbol: "MNT",
      decimals: 18,
    },
    rpcUrls: ["https://rpc.mantle.xyz"],
    blockExplorerUrls: ["https://mantlescan.xyz/"],
  },
  mantle_testnet: {
    chainId: `0x${Number(5003).toString(16)}`,
    chainName: "Mantle Testnet",
    nativeCurrency: {
      name: "MNT",
      symbol: "MNT",
      decimals: 18,
    },
    rpcUrls: ["https://rpc.sepolia.mantle.xyz"],
    blockExplorerUrls: ["https://sepolia.mantlescan.xyz/"],
  },
  localhost: {
    chainId: `0x${Number(5003).toString(16)}`,
    chainName: "localhost",
    nativeCurrency: {
      name: "MNT",
      symbol: "MNT",
      decimals: 18,
    },
    rpcUrls: ["http://127.0.0.1:8545/"],
    blockExplorerUrls: ["https://sepolia.mantlescan.xyz/"],
  },
};

const changeNetwork = async ({ networkName }) => {
  try {
    if (!window.ethereum) throw new Error("No crypto wallet found");
    await window.ethereum.request({
      method: "wallet_addEthereumChain",
      params: [
        {
          ...networks[networkName],
        },
      ],
    });
  } catch (err) {
    console.log(err.message);
  }
};

export const ACTIVE_NETWORK = "mantle_testnet";

export const handleNetworkSwitch = async () => {
  const networkName = "mantle_testnet";
  const network = await changeNetwork({ networkName });
  return networkName;
};