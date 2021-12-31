require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give prison obtain suggest name release place assume install industry sun silly'; 
let testAccounts = [
"0x54dad604e692afa48a4696b093b694619670684b6aca2a0b4775c4da511029fa",
"0xd66e1192fa33b37dddb78006fcff61fd04140a4986de99878bb5524dcfe5fa65",
"0x2021da4ca93653c7a4f84fd2df4c1f118f04ba209a0da3fc4ffaa0b453340f19",
"0x2dc9701df16d25a477f541163eefadda8ac6699e31a79836033825e7298bc689",
"0xde6b5f980222721d644a38199fa1f74fa41fa3430ab421db2e6b58ca38d5c9b8",
"0xad5cc72f24fa5bc653e0b30cb8d555f32e8e52cf450ee92167dea6a397797132",
"0xa69a61b777af27458b092159918d317c378135e0da3533cf8b6056b27e13832b",
"0x23dd33d02b9f93d8d43a0c0d7d755f3961458326a67497b65c40dd8cdf9f2f4d",
"0xb12d60813a79e150139db2636a45dd75e36fffe55efc49bbd108e48e027974f0",
"0x8e80efd1d350a27ae5ce236e979fa8b3ff05bc3a12f5599ac65377df780856ee"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

