import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/transactionActions";

class TransactionForm extends Component {
  state = {
    ...this.returnStateObject(),
  };

  returnStateObject() {
    if (this.props.currentIndex === -1)
      return {
        AccountNo: "",
        FSC: "",
        Name: "",
        amount: "",
      };
    else return this.props.list[this.props.currentIndex];
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.currentIndex !== this.props.currentIndex ||
      prevProps.list.length !== this.props.list.length
    ) {
      this.setState({ ...this.returnStateObject() });
    }
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.currentIndex === -1)
      this.props.insertTransaction(this.state);
    else this.props.updateTransaction(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} autoComplete="off">
        <input
          name="AccountNo"
          placeholder="Account Number"
          onChange={this.handleInputChange}
          value={this.state.AccountNo}
        />
        <br />
        <input
          name="FSC"
          placeholder="FSC"
          onChange={this.handleInputChange}
          value={this.state.FSC}
        />
        <br />
        <input
          name="Name"
          placeholder="Account Holder Name"
          onChange={this.handleInputChange}
          value={this.state.Name}
        />
        <br />
        <input
          name="amount"
          placeholder="Amount"
          onChange={this.handleInputChange}
          value={this.state.amount}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.list,
    currentIndex: state.currentIndex,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    insertTransaction: (transaction) => dispatch(actions.insert(transaction)),
    updateTransaction: (transaction) => dispatch(actions.update(transaction)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionForm);
