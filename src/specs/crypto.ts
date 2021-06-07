import * as CryptoJS from 'crypto-js';

interface BlockInterface {
    iv: string,
    data: string
}

/**
 * @param text Message to encrypt
 * @param key Secret encryption key
 * @returns {BlockInterface} `iv` and `data` from ecnryption
 */

export function Encrypt(text: string, key: string) {
    const iv = CryptoJS.lib.WordArray.random(16);
    const data = CryptoJS.AES.encrypt(
        text,
        key,
        {
            iv: iv
        }
    );

    console.log(
        CryptoJS.enc.Hex.stringify(iv),
        '=======',
        CryptoJS.enc.Hex.stringify(data),
        '======='
    );
    
    const s = data;
    const decryption = CryptoJS.AES.decrypt(
        s,
        key,
        {
            iv: iv
        }
    ).toString(CryptoJS.enc.Utf8);
    console.log(decryption)


    // return {
    //     // iv: iv.toString(CryptoJS.enc.Hex),
    //     // data: data.toString(CryptoJS.enc.Hex)
    //     iv: CryptoJS.enc.Hex.stringify(iv),
    //     data: CryptoJS.enc.Hex.stringify(data)
    // };
}

/**
 * @param block Ecnrypted container
 * @param key Secret encryption key
 * @returns {string} `data` from decryption
 */

export function Decrypt(block: BlockInterface, key: string) {
    const iv = CryptoJS.enc.Hex.parse(block.iv);
    const data = CryptoJS.enc.Hex.parse(block.data);

    const decryption = CryptoJS.AES.decrypt(
        block.iv,
        key,
        {
            iv: iv
        }
    ).toString(CryptoJS.enc.Utf8);
    
    return decryption;
}


const key = '635266556A586E327235753778214125442A472D4B6150645367566B59703373';

const encr = Encrypt('secured', key); 
// console.log(encr);

// const decr = Decrypt(encr, key);
// console.log(decr);

