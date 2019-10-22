import React, { Component } from "react";

class Notifier extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className={this.props.class}
        style={{
          borderRadius: 0,
          margin: 0,
          top: 0,
          paddingTop: 10,
          paddingBottom: 10,
          backgroundColor: this.props.bgColor,
          color: this.props.txtColor,
          textAlign: 'center'
        }}
      >
        {this.props.message}
      </div>
    );
  }
}

export default Notifier;
