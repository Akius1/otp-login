const randomize=  require('./utils');
const dotenv =  require('dotenv');

dotenv.config();

 const {OTP_EXPIRES_IN, OTP_LENGTH} = process.env

/**
 * @param {string} timeRequestWasMade - the time the request was made
 * @param {string} expiryDate - the  time the otp expires
 * @returns {boolean} indicates whether the otp was sent within the specified time
 */

 const isOTPexpired = (timeRequestWasMade, expiryDate) =>
new Date(timeRequestWasMade).getTime() < new Date(expiryDate).getTime();

module.exports = isOTPexpired;

const generate = async (expires = 600000) => {
    const len = OTP_LENGTH || 5;

    const passCode = Number(randomize('0', len));

    if(passCode.length === len){
        generate();
    }

    const expiresIn = Number(
        OTP_EXPIRES_IN >= 30000 ?  OTP_EXPIRES_IN : expires
    );

    return{
            passCode,
            expires: new Date(Date.now() + expiresIn)
        ,
        len,
    }
}
module.exports = generate;