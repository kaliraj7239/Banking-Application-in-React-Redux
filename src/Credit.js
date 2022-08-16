import React, { Component } from 'react';
import './App.css';
import Bank from './Bank/Bank';
import { Box } from '@mui/material';
import { connect } from 'react-redux';
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';
import SendToMobileRoundedIcon from '@mui/icons-material/SendToMobileRounded';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';
import QrCodeScannerRoundedIcon from '@mui/icons-material/QrCodeScannerRounded';
class App6 extends Component {
    constructor(){
        super();
    this.state = {
    toggle:true
  }
    this.state = {
    togglemini:true
     }
    }
render() { 
     let transactionHistory = (
   <div>
    {this.props.transactionHistory.map((log) => { return <li>{log.transactionType}  ₹ {log.amount} | closing balance:  ₹{log.newBalance} | {log.date} </li> })} 
   </div>
  )

    return (
      <>
      <div className="App1" style={{marginTop:"160px",color:"black",marginLeft:"300px",marginRight:"300px",borderRadius:"30px"}}>

      


      <h1>Balance:  ₹{this.props.balance}</h1>
     
           
      
      <Bank />
      
</div>
<Box style={{marginLeft:"500px",marginTop:"40px"}}>
<AccountBalanceRoundedIcon color="primary" sx={{ fontSize: 80 }} />
<SendToMobileRoundedIcon color="primary" sx={{ fontSize: 80 }}/>
<AccountBalanceWalletRoundedIcon color="primary" sx={{ fontSize: 80 }}/>
<QrCodeScannerRoundedIcon color="primary" sx={{ fontSize: 80 }}/>
</Box> 
</>
    );
  }
}


const mapStateToProps = state => {
  return { 
    balance: state.balance,
    transactionHistory: state.transactionHistory
  }
}

const mapDispatchToProps = dispatch => {
  return {
    //in last app values were hard coded, now we pass a payload depending on which button is clicked
    withdraw: (amount) => dispatch({type:'withdraw', value: amount}),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(App6);