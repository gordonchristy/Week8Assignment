//create a class with for new accounts with a constructor that has customer's name, email adddress, and account number as parameters.
class Account {
    constructor(name, emailAddress) {
        this.name = name;
        this.emailAddress = emailAddress;
        console.log(`Welcome: ${this.name}`);
    }

    
    }
//create a class that enables customer to see a billing amount to be paid.
class Viewaccount extends Account {
    constructor(accountNumber, bill) {
        this.accountNumber = accountNumber
        this.bill = bill;
        console.log(`${this.bill} is due on the 25th of the month`);
    }

}
//create a class for nenu options
class Menu {
    constructor() {
        this.accounts = [];
        this.currentAccount = null; 
    }
//building out menu options
    start() {
        let selection = this.showMainMenuOptions();
        while (selection !== '0') {
            switch (selection) {
                case '1':
                    this.createAccount();
                    break;
                case '2':
                    this.viewAccount();
                    break;
                case '3':
                    this.deleteAccount();
                    break;
                
                
            }
            selection = this.showMainMenuOptions();
        }
    }
//main menu options
    showMainMenuOptions() {
        return prompt(`
        0) Exit
        1) Create Account
        2) View Account
        3) Delete Account
        `);
    }

// specifics of menu features create account, view account, and delete account
    createAccount() {
        let name = prompt('Enter your name.');
        let emailAddress = prompt('Enter email address:');
        this.createAccount.push(new Account(name))
        console.log(`Welcome: ${this.name}.`)
    
    }


    viewAccount() {
        let index = prompt ('Enter your account number.');
        console.log(`You are viewing account number ${this.accountNumber}`);
        if (index> -1 &&  index < this.accountNumber.length) {
        this.currentAccount = this.accountNumber[index];
        let description = 'Your account ' + this.currentAccount + '\n';
        description += ' ' + this.currentAccount.describe() + '\n ';
        for (let i = 0; i < this.currentAccount.length; i++) {
        description += i + ') ' + this.currentAccount[i].describe() + '\n';
    }
    }
}


    deleteAccount(){
        let index = prompt('Enter your email address to delete your account: ');
        if (index > -1 && index < this.emailAddress.length) { this.emailAddress.splice(index,1);
        }
    }   

}
let menu = new Menu();
menu.start();
