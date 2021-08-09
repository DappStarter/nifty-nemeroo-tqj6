require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enroll other venture street crawl remain purity hunt kangaroo army gentle'; 
let testAccounts = [
"0x68711ed1dc21c2caa56cdaf02a5cf5cb4569cb206a200f629ece827e78a625f9",
"0x5899485fde136ea8b55791d4469b9668ffd361552cfdffc4e4b396a5862aeef5",
"0x18c31a71acdbc8365fba689d5542a7e0b35c49a686dbd9b755e2785576dd8acb",
"0xceffef0493cd2871d620126211c4cb78070c8213527ad2e34c363adc41bfe4f1",
"0xe4c61fba6e4dc055dd79db3781a469f1f1ef51bcaff30f67bd1a6b5eff233070",
"0x4fe3d0330929bfe1612540543f4b32685294234e0c4aeb8e5559fbc0d7722745",
"0xb12097d810bc4dce5bf4f7e2a4f3d451b22a33a97ea0e0ae61722577444eea01",
"0xce9143cb14b50b95af3751cecb9948975947f5465e3571bf76aca1f8af070b4f",
"0x560d86bb9cf1e6bd522121dad77a9865a155f95c6a40809c3e68ca7bc70b556f",
"0x11f9c763ab0cbf1cd0dbdcfccb0d32273d776e6ecad15c860affcbad206c2ec9"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

