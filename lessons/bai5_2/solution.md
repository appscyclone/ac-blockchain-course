# Bài 5.2 – Hướng dẫn thực hiện

## Bước 1: Clone template

```bash
git clone https://github.com/appscyclone/ac-hardhat-template bai5_2_hardhat
cd bai5_2_hardhat
npm install
```

## Bước 2: Cấu hình

- Copy file `.env.example` thành `.env`
- Điền `PRIVATE_KEY` và `SEPOLIA_RPC_URL` vào file `.env`

## Bước 3: Chạy unit test

```bash
npx hardhat test
```

## Bước 4: Deploy lên Sepolia

```bash
npx hardhat deploy --network sepolia --tags deploy
```

→ Ghi lại contract address sau khi deploy thành công.

## Bước 5: Chạy script tương tác

```bash
npx hardhat run scripts/test.ts --network sepolia
```

→ Kết quả hiện ra số `1` nếu gọi `increment()` thành công.
