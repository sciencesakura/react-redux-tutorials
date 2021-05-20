import React from "react";

export interface Props {
  title: string;
}

export default class Title extends React.Component<Props> {
  render(): React.ReactNode {
    return <h1>{this.props.title}</h1>;
  }
}
