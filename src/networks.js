const bcrypto = require('./crypto');

const hashFunctions = {
  address: bcrypto.hash256, // sha256x2
  transaction: bcrypto.hash256, // sha256x2
};


const groestlHashFunctions = {
  address: bcrypto.groestl,
  transaction: bcrypto.sha256,
};

module.exports = {
  bitcoin: {
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bech32: 'bc',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x00,
    scriptHash: 0x05,
    wif: 0x80,
    confirmations: 6,
    bip44Derivation: 0,
    ticker: 'BTC',
    qrScheme: 'bitcoin', // https://github.com/bitcoin/bips/blob/master/bip-0021.mediawiki
    title: 'Bitcoin',
    supportedAddressTypes: ['P2SH-P2WPKH', 'P2PKH', 'P2WPKH'],
    bridgeParameterArr: [
      ['blockbook', 'wss://btc-blockbook1.coinid.org'],
      ['blockbook', 'wss://btc-blockbook2.coinid.org'],
      ['blockbook', 'wss://btc-blockbook3.coinid.org'],
    ],
    hashFunctions,
  },
  testnet: {
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bech32: 'tb',
    bip32: {
      public: 0x043587cf,
      private: 0x04358394
    },
    pubKeyHash: 0x6f,
    scriptHash: 0xc4,
    wif: 0xef,
    confirmations: 6,
    bip44Derivation: 1,
    ticker: 'TBTC',
    qrScheme: 'bitcoin',
    title: 'Bitcoin',
    supportedAddressTypes: ['P2SH-P2WPKH', 'P2PKH', 'P2WPKH'],
    bridgeParameterArr: [
      ['blockbook', 'wss://testnet-blockbook1.coinid.org'],
      ['blockbook', 'wss://testnet-blockbook2.coinid.org'],
      ['blockbook', 'wss://testnet-blockbook3.coinid.org'],
    ],
    hashFunctions,
  },
  litecoin: {
    messagePrefix: '\x19Litecoin Signed Message:\n',
    bech32: 'ltc',
    bip32: {
      public: 0x019da462,
      private: 0x019d9cfe
    },
    pubKeyHash: 0x30,
    scriptHash: 0x32,
    wif: 0xb0,
    confirmations: 6,
    bip44Derivation: 2,
    ticker: 'LTC',
    qrScheme: 'litecoin',
    title: 'Litecoin',
    supportedAddressTypes: ['P2SH-P2WPKH', 'P2PKH'],
    bridgeParameterArr: [
      ['insight', 'https://ltc-bitcore1.coinid.org/api'],
      ['insight', 'https://ltc-bitcore2.coinid.org/api'],
      ['insight', 'https://ltc-bitcore3.coinid.org/api'],
    ],
    hashFunctions,
  },
  myriad: { // \x1B in prefix is length of prefix in hex
    messagePrefix: '\x1BMyriadcoin Signed Message:\n',
    bech32: 'my',
    bip32: {
      public: 0x0488B21E,
      private: 0x0488ADE4
    },
    pubKeyHash: 0x32,
    scriptHash: 0x09,
    wif: 0xB2,
    confirmations: 12,
    bip44Derivation: 90,
    ticker: 'XMY',
    qrScheme: 'myriad',
    title: 'Myriad',
    supportedAddressTypes: ['P2SH-P2WPKH', 'P2PKH', 'P2WPKH'],
    bridgeParameterArr: [
      ['blockbook', 'wss://xmy-blockbook1.coinid.org'],
      ['blockbook', 'wss://xmy-blockbook2.coinid.org'],
      ['blockbook', 'wss://xmy-blockbook3.coinid.org'],
    ],
    hashFunctions,
  },
  groestlcoin: {
    messagePrefix: '\x1cGroestlCoin Signed Message:\n',
    bech32: 'grs',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    pubKeyHash: 0x24,
    scriptHash: 0x05,
    wif: 0x80,
    confirmations: 12,
    bip44Derivation: 17,
    ticker: 'GRS',
    qrScheme: 'groestlcoin',
    title: 'Groestlcoin',
    supportedAddressTypes: ['P2PKH'],
    bridgeParameterArr: [
      ['insight', 'https://groestlsight.groestlcoin.org/api'],
    ],
    hashFunctions: groestlHashFunctions,
  },
}
