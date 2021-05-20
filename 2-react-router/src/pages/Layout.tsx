import React from "react";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";

type Props = RouteComponentProps;

class Layout extends React.Component<Props> {
  navigate(): void {
    console.log(this.props.history);
    this.props.history.push("/");
    // this.props.history.replace("/");
  }

  render(): React.ReactNode {
    return (
      <div>
        <h1>KillerNews.net</h1>
        {this.props.children}
        <Link
          to="/archives/some-other-articles?date=yesterday&filter=none"
          className="btn btn-warning"
        >
          archives (some other articles)
        </Link>
        <Link to="/archives?date=today&filter=hot" className="btn btn-danger">
          archives
        </Link>
        <Link to="/settings/main" className="btn btn-success">
          settings
        </Link>
        <Link to="/settings/extra" className="btn btn-success">
          settings (extra)
        </Link>
        <button className="btn btn-info" onClick={this.navigate.bind(this)}>
          featured
        </button>
      </div>
    );
  }
}

export default withRouter(Layout);
