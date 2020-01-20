
import * as ethers from 'ethers';
import ERC20Abi from './ERC20Abi';

export default class Payment {
    /**
     * build ERC20 transfering ABI
     * @param to receiptor address
     * @param amount wei/min usd unit
     * @param currency usdc/dai/sai/pax/usdt/gusd/tusd/usdx/busd/husd/usdk
     */
    static buildErc20Transfer(to: string, value: string) {
        let coder = new ethers.utils.AbiCoder();
        let amount = coder.encode(['uint256'], [value]);
        let erc20 = new ethers.utils.Interface(ERC20Abi);
        let abi = erc20.functions.transfer.encode([to, amount]);
        console.log(abi);
        return abi;
    }
}