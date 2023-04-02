import web3 from './web3';
import ElectionFactory from './Build/ElectionFact.json';

const instance = new web3.eth.Contract(
	JSON.parse(ElectionFactory.interface),
    '0xED80d9FcC627bAC54514756d9470F26c1F82FeA5'
);

export default instance;