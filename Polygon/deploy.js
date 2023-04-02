const assert = require('assert');
const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const eF = require('./Build/ElectionFact.json');

const provider = new HDWalletProvider(
	'soda primary wheel try parrot such unfair swarm obvious collect tobacco blouse',
	'https://autumn-summer-butterfly.matic-testnet.discover.quiknode.pro/5ea3d86a7304e282dcea005d64c342f91537315b/'
);
const web3 = new Web3(provider);

const deploy = async () => {
	const accounts = await web3.eth.getAccounts();

	console.log('Attemping to deploy from account', accounts[0]);

	const result = await new web3.eth.Contract(JSON.parse(eF.interface))
		.deploy({ data: '0x' + eF.bytecode })
		.send({ gas: '3000000', from: accounts[0] });

	console.log('Contract deployed to: ', result.options.address);
};
deploy();
