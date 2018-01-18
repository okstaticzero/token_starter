//import { web3 } from '../util/web3Util';
import { web3 } from "../util/Uport";
import contract from 'truffle-contract';
import TokenContract from '../ethereum/build/contracts/TokenERC20.json';

const TodoContract = contract(TokenContract);

TodoContract.setProvider(web3.currentProvider);

class Token {
  async getInstance() {
    const instance = await TodoContract.deployed();
    return instance;
  }

  async signup(account) {
    const instance = await this.getInstance();
    const items = await instance.signup({ from: account });
    return items;
  }

  async transfer(myAccount, addressTo, amount) {
    const instance = await this.getInstance();
    const items = await instance.transfer(addressTo, amount, { from: myAccount });
    return items;
  }

  async getMyBalance(account) {
    const instance = await this.getInstance();
    const balance = await instance.getMyBalance({ from: account });
    return balance;
  }

}

export default new Token();
