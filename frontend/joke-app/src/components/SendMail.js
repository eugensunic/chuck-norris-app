import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  mails: state.mail.mailArray
});

const mapDispatchToProps = dispatch => ({
  sendGlobalNotification: (_type, _payload) => {
    dispatch({ type: _type, payload: _payload });
  }
});

class SendMail extends Component {
  constructor(props) {
    super(props);
  }

  handleOnClick() {
    if (!this.props.mails.length) {
      this.props.sendGlobalNotification("ZERO_ITEMS");
      return;
    }

    fetch("/api/joke", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(this.props.mails)
    })
      .then(x => {
        console.log("success", x);
        if (x.status !== 200) throw new Error("");
        this.props.sendGlobalNotification("MAIL_SUCCESS", x);
      })
      .catch(err => {
        console.log("Error", err);
        this.props.sendGlobalNotification("MAIL_FAILURE", null);
      });
  }

  render() {
    return (
      <div>
        <div className="row">
          <button
            id="submit"
            className="btn btn-success"
            onClick={() => this.handleOnClick()}
          >
            Send mail
          </button>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SendMail);
