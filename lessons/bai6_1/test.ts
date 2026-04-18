import { ethers } from "ethers";

async function main() {
  const provider = new ethers.JsonRpcProvider("https://rpc.sepolia.org");

  const abi = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function decimals() view returns (uint8)",
    "function totalSupply() view returns (uint256)",
    "function balanceOf(address account) view returns (uint256)"
  ];
  const contractAddress = "0x41d0Ad4E6227062B59CA673B418Fc00E3A2d10Cf"; // Replace with your contract address
  const contract = new ethers.Contract(contractAddress, abi, provider);

  /**
   * Get the current balance of deployer
   */
  const name = await contract.name();
  const symbol = await contract.symbol();
  const decimals = await contract.decimals();
  const totalSupply = await contract.totalSupply();

  console.log(`Token Name: ${name}`);
  console.log(`Symbol: ${symbol}`);
  console.log(`Decimals: ${decimals}`);
  console.log(`Total Supply: ${ethers.formatUnits(totalSupply, decimals)} ${symbol}`);

  // Kiểm tra balance của deployer (thay bằng địa chỉ ví deployer của bạn)
  const deployerAddress = "0xYOUR_DEPLOYER_ADDRESS"; // Replace with deployer address
  const balance = await contract.balanceOf(deployerAddress);
  console.log(`Deployer Balance: ${ethers.formatUnits(balance, decimals)} ${symbol}`);
}

main().catch(console.error);
