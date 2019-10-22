import React, { Component } from "react";
import { connect } from "react-redux";

import AddMail from "./components/AddMail";
import MailList from "./components/MailList";
import Footer from "./components/Footer";
import SendMail from "./components/SendMail";
import Navbar from "./components/Navbar";
import Notifier from "./components/Notifier";
import Result from "./components/Result";

const mapStateToProps = state => ({
  notifier: state.notifier
});

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar />
        <Notifier
          message={this.props.notifier.message}
          bgColor={this.props.notifier.bgColor}
          txtColor={this.props.notifier.txtColor}
          class={this.props.notifier.class}
        />
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <AddMail />
            </div>
            <div className="col-sm-6">
              <MailList />
            </div>
          </div>
          <SendMail />
        </div>
        <Result />
        <Footer />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  null
)(App);
