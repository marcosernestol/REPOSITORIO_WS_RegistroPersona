const { webcrypto } = require('crypto');

if (!globalThis.crypto && webcrypto) {
  globalThis.crypto = webcrypto;
}
