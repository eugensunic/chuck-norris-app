import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  mails: state.mail.mailArray
});

const mapDispatchToProps = dispatch => ({
  addMailToList: mail => {
    dispatch({ type: "ADD_MAIL", payload: mail });
  }
});

class AddMail extends Component {
  constructor(props) {
    super(props);
    this.state = { mail: "", invalidMailError: false, mailExistsError: false };
  }

  isMailValid(mail) {
    return /^\S+@\S+[\.][0-9a-z]+$/.test(mail.trim());
  }

  mailExistsInList() {
    return this.props.mails.findIndex(x => x === this.state.mail) > -1;
  }

  handleOnClick() {
    if (!this.isMailValid(this.state.mail)) {
      this.setState({ invalidMailError: true });
      return;
    }
    if (this.mailExistsInList()) {
      this.setState({ mailExistsError: true });
      return;
    }

    this.props.addMailToList(this.state.mail);
    this.setState({ mail: "" });
  }

  render() {
    return (
      <div className="card card-signin my-5 center">
        {this.state.mailExistsError && (
          <div className="error-container">Mail already exists in list</div>
        )}
        <h5 className="card-title text-center">Mail Sender</h5>
        <div className="form-signin">
          <div className="form-label-group">
            <input
              type="email"
              id="mail"
              className="form-control"
              placeholder="Username/mail"
              value={this.state.mail}
              onChange={e =>
                this.setState({
                  mail: e.target.value,
                  invalidMailError: false,
                  mailExistsError: false
                })
              }
              required
            />
            <label htmlFor="inputEmail">Email address</label>
          </div>
          {this.state.invalidMailError && (
            <div className="error-container">mail address not valid</div>
          )}
          <button
            className="btn btn-lg btn-primary btn-block text-uppercase"
            disabled={false}
            onClick={() => this.handleOnClick()}
          >
            Add mail
          </button>
          <hr className="my-4" />
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddMail);
