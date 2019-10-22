import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  notifier: state.notifier
});

class Result extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.notifier.success) return <div></div>;
    return (
      <div className="container">
        <h3>Mail sent to recipients with message:</h3>
        <br />
        {this.props.notifier.content}
      </div>
    );
  }
}

export default connect(mapStateToProps)(Result);
