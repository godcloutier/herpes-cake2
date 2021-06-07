/*
IUniswapV2Router02(0x05fF2B0DB69458A0750badebc4f9e13aDd608C7F);
 */

const BEP20TokenFactory = artifacts.require("BEP20TokenFactory");
const Web3 = require('web3');
const herpesContract = artifacts.require("Herpes");
const owner = '0x946Eb7AB6fFAe621b3776427404849A47706e478';
let bep20TokenInstance;

module.exports = function(deployer)  {

    console.log("********************** Running HERPESNOMICS Test Migrations *****************************");

    deployer.then(async () => {


try {

    await deployer.deploy(herpesContract,
        "HerpesV2", "HERPES", 9, Web3.utils.toBN(6969696969), false, owner
    );

} catch(e) {
    console.error(e);
}



            console.log("Test Contract address: " + herpesContract.address);

    }).catch(err => {
        console.error(err);
    })
}

/*
,
                    "0x05fF2B0DB69458A0750badebc4f9e13aDd608C7F",
                    "HerpesV2", "HERPES", 9,0, 0, 69696969696969, 696969, false
 */