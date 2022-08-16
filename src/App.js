import React, { Component } from 'react';
import logo from './friedhead.svg';
import './App.css';
import Bank from './Bank/Bank'
import { connect } from 'react-redux';

class App extends Component {
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
    {this.props.transactionHistory.map((log) => { return <li>{log.transactionType}  ₹{log.amount} | closing balance:  ₹{log.newBalance} | {log.date} </li> })} 
   </div>
  )

    return (
      <div className="App" style={{marginTop:"60px",marginLeft:"500px",marginRight:"500px",borderRadius:"30px"}}>

      <header className="App-header">
       
          <h2>KALIRAJ Bank</h2>
      </header>


      <h1>Balance:  ₹{this.props.balance}</h1>

      <div className="atm">    
        <h2>Available Amounts</h2>
        <button className="mainbtn" onClick={() => this.props.withdraw(50)}>Withdraw  ₹50</button>
        <button className="mainbtn" onClick={() => this.props.withdraw(100)}>Withdraw  ₹100</button>
        <button className="mainbtn" onClick={() => this.props.withdraw(100)}>Withdraw  ₹200</button>

        <button className="mainbtn" onClick={() => this.props.withdraw(100)}>Withdraw  ₹500</button>

        <button className="mainbtn" onClick={() => this.props.withdraw(100)}>Withdraw  ₹2000</button>

      </div>

      <Bank />
      <button onClick={()=>{this.setState({toggle:!this.state.toggle})}}><center><h3>Transaction Summary</h3></center></button>

{

this.state.toggle ?
      <div>
        <h2></h2>
        {transactionHistory}
      </div>
 : null

}
    </div>
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
  )(App);