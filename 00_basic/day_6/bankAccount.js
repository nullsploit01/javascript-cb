class BankAccount {
  balance = 0;

  deposit(amount) {
    if (amount < 0) {
      console.log("invalid amount");
      return;
    }

    this.balance += amount;
    console.log("deposited successfully");
  }

  withdraw() {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log("withdrawn successfully");
    } else {
      console.log("Invalid amount or insufficient balance");
    }
  }

  getBalance() {
    return this.balance;
  }
}

const bankAccount = new BankAccount();
console.log(bankAccount.getBalance());

bankAccount.deposit(50);
console.log(bankAccount.getBalance());
