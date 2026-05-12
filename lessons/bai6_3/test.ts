import { ethers } from "ethers";

async function main() {
  const provider = new ethers.JsonRpcProvider("https://rpc.sepolia.org");

  const abi = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function ownerOf(uint256 tokenId) view returns (address)",
    "function nextTokenId() view returns (uint256)",
    "function mint(address to) public"
  ];
  const contractAddress = "0x41d0Ad4E6227062B59CA673B418Fc00E3A2d10Cf"; // Replace with your contract address
  const contract = new ethers.Contract(contractAddress, abi, provider);

  /**
   * Read NFT contract info and check owner of minted token
   */
  const name = await contract.name();
  const symbol = await contract.symbol();
  const nextTokenId = await contract.nextTokenId();

  console.log(`NFT Name: ${name}`);
  console.log(`Symbol: ${symbol}`);
  console.log(`Total Minted: ${nextTokenId.toString()}`);

  // Kiểm tra owner của token #0 (nếu đã mint)
  if (nextTokenId > 0n) {
    const owner = await contract.ownerOf(0);
    console.log(`Owner of Token #0: ${owner}`);
  } else {
    console.log("No NFT minted yet.");
  }
}

main().catch(console.error);
