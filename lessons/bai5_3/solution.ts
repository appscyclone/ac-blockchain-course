import { ethers } from "ethers";

async function main() {
  // Kết nối tới Sepolia network qua public RPC
  const provider = new ethers.JsonRpcProvider("https://rpc.sepolia.org");

  // ABI của Counter contract
  const abi = [
    "function getCount() public view returns (uint)",
    "function increment() public"
  ];

  // Địa chỉ contract đã deploy (thay bằng địa chỉ thực tế sau khi deploy bài 5.2)
  const contractAddress = "0x1B0B927aEe9482b415C99a2E9865F6d36D75813D";

  // Tạo instance contract với provider (chỉ đọc)
  const contract = new ethers.Contract(contractAddress, abi, provider);

  // Gọi hàm view getCount() để đọc giá trị count hiện tại
  const count = await contract.getCount();
  console.log("Current count is:", count.toString());
}

main().catch(console.error);
