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
        this.setState({name: username});
        this.setState({email: userEmail});
        this.setState({password: userPassword})
        this.setState({F1:false});
        this.setState({F2: true});
    };

    checkoutClicked() {
        this.setState({home:false});
        this.setState({F1: true});
    };

    purchaseClicked() {
        document.getElementById('purchase');
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
                        <textarea id="name"></textarea>
                    </form>
                    <form>Email:
                        <textarea id="email"></textarea>
                    </form>
                    <form>Create a password:
                        <textarea id="password"></textarea>
                    </form>
                    <button type="button" onClick={this.nextClicked.bind(this)}>Next</button>
                </div>
            );
        }
        if (this.state.F2 === true) {
            return (
                <div>
                    <form>Address:
                        <textarea>Line 1</textarea>
                        <textarea>Line 2</textarea>
                        <textarea>City</textarea>
                        <textarea>State</textarea>
                        <textarea>Zip Code</textarea>
                    </form>
                    <form>Phone:
                        <textarea></textarea>
                    </form>

                    <button id="F2" type="button" onClick={this.nextClicked.bind(this)}>Next</button>
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
                    <button id="F3" type="button" onClick={this.nextClicked.bind(this)}>Next</button>
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

