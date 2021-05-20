import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export type Props = unknown;

export interface State {
  title: string;
}

export default class Layout extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { title: "Welcome" };
  }

  changeTitle(title: string): void {
    this.setState({ title });
  }

  render(): React.ReactNode {
    return (
      <div>
        <Header
          title={this.state.title}
          changeTitle={this.changeTitle.bind(this)}
        />
        <Footer />
      </div>
    );
  }
}
