const BaseContract = artifacts.require("BaseContract");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("BaseContract", function (/* accounts */) {
  it("should assert true", async function () {
    await BaseContract.deployed();
    return assert.isTrue(true);
  });
});
