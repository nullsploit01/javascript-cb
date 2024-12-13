class BankAccount {
  #password;
  #secretPhrase;
  balance;

  constructor(password, secretPhrase) {
    this.#password = password;
    this.#secretPhrase = secretPhrase;
    this.balance = 0;
  }

  getBalance() {
    return this.balance;
  }
}

const myBankAccount = new BankAccount("password", "superSecretPhrase");
console.log(myBankAccount.getBalance());
