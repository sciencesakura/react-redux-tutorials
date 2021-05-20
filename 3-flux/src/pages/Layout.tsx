import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";

type Props = RouteComponentProps;

class Layout extends React.Component<Props> {
  render(): React.ReactNode {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "60px",
    };
    return (
      <div>
        <Nav location={location} />
        <div className="container" style={containerStyle}>
          <div className="row">
            <div className="col-lg-12">{this.props.children}</div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}
export default withRouter(Layout);
