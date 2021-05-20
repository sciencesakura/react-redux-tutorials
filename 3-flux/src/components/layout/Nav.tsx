import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";

interface Props {
  location: RouteComponentProps["location"];
}

interface State {
  collapsed: boolean;
}

export default class Nav extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      collapsed: true,
    };
  }
  toggleCollapse(): void {
    const collapsed = !this.state.collapsed;
    this.setState({ collapsed });
  }

  render(): React.ReactNode {
    const { location } = this.props;
    const { collapsed } = this.state;
    const featuredClass = location.pathname === "/" ? "active" : "";
    const archivesClass = location.pathname.match(/^\/favorites/)
      ? "active"
      : "";
    const settingsClass = location.pathname.match(/^\/settings/)
      ? "active"
      : "";
    const navClass = collapsed ? "collapse" : "";

    return (
      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              onClick={this.toggleCollapse.bind(this)}
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <div className={"navbar-collapse"} id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className={featuredClass}>
                <Link to="/" onClick={this.toggleCollapse.bind(this)}>
                  Todos
                </Link>
              </li>
              <li className={archivesClass}>
                <Link to="favorites" onClick={this.toggleCollapse.bind(this)}>
                  Favorites
                </Link>
              </li>
              <li className={settingsClass}>
                <Link to="settings" onClick={this.toggleCollapse.bind(this)}>
                  Settings
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
