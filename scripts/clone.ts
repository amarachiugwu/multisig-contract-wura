require("dotenv").config({ path: ".env" });
import { BytesLike } from "ethers";
import { ethers } from "hardhat";
const helpers = require("@nomicfoundation/hardhat-network-helpers");

// import IMultiSig from "../typechain-types/Imultisig.sol"

async function main() {
  let provider = {
    PrivateKey: process.env.ACCOUNT_PRIVATE_KEY as BytesLike,
    URL: process.env.INFURA_ROPSTEN_API_KEY_URL,
  };

  const provider2 = ethers.getDefaultProvider("ropsten", provider.URL);
  let wallet = new ethers.Wallet(provider.PrivateKey, provider2);
  const _value = ethers.utils.parseEther("1");

  const CONTRACTADDRESS = "0x6e828b59fc799b6ef92e42d2f39e438a7477f469";
  const MULTISIG = await ethers.getContractAt("IMultiSig", CONTRACTADDRESS);

  /// TRANSFER ETHER TO WALLET
  //  await wallet.sendTransaction({ to: CONTRACTADDRESS, value: _value });
  //  console.log("contractBalanc", await MULTISIG.contractBalance());


  /// INTERACT WITH SMART CONTRACT
  // await MULTISIG.withdrawEther(_value);
  // await MULTISIG.Approve(1);
  // @ts-ignore
  // const bal = await MULTISIG.contractBalance();
  // console.log(Number(bal._hex));

  let approval = "0x924843c0c1105b542c7e637605f95F40FD07b4B0";
  await helpers.impersonateAccount(approval);
  const impersonatedSigner = await ethers.getSigner(approval);

  const address1 = "0x7A3E0DFf9B53fA0d3d1997903A48677399b22ce7";
  await helpers.impersonateAccount(address1);
  const impersonatedSigner1 = await ethers.getSigner(address1);

  const address2 = "0x9ee15CF9EC4B3830bBedA501d85F5329Ea3C595C";
  await helpers.impersonateAccount(address2);
  const impersonatedSigner2 = await ethers.getSigner(address2);

  const address3 = "0x85f20a6924A61904AB44243C7e2c771B3bE46734";
  await helpers.impersonateAccount(address3);
  const impersonatedSigner3 = await ethers.getSigner(address3);

  const address4 = "0xCb3416Fc84c0e9f72F169DD8e53dBc06220591BF";
  await helpers.impersonateAccount(address4);
  const impersonatedSigner4 = await ethers.getSigner(address4);

  const address5 = "0x2DBdd859D9551b7d882e9f3801Dbb83b339bFFD7";
  await helpers.impersonateAccount(address5);
  const impersonatedSigner5 = await ethers.getSigner(address5);

  const address6 = "0x88538EE7D25d41a0B823A7354Ea0f2F252AD0fAf";
  await helpers.impersonateAccount(address6);
  const impersonatedSigner6 = await ethers.getSigner(address6);

  const address7 = "0x5D63564EeF4657F360343196A7bd86ae18d3a92A";
  await helpers.impersonateAccount(address7);
  const impersonatedSigner7 = await ethers.getSigner(address7);

  const address8 = "0x21c1229D4b781F4F7A95dEb4022B57f346af4CEF";
  await helpers.impersonateAccount(address8);
  const impersonatedSigner8 = await ethers.getSigner(address8);

  // "0x9ee15CF9EC4B3830bBedA501d85F5329Ea3C595C", //
  // "0x7A3E0DFf9B53fA0d3d1997903A48677399b22ce7", //
  //   "0x9ee15CF9EC4B3830bBedA501d85F5329Ea3C595C", //
  //   "0x85f20a6924A61904AB44243C7e2c771B3bE46734", //
  //   "0x2DBdd859D9551b7d882e9f3801Dbb83b339bFFD7", //
  //   "0x88538EE7D25d41a0B823A7354Ea0f2F252AD0fAf",  
  //   "0x5D63564EeF4657F360343196A7bd86ae18d3a92A",
  //   "0x12896191de42EF8388f2892Ab76b9a728189260A",
  //   "0x924843c0c1105b542c7e637605f95F40FD07b4B0",
  //   "0xB632cAf3119860599ce162Fad8753fc4198037b4",
  //   "0x20497F37a8169c8C9fA09411F8c2CFB7c90dE5d1",
  //   "0xCb3416Fc84c0e9f72F169DD8e53dBc06220591BF",
  //   "0x21c1229D4b781F4F7A95dEb4022B57f346af4CEF",

  // const rec = await (
  //   await MULTISIG.connect(impersonatedSigner).withdrawEther(_value)
  // ).wait();

  // const approve1 = await MULTISIG.connect(impersonatedSigner1).Approve(8);
  // const approve2 = await MULTISIG.connect(impersonatedSigner2).Approve(8);
  // const approve3 = await MULTISIG.connect(impersonatedSigner3).Approve(8);
  // const approve4 = await MULTISIG.connect(impersonatedSigner4).Approve(8);
  // const approve5 = await MULTISIG.connect(impersonatedSigner5).Approve(8);
  // const approve6 = await MULTISIG.connect(impersonatedSigner6).Approve(8);
  // const approve7 = await MULTISIG.connect(impersonatedSigner7).Approve(8);
  // const approve8 = await MULTISIG.connect(impersonatedSigner8).Approve(8);

  let impBal = await impersonatedSigner.getBalance();
  // console.log(rec);
  console.log("impersonate bal", impBal.toString());

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});