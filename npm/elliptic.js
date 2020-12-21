const elliptic = require('elliptic');

const EC = elliptic.ec;

const ecdsaCurve = elliptic.curves['p256'];

const ecdsa = new EC(ecdsaCurve);

const signKey = ecdsa.keyFromPrivate(prvKeyHex, 'hex');

let sig = ecdsa.sign(Buffer.from(digest, 'hex'), signKey);