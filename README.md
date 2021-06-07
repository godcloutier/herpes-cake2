# $HERPES - A Viral Token

Version: 2.0

## Contract Testing Notes

In order to test the Solidity files on the BSC testnet using Truffle, users
will need to create a `.secret` file in the parent directory of their clone of
this repository containing the 12-word security recovery phrase of the MetaMask
wallet they wish to use to connect to the testnet. The `.secret` file is
omitted from commits to the repository with the `.gitignore` file for security
reasons.

To install dependencies, if not already installed, use:

    npm install -g truffle
    npm install --save-dev @truffle/hdwallet-provider
    
To deploy the contract to the BSC testnet, use:
    
    truffle migrate --network=testnet --reset
