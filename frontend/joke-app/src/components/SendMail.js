import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  mails: state.mail.mailArray
});

const mapDispatchToProps = dispatch => ({
  sendNoItemsNotification: () => {
    dispatch({ type: "ZERO_ITEMS" });
  },
  sendSuccessNotification: response => {
    dispatch({ type: "MAIL_SUCCESS", payload: response });
  },

  sendFailedNotification: err => {
    dispatch({ type: "MAIL_FAILURE", payload: err });
  }
});

class SendMail extends Component {
  constructor(props) {
    super(props);
  }

  handleOnClick() {
    if (!this.props.mails.length) {
      this.props.sendNoItemsNotification();
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
      .then(res => {
        console.log("success", res);
        if (res.status !== 200) throw new Error("");
        return res.json();
      })
      .then(x => this.props.sendSuccessNotification(x.value))
      .catch(err => {
        console.log("Error", err);
        this.props.sendFailedNotification(null);
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
