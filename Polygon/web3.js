import Web3 from 'web3';


if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
	console.log(window.ethereum.enable());
	web3 = new Web3(window.web3.currentProvider);
	console.log('Web3: ', Web3);
} else {
	const provider = new Web3.providers.HttpProvider('https://autumn-summer-butterfly.matic-testnet.discover.quiknode.pro/5ea3d86a7304e282dcea005d64c342f91537315b/');
	web3 = new web3(provider);
	console.log('web3 else: ', Web3);
}

export default web3;
