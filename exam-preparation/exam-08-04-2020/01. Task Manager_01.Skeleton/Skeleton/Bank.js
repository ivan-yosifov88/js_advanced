class Bank{
    constructor(bankName){
        this._bankName = bankName;
        this.allCustomers = [];
    };
    newCustomer(customer){
        let {firstName, lastName, personalId} = customer
        if (this.allCustomers.some(customerInfo => customerInfo.firstName == firstName && customerInfo.lastName == lastName && customerInfo.personalId == personalId)){
            throw new Error(`${firstName} ${lastName} is already our customer!`);
        }
        this.allCustomers.push(customer);
        return customer
    };
    depositMoney (personalId, amount){
        let currentCustomer = this.allCustomers.find(customerInfo => customerInfo.personalId == personalId);
        if (currentCustomer == undefined){
            throw Error('We have no customer with this ID!')
        }
        if (currentCustomer.totalMoney == undefined){
            currentCustomer.transactions = []
            currentCustomer.totalMoney = 0
        }
        currentCustomer.totalMoney += amount
        currentCustomer.transactions.push({
            numberOfTransaction : currentCustomer.transactions.length + 1,
            transactionType : 'made deposit of',
            transactionAmount: amount,
        })
        return `${currentCustomer.totalMoney}$`
    };
    withdrawMoney (personalId, amount){
        let currentCustomer = this.allCustomers.find(customerInfo => customerInfo.personalId == personalId);
        if (currentCustomer == undefined){
            throw new Error('We have no customer with this ID!')
        }
        if (currentCustomer.totalMoney == undefined || currentCustomer.totalMoney < amount){
            throw new Error(`${currentCustomer.firstName} ${currentCustomer.lastName} does not have enough money to withdraw that amount!`)
        }
        currentCustomer.totalMoney -= amount
        currentCustomer.transactions.push({
            numberOfTransaction : currentCustomer.transactions.length + 1,
            transactionType : 'withdrew',
            transactionAmount: amount,
        })
        return `${currentCustomer.totalMoney}$`
        
    };
    customerInfo (personalId){
        let currentCustomer = this.allCustomers.find(customerInfo => customerInfo.personalId == personalId);
        if (currentCustomer == undefined){
            throw new Error('We have no customer with this ID!');
        }
        let result = [`Bank name: ${this._bankName}`,
            `Customer name: ${currentCustomer.firstName} ${currentCustomer.lastName}`,
            `Customer ID: ${currentCustomer.personalId}`,
            `Total Money: ${currentCustomer.totalMoney}$`,
            `Transactions:`,
        ];
        if (currentCustomer.transactions.length > 0){
            let sortedCustomerTransactionsByNunberDescending = currentCustomer.transactions
            .sort((a, b) => b.numberOfTransaction - a.numberOfTransaction)
            .forEach(record => result.push(`${record.numberOfTransaction}. ${currentCustomer.firstName} ${currentCustomer.lastName} ${record.transactionType} ${record.transactionAmount}$!`))
        }
        return result.join('\n')
    };
}

let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267}));
console.log(bank.newCustomer({firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596}));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596,555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));

