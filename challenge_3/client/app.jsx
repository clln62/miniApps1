// const React = require('react');
// const ReactDOM = require('react-dom');

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            email: null,
            password: null,
            address: {
                line1: null,
                line2: null,
                city: null,
                state: null,
                zip: null
            },
            phone: null,
            creditCard: null,
            exDate: null,
            CVV: null,
            billingZip: null,
            home: true,
            F1: false,
            F2: false,
            F3: false,
            confirm: false
        }
    }

    nextClicked(username, userEmail, userPassword) {
        // this.setState({name: username});
        // this.setState({email: userEmail});
        // this.setState({password: userPassword})
        this.setState({F1:false});
        this.setState({F2: true});
    };

    F2nextClicked() {
        this.setState({F2:false});
        this.setState({F3: true});
    }

    F3nextClicked() {
        this.setState({F3:false});
        this.setState({confirm: true});
    }

    checkoutClicked() {
        this.setState({home:false});
        this.setState({F1: true});
    };

    purchaseClicked() {
        this.setState({confirm: false});
        this.setState({home: true});
    };
    

    render() {
        if (this.state.home === true) {
            return (
                <div>
                    <button type="button" id="checkout" onClick={this.checkoutClicked.bind(this)}>Checkout</button>
                </div>
            );
        }
        if (this.state.F1 === true) {
            return (
                <div>
                    <form>Name:
                        <textarea></textarea>
                    </form>
                    <form>Email:
                        <textarea></textarea>
                    </form>
                    <form>Create a password:
                        <textarea></textarea>
                    </form>
                    <button type="button" onClick={this.nextClicked.bind(this)}>Next</button>
                </div>
            );
        }
        if (this.state.F2 === true) {
            return (
                <div>
                    <form>Address:
                            <textarea value="Line 1"></textarea>
                            <textarea value="Line 2"></textarea>
                            <textarea value="City"></textarea>
                            <textarea value="State"></textarea>
                            <textarea value="Zip Code"></textarea>
                    </form>
                    <form>Phone:
                            <textarea></textarea>
                    </form>
                    <button type="button" onClick={this.F2nextClicked.bind(this)}>Next</button>
                </div>
            );
        }
        if (this.state.F3 === true) {
            return (
                <div>
                    <form>Credit Card (CC) Number:
                        <textarea></textarea>
                    </form>
                    <form>CC Expiration Date:
                        <textarea></textarea>
                    </form>
                    <form>CC CVV:
                        <textarea></textarea>
                    </form>
                    <form>Billing Zip Code:
                        <textarea></textarea>
                    </form>
                    <button id="F3" type="button" onClick={this.F3nextClicked.bind(this)}>Next</button>
                </div>

            );
        }
        if (this.state.confirm === true) {
            return (
                <div>
                    <button id="purchase" type="button" onClick={this.purchaseClicked.bind(this)}>Purchase</button>
                </div>

            );
        }
    }
}


ReactDOM.render(<App/>, document.getElementById('app'));

