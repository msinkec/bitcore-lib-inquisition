const Schnorr = require('../../lib/crypto/schnorr');
const PrivateKey = require('../../lib/privatekey.js');
const Networks = require('../../lib/networks.js');

describe('Schnorr Fuzz', () => {
  describe(('sign'), () => {
    const seckey = PrivateKey.fromRandom(Networks.testnet)
    for (let index = 0; index < 1000; index++) {
        const sig = Schnorr.sign(seckey, '1123456789abcdf123456789abcdf23456789abcdf123456789abcdf00000000')
    }
  });
});
