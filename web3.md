```
// Load Web3.js library and set provider to local node (e.g. Ganache)
const Web3 = require('web3');
const web3 = new Web3('http://localhost:8545');

// Set up basic account and private key
const account = web3.eth.accounts.create();
const privateKey = account.privateKey;

// Connect to contract ABI and address
const contractABI = require('./contract-abi.json');
const contractAddress = '0xcd0b7ceb3be24d3d0aedd1c5600727cd36f2e16d';

// Set up contract object using ABI and address
const contract = new web3.eth.Contract(contractABI, contractAddress);

// Call a function on the contract
contract.methods.myFunction().call().then(result => {
  console.log(result);
}).catch(error => {
  console.error(error);
});
```

|31 | 13 | 14 | 15| 15|
|--|--|--|--|--|
| 1 | Test that a user can successfully log in with valid credentials | User is authenticated and redirected to the dashboard page | User is authenticated and redirected to the dashboard page | Yes |
| 2 | Test that a user cannot log in with invalid credentials | User is shown an error message indicating invalid username or password | User is shown an error message indicating invalid username or password | Yes |
| 3 | Test that a user can successfully log out | User is logged out and redirected to the login page | User is logged out and redirected to the login page | Yes |
