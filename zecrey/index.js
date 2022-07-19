const { exec } = require('shelljs');

const getResultLine = (str) => {
  return str.replace(/Zecrey-legend Crypto Assembly/gi, '').trim();
};

const wasmExec = (func, funcArgs) => {
  // ['seed phrase', 'hello world'] => '"seed phrase" "hee world"'
  const args = funcArgs
    .map((arg) => {
      return "'" + arg + "'";
    })
    .join(' ');

  const result = exec(
    `node ./zecrey/wasm_exec_node.js ./zecrey/zecreyLegend.wasm ${func} ${args}`,
    {
      silent: true
    }
  );

  return getResultLine(result.stdout);
};

const cleanPackedAmount = (amount) => wasmExec('cleanPackedAmount', [amount]);

const cleanPackedFee = (amount) => wasmExec('cleanPackedFee', [amount]);

const getAccountNameHash = (accountName) =>
  wasmExec('getAccountNameHash', [accountName]);

const getEddsaPublicKey = (seed) => wasmExec('getEddsaPublicKey', [seed]);

const generateEddsaKey = (seed) => wasmExec('generateEddsaKey', [seed]);

const getEddsaCompressedPublicKey = (seed) =>
  wasmExec('getEddsaCompressedPublicKey', [seed]);

const eddsaSign = (seed, message) => wasmExec('eddsaSign', [seed, message]);

const eddsaVerify = (publicKey, signature, message) =>
  Boolean(wasmExec('eddsaVerify', [publicKey, signature, message]));

const signAddLiquidity = (seed, segmentstr) =>
  wasmExec('signAddLiquidity', [seed, segmentstr]);

const signRemoveLiquidity = (seed, segmentstr) =>
  wasmExec('signRemoveLiquidity', [seed, segmentstr]);

const signSwap = (seed, segmentstr) => wasmExec('signSwap', [seed, segmentstr]);

const signTransfer = (seed, segmentstr) =>
  wasmExec('signTransfer', [seed, segmentstr]);

const signWithdraw = (seed, segmentstr) =>
  wasmExec('signWithdraw', [seed, segmentstr]);

const signOffer = (seed, segmentstr) =>
  wasmExec('signOffer', [seed, segmentstr]);

const signAtomicMatch = (seed, segmentstr) =>
  wasmExec('signAtomicMatch', [seed, segmentstr]);

const signCancelOffer = (seed, segmentstr) =>
  wasmExec('signCancelOffer', [seed, segmentstr]);

const signCreateCollection = (seed, segmentstr) =>
  wasmExec('signCreateCollection', [seed, segmentstr]);

const signMintNft = (seed, segmentstr) =>
  wasmExec('signMintNft', [seed, segmentstr]);

const signTransferNft = (seed, segmentstr) =>
  wasmExec('signTransferNft', [seed, segmentstr]);

const signWithdrawNft = (seed, segmentstr) =>
  wasmExec('signWithdrawNft', [seed, segmentstr]);

module.exports = {
  cleanPackedAmount,
  cleanPackedFee,
  getAccountNameHash,
  getEddsaPublicKey,
  getEddsaCompressedPublicKey,
  generateEddsaKey,
  eddsaSign,
  eddsaVerify,
  signAddLiquidity,
  signRemoveLiquidity,
  signSwap,
  signTransfer,
  signWithdraw,
  signOffer,
  signAtomicMatch,
  signCancelOffer,
  signCreateCollection,
  signMintNft,
  signTransferNft,
  signWithdrawNft
};