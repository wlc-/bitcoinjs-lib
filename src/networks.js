// https://en.bitcoin.it/wiki/List_of_address_prefixes
// Dogecoin BIP32 is a proposed standard: https://bitcointalk.org/index.php?topic=409731

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
    bridgeParameterArr: [
      ['insight', 'https://insight.bitpay.com/api'],
    ],
    ticker: 'BTC',
    qrScheme: 'bitcoin', // https://github.com/bitcoin/bips/blob/master/bip-0021.mediawiki
    title: 'Bitcoin'
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
    bridgeParameterArr: [
      ['insight', 'https://test-insight.bitpay.com/api'],
    ],
    ticker: 'TBTC',
    qrScheme: 'bitcoin',
    title: 'Bitcoin'
  },
  litecoin: {
    messagePrefix: '\x19Litecoin Signed Message:\n',
    bip32: {
      public: 0x019da462,
      private: 0x019d9cfe
    },
    pubKeyHash: 0x30,
    scriptHash: 0x32,
    wif: 0xb0,
    ticker: 'LTC',
    qrScheme: 'litecoin',
    title: 'Litecoin'
  },
  myriad: { // \x1B in prefix is length of prefix in hex
    messagePrefix: '\x1BMyriadcoin Signed Message:\n',
    bip32: {
      public: 0x0488B21E,
      private: 0x0488ADE4
    },
    pubKeyHash: 0x32,
    scriptHash: 0x09,
    wif: 0xB2,
    bridgeParameterArr: [
      ['insight', 'https://myriadexplorer.com/api'],
      ['insight', 'http://insight-myr.cryptap.us/api']
    ],
    ticker: 'XMY',
    qrScheme: 'myriad',
    title: 'Myriad'
  }
}
