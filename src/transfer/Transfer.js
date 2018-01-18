import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getMyBalance, transferTokens } from './TransferActions'
import ripple from '../assets/images/ripple.svg';
import {
    Card,
    TextField,
    Button
} from 'react-md';

export class Transfer extends Component {
    constructor(props) {
        super(props)
        this.state = { account: "", toAddress: "", tokenAmount: 0 };
    }
    componentDidMount(e) {
        const account = this.props.match.params.id;
        this.setState({ account: account });
        this.props.getMyBalance(account);
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.transferTokens(this.state.account, this.state.toAddress, this.state.tokenAmount);
    }
    render() {
        return (
            <Card>
                <h4>My Balance: {this.props.balance}</h4>
                <form className="login-form" onSubmit={this.handleSubmit}>
                    <TextField
                        id="floating-center-title"
                        label="To Account"
                        lineDirection="center"
                        placeholder=""
                        className="md-cell md-cell--bottom"
                        value={this.state.toAddress}
                        onChange={account => this.setState({ toAddress: account })}
                    />
                    <TextField
                        id="floating-multiline"
                        label="Amount to send"
                        lineDirection="right"
                        placeholder="0"
                        className="md-cell md-cell--bottom"
                        value={this.state.tokenAmount}
                        onChange={amount => this.setState({ tokenAmount: amount })}
                    />
                    {this.props.loading ? (
                        <div className="preloader">
                            <img src={ripple} className="ripple" alt="logo" />
                            <p>
                                Waiting for transaction to complete. <br />This may take a
                            few seconds.
                          </p>
                        </div>
                    ) : (
                            <Button type="submit" raised primary swapTheming>Transfer Tokens</Button>
                        )}

                </form>
            </Card>
        )
    }
}

Transfer.propTypes = {
    prop: PropTypes.func,
    balance: PropTypes.number,
    getMyBalance: PropTypes.func
}

const mapStateToProps = (state) => ({
    balance: state.transfer.balance,
    loading: state.loadingState.loading,
})


export default connect(mapStateToProps, { getMyBalance, transferTokens })(Transfer)
