
export const AccountReducer = (accountBalance = 0, action) => {
    switch(action.type){
        case "Deposit":
            return accountBalance + action.payload;
        case "Withdraw":
            return accountBalance - action.payload;
        default:
            return accountBalance;
    }
}

export const AccountReducer2 = (accountBalance = 10, action) => {
    switch(action.type){
        case "Deposit":
            return accountBalance + action.payload;
        case "Withdraw":
            return accountBalance - action.payload;
        default:
            return accountBalance;
    }
}

//export default AccountReducer;