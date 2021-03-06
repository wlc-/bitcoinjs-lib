const bcrypto = require('./crypto');

const hashFunctions = {
  address: bcrypto.hash256,
  transaction: bcrypto.hash256,
  message: bcrypto.hash256,
};

const groestlHashFunctions = {
  address: bcrypto.groestl,
  transaction: bcrypto.sha256,
  message: bcrypto.sha256,
};

module.exports = {
  bitcoin: {
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bech32: 'bc',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    slip132: {
      'P2PKH': {
        public: 0x0488b21e,
        private: 0x0488ade4
      },
      'P2SH-P2WPKH': {
        public: 0x049d7cb2,
        private: 0x049d7878
      },
      'P2WPKH': {
        public: 0x04b24746,
        private: 0x04b2430c
      }
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
    blockTime: 10.0,
    hashFunctions,
  },
  testnet: {
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bech32: 'tb',
    bip32: {
      public: 0x043587cf,
      private: 0x04358394
    },
    slip132: {
      'P2PKH': {
        public: 0x043587cf,
        private: 0x04358394
      },
      'P2SH-P2WPKH': {
        public: 0x044a5262,
        private: 0x044a4e28
      },
      'P2WPKH': {
        public: 0x045f1cf6,
        private: 0x045f18bc
      }
    },
    pubKeyHash: 0x6f,
    scriptHash: 0xc4,
    wif: 0xef,
    confirmations: 6,
    bip44Derivation: 1,
    ticker: 'tBTC',
    qrScheme: 'bitcoin',
    title: 'Testnet',
    supportedAddressTypes: ['P2SH-P2WPKH', 'P2PKH', 'P2WPKH'],
    bridgeParameterArr: [
      ['blockbook', 'wss://testnet-blockbook1.coinid.org'],
      ['blockbook', 'wss://testnet-blockbook2.coinid.org'],
      ['blockbook', 'wss://testnet-blockbook3.coinid.org'],
    ],
    blockTime: 10.0,
    hashFunctions,
  },
  litecoin: {
    messagePrefix: '\x19Litecoin Signed Message:\n',
    bech32: 'ltc',
    bip32: {
      public: 0x019da462,
      private: 0x019d9cfe
    },
    slip132: {
      'P2PKH': {
        public: 0x019da462,
        private: 0x019d9cfe
      },
      'P2SH-P2WPKH': {
        public: 0x01b26ef6,
        private: 0x01b26792
      },
      'P2WPKH': {
        public: 0x04b24746,
        private: 0x04b2430c
      }
    },
    allowBitcoinSlip132: true,
    pubKeyHash: 0x30,
    scriptHash: 0x32,
    wif: 0xb0,
    confirmations: 6,
    bip44Derivation: 2,
    ticker: 'LTC',
    qrScheme: 'litecoin',
    title: 'Litecoin',
    supportedAddressTypes: ['P2SH-P2WPKH', 'P2PKH', 'P2WPKH'],
    bridgeParameterArr: [
      ['blockbook', 'wss://ltc1.trezor.io/'],
    ],
    blockTime: 2.5,
    hashFunctions,
  },
  myriad: { // \x1B in prefix is length of prefix in hex
    messagePrefix: '\x1BMyriadcoin Signed Message:\n',
    bech32: 'my',
    bip32: {
      public: 0x0488B21E,
      private: 0x0488ADE4
    },
    slip132: {
      'P2PKH': {
        public: 0x0488b21e,
        private: 0x0488ade4
      },
      'P2SH-P2WPKH': {
        public: 0x049d7cb2,
        private: 0x049d7878
      },
      'P2WPKH': {
        public: 0x04b24746,
        private: 0x04b2430c
      }
    },
    pubKeyHash: 0x32,
    scriptHash: 0x09,
    wif: 0xB2,
    confirmations: 12,
    bip44Derivation: 90,
    ticker: 'XMY',
    qrScheme: 'myriadcoin',
    title: 'Myriad',
    supportedAddressTypes: ['P2SH-P2WPKH', 'P2PKH', 'P2WPKH'],
    bridgeParameterArr: [
      ['blockbook', 'wss://xmy-blockbook1.coinid.org'],
      ['blockbook', 'wss://xmy-blockbook2.coinid.org'],
      ['blockbook', 'wss://xmy-blockbook3.coinid.org'],
    ],
    blockTime: 1.0,
    hashFunctions,
  },
  groestlcoin: {
    messagePrefix: '\x1cGroestlCoin Signed Message:\n',
    bech32: 'grs',
    bip32: {
      public: 0x0488b21e,
      private: 0x0488ade4
    },
    slip132: {
      'P2PKH': {
        public: 0x0488b21e,
        private: 0x0488ade4
      },
      'P2SH-P2WPKH': {
        public: 0x049d7cb2,
        private: 0x049d7878
      },
      'P2WPKH': {
        public: 0x04b24746,
        private: 0x04b2430c
      }
    },
    pubKeyHash: 0x24,
    scriptHash: 0x05,
    wif: 0x80,
    confirmations: 12,
    bip44Derivation: 17,
    ticker: 'GRS',
    qrScheme: 'groestlcoin',
    title: 'Groestlcoin',
    supportedAddressTypes: ['P2SH-P2WPKH', 'P2PKH', 'P2WPKH'],
    bridgeParameterArr: [
      ['blockbook', 'wss://blockbook.groestlcoin.org'],
    ],
    blockTime: 1.0,
    hashFunctions: groestlHashFunctions,
  },
  "groestlcoin-testnet": {
    messagePrefix: '\x1cGroestlCoin Signed Message:\n',
    bech32: 'tgrs',
    bip32: {
      public: 0x043587cf,
      private: 0x04358394
    },
    slip132: {
      'P2PKH': {
        public: 0x043587cf,
        private: 0x04358394
      },
      'P2SH-P2WPKH': {
        public: 0x044a5262,
        private: 0x044a4e28
      },
      'P2WPKH': {
        public: 0x045f1cf6,
        private: 0x045f18bc
      }
    },
    pubKeyHash: 0x6f,
    scriptHash: 0xc4,
    wif: 0xef,
    confirmations: 12,
    bip44Derivation: 1,
    ticker: 'tGRS',
    qrScheme: 'groestlcoin',
    title: 'GRS Testnet',
    supportedAddressTypes: ['P2SH-P2WPKH', 'P2PKH', 'P2WPKH'],
    bridgeParameterArr: [
      ['blockbook', 'wss://blockbook-test.groestlcoin.org'],
    ],
    blockTime: 1.0,
    hashFunctions: groestlHashFunctions,
  },
}
