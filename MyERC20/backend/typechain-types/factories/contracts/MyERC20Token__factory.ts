/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  BigNumberish,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  MyERC20Token,
  MyERC20TokenInterface,
} from "../../contracts/MyERC20Token";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_decimals",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_totalSupply",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60c06040523480156200001157600080fd5b5060405162001b0638038062001b068339818101604052810190620000379190620005fd565b8360009081620000489190620008ee565b5082600190816200005a9190620008ee565b5081608081815250508060a0818152505060a051600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550620002206040518060400160405280601a81526020017f4372656174696e6720636f6e747261637420257320257320256400000000000081525060008054620000fa90620006e7565b80601f01602080910402602001604051908101604052809291908181526020018280546200012890620006e7565b8015620001795780601f106200014d5761010080835404028352916020019162000179565b820191906000526020600020905b8154815290600101906020018083116200015b57829003601f168201915b5050505050600180546200018d90620006e7565b80601f0160208091040260200160405190810160405280929190818152602001828054620001bb90620006e7565b80156200020c5780601f10620001e0576101008083540402835291602001916200020c565b820191906000526020600020905b815481529060010190602001808311620001ee57829003601f168201915b50505050506080516200027360201b60201c565b620002696040518060400160405280600f81526020017f746f74616c20737570706c79202564000000000000000000000000000000000081525060a0516200031f60201b60201c565b5050505062000afd565b620003198484848460405160240162000290949392919062000a38565b6040516020818303038152906040527f8eafb02b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050620003c560201b60201c565b50505050565b620003c182826040516024016200033892919062000a9a565b6040516020818303038152906040527fb60e72cc000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050620003c560201b60201c565b5050565b620003eb81620003e6620003ee60201b6200094e176200040f60201b60201c565b60201c565b50565b60006a636f6e736f6c652e6c6f679050600080835160208501845afa505050565b6200042360201b62000ad817819050919050565b6200042d62000ace565b565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b62000498826200044d565b810181811067ffffffffffffffff82111715620004ba57620004b96200045e565b5b80604052505050565b6000620004cf6200042f565b9050620004dd82826200048d565b919050565b600067ffffffffffffffff8211156200050057620004ff6200045e565b5b6200050b826200044d565b9050602081019050919050565b60005b83811015620005385780820151818401526020810190506200051b565b60008484015250505050565b60006200055b6200055584620004e2565b620004c3565b9050828152602081018484840111156200057a576200057962000448565b5b6200058784828562000518565b509392505050565b600082601f830112620005a757620005a662000443565b5b8151620005b984826020860162000544565b91505092915050565b6000819050919050565b620005d781620005c2565b8114620005e357600080fd5b50565b600081519050620005f781620005cc565b92915050565b600080600080608085870312156200061a576200061962000439565b5b600085015167ffffffffffffffff8111156200063b576200063a6200043e565b5b62000649878288016200058f565b945050602085015167ffffffffffffffff8111156200066d576200066c6200043e565b5b6200067b878288016200058f565b93505060406200068e87828801620005e6565b9250506060620006a187828801620005e6565b91505092959194509250565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200070057607f821691505b602082108103620007165762000715620006b8565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620007807fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000741565b6200078c868362000741565b95508019841693508086168417925050509392505050565b6000819050919050565b6000620007cf620007c9620007c384620005c2565b620007a4565b620005c2565b9050919050565b6000819050919050565b620007eb83620007ae565b62000803620007fa82620007d6565b8484546200074e565b825550505050565b600090565b6200081a6200080b565b62000827818484620007e0565b505050565b5b818110156200084f576200084360008262000810565b6001810190506200082d565b5050565b601f8211156200089e5762000868816200071c565b620008738462000731565b8101602085101562000883578190505b6200089b620008928562000731565b8301826200082c565b50505b505050565b600082821c905092915050565b6000620008c360001984600802620008a3565b1980831691505092915050565b6000620008de8383620008b0565b9150826002028217905092915050565b620008f982620006ad565b67ffffffffffffffff8111156200091557620009146200045e565b5b620009218254620006e7565b6200092e82828562000853565b600060209050601f83116001811462000966576000841562000951578287015190505b6200095d8582620008d0565b865550620009cd565b601f19841662000976866200071c565b60005b82811015620009a05784890151825560018201915060208501945060208101905062000979565b86831015620009c05784890151620009bc601f891682620008b0565b8355505b6001600288020188555050505b505050505050565b600082825260208201905092915050565b6000620009f382620006ad565b620009ff8185620009d5565b935062000a1181856020860162000518565b62000a1c816200044d565b840191505092915050565b62000a3281620005c2565b82525050565b6000608082019050818103600083015262000a548187620009e6565b9050818103602083015262000a6a8186620009e6565b9050818103604083015262000a808185620009e6565b905062000a91606083018462000a27565b95945050505050565b6000604082019050818103600083015262000ab68185620009e6565b905062000ac7602083018462000a27565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052605160045260246000fd5b60805160a051610fe362000b2360003960006103e10152600061068b0152610fe36000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c806370a082311161006657806370a082311461015d57806395d89b411461018d578063a9059cbb146101ab578063dd62ed3e146101db578063e3d670d71461020b5761009e565b806306fdde03146100a3578063095ea7b3146100c157806318160ddd146100f157806323b872dd1461010f578063313ce5671461013f575b600080fd5b6100ab61023b565b6040516100b89190610b72565b60405180910390f35b6100db60048036038101906100d69190610c2d565b6102c9565b6040516100e89190610c88565b60405180910390f35b6100f96103df565b6040516101069190610cb2565b60405180910390f35b61012960048036038101906101249190610ccd565b610403565b6040516101369190610c88565b60405180910390f35b610147610689565b6040516101549190610cb2565b60405180910390f35b61017760048036038101906101729190610d20565b6106ad565b6040516101849190610cb2565b60405180910390f35b6101956106f6565b6040516101a29190610b72565b60405180910390f35b6101c560048036038101906101c09190610c2d565b610784565b6040516101d29190610c88565b60405180910390f35b6101f560048036038101906101f09190610d4d565b610911565b6040516102029190610cb2565b60405180910390f35b61022560048036038101906102209190610d20565b610936565b6040516102329190610cb2565b60405180910390f35b6000805461024890610dbc565b80601f016020809104026020016040519081016040528092919081815260200182805461027490610dbc565b80156102c15780601f10610296576101008083540402835291602001916102c1565b820191906000526020600020905b8154815290600101906020018083116102a457829003601f168201915b505050505081565b60006102ef6040518060600160405280602f8152602001610f5b602f913984843361096f565b81600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040516103cd9190610cb2565b60405180910390a36001905092915050565b7f000000000000000000000000000000000000000000000000000000000000000081565b600081600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101561045157600080fd5b81600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410156104da57600080fd5b81600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546105669190610e1c565b9250508190555081600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546105bc9190610e1c565b9250508190555081600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546106129190610e50565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516106769190610cb2565b60405180910390a3600190509392505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6001805461070390610dbc565b80601f016020809104026020016040519081016040528092919081815260200182805461072f90610dbc565b801561077c5780601f106107515761010080835404028352916020019161077c565b820191906000526020600020905b81548152906001019060200180831161075f57829003601f168201915b505050505081565b60006107aa604051806060016040528060248152602001610f8a60249139338585610a11565b81600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410156107f657600080fd5b81600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546108459190610e1c565b9250508190555081600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461089b9190610e50565b925050819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516108ff9190610cb2565b60405180910390a36001905092915050565b6003602052816000526040600020602052806000526040600020600091509150505481565b60026020528060005260406000206000915090505481565b60006a636f6e736f6c652e6c6f679050600080835160208501845afa505050565b610a0b848484846040516024016109899493929190610e93565b6040516020818303038152906040527f63fb8bc5000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610ab3565b50505050565b610aad84848484604051602401610a2b9493929190610edf565b6040516020818303038152906040527f8ef3f399000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610ab3565b50505050565b610aca81610ac261094e610acd565b63ffffffff16565b50565b610ad8819050919050565b610ae0610f2b565b565b600081519050919050565b600082825260208201905092915050565b60005b83811015610b1c578082015181840152602081019050610b01565b60008484015250505050565b6000601f19601f8301169050919050565b6000610b4482610ae2565b610b4e8185610aed565b9350610b5e818560208601610afe565b610b6781610b28565b840191505092915050565b60006020820190508181036000830152610b8c8184610b39565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610bc482610b99565b9050919050565b610bd481610bb9565b8114610bdf57600080fd5b50565b600081359050610bf181610bcb565b92915050565b6000819050919050565b610c0a81610bf7565b8114610c1557600080fd5b50565b600081359050610c2781610c01565b92915050565b60008060408385031215610c4457610c43610b94565b5b6000610c5285828601610be2565b9250506020610c6385828601610c18565b9150509250929050565b60008115159050919050565b610c8281610c6d565b82525050565b6000602082019050610c9d6000830184610c79565b92915050565b610cac81610bf7565b82525050565b6000602082019050610cc76000830184610ca3565b92915050565b600080600060608486031215610ce657610ce5610b94565b5b6000610cf486828701610be2565b9350506020610d0586828701610be2565b9250506040610d1686828701610c18565b9150509250925092565b600060208284031215610d3657610d35610b94565b5b6000610d4484828501610be2565b91505092915050565b60008060408385031215610d6457610d63610b94565b5b6000610d7285828601610be2565b9250506020610d8385828601610be2565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610dd457607f821691505b602082108103610de757610de6610d8d565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610e2782610bf7565b9150610e3283610bf7565b9250828203905081811115610e4a57610e49610ded565b5b92915050565b6000610e5b82610bf7565b9150610e6683610bf7565b9250828201905080821115610e7e57610e7d610ded565b5b92915050565b610e8d81610bb9565b82525050565b60006080820190508181036000830152610ead8187610b39565b9050610ebc6020830186610e84565b610ec96040830185610ca3565b610ed66060830184610e84565b95945050505050565b60006080820190508181036000830152610ef98187610b39565b9050610f086020830186610e84565b610f156040830185610e84565b610f226060830184610ca3565b95945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052605160045260246000fdfe417070726f76696e6720257320746f207370656e6420257320746f6b656e73206f6e20626568616c66206f662025735472616e7366657272696e672066726f6d20257320746f20257320257320746f6b656e73a2646970667358221220a1164fc107423283eb3303681bd21cec6ec72c611b39c3506a707a8e74d0752864736f6c63430008140033";

type MyERC20TokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MyERC20TokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MyERC20Token__factory extends ContractFactory {
  constructor(...args: MyERC20TokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _name: string,
    _symbol: string,
    _decimals: BigNumberish,
    _totalSupply: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      _name,
      _symbol,
      _decimals,
      _totalSupply,
      overrides || {}
    );
  }
  override deploy(
    _name: string,
    _symbol: string,
    _decimals: BigNumberish,
    _totalSupply: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      _name,
      _symbol,
      _decimals,
      _totalSupply,
      overrides || {}
    ) as Promise<
      MyERC20Token & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): MyERC20Token__factory {
    return super.connect(runner) as MyERC20Token__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MyERC20TokenInterface {
    return new Interface(_abi) as MyERC20TokenInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): MyERC20Token {
    return new Contract(address, _abi, runner) as unknown as MyERC20Token;
  }
}