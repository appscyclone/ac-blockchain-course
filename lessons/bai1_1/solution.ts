import crypto from 'crypto';

export type Block = {
  index: number;
  timestamp: string;
  transactions: any[];
  previous_hash: string;
  current_hash: string;
};

function calculateHash(block: Block): string {
  const expectedHash = block.index +block.timestamp + JSON.stringify(block.transactions) + block.previous_hash;
  return crypto.createHash('sha256').update(expectedHash).digest('hex');
}

// ✍️ TODO: Viết hàm tại đây
export function isValidBlock(block: Block): boolean {
  if (block.current_hash == calculateHash(block)) {
    return true;
  }
  else {
    return false;
  }
} 

