import * as dotenv from 'dotenv';
import '@nomiclabs/hardhat-waffle';
import '@nomiclabs/hardhat-ethers';
import 'hardhat-deploy';
dotenv.config();

module.exports = {
	networks: {
		celo_alfajores: {
			url: "https://alfajores-forno.celo-testnet.org",
			accounts: [`0xf314a4a5d8a206caf920fe3de24992f4f24c864552246921fd984991bd3ecff9`],
			chainId: 44787,
			gasPrice: 1000000000
		  },
		
	},
	solidity: {
		compilers: [
			{
				version: '0.7.6',
			},
			{
				version: '0.8.6',
			},
		],
	},
	namedAccounts: {
		deployer: 0,
	},
};
