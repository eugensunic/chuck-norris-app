import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  mails: state.mail.mailArray
});

const mapDispatchToProps = dispatch => ({
  removeMailFromList: id => {
    dispatch({ type: "REMOVE_MAIL", payload: id });
  }
});

class MailList extends Component {
  constructor(props) {
    super(props);
  }

  handleOnClick(id) {
    if (!this.props.mails.length) {
      return;
    }
    this.props.removeMailFromList(id);
  }

  render() {
    return (
      <div>
        <h3 style={{ marginTop: 40 }}>List of added mails</h3>
        <ol className="list-group">
          {this.props.mails.map((mail, i) => (
            <li key={i} className="list-group-item">
              {mail}
              <span className="x-icon" onClick={() => this.handleOnClick(i)}>
                X
              </span>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MailList);
