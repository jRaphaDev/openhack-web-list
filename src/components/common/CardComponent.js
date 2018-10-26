import React, { Component } from "react";
import { RefreshButtonComponent } from "../common/RefreshButtonComponent";

class CardComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-md-12 col-sm-12 col-lg-12" style={{ marginTop: 12 }}>
        <div className="card">
          <div
            className="card-header"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <span style={{ justifyContent: "flex-end", flex: 4 }}>
              {this.props.headerTitle}
            </span>

            <RefreshButtonComponent
              isLoading={this.props.isLoading}
              clicked={this.props.refreshAction}
            />

            <i
              onClick={this.props.add}
              className="fas fa-plus"
              style={{ padding: 5, cursor: "pointer" }}
            />
          </div>
          <ul className="list-group list-group-flush">{this.props.children}</ul>
        </div>
      </div>
    );
  }
}

export default CardComponent;
