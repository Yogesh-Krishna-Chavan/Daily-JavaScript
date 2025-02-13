//private & public access modifiers

class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
    console.log(`Deposited: ${amount}, new balance: ${this.#balance}`);
  }

  withdraw(amount) {
    if (this.#balance < amount) {
      console.log("Insufficient balance");
    } else {
      this.#balance -= amount;
      console.log(`Withdrawn: ${amount}, new balance: ${this.#balance}`);
    }
  }
  balance() {
    console.log(`Balance: ${this.#balance}`);
  }
}

const account = new BankAccount();
account.deposit(100);
account.withdraw(25);
account.balance();
