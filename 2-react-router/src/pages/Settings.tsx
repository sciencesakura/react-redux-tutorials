import React from "react";
import { RouteComponentProps } from "react-router";

interface Params {
  mode: "main" | "extra";
}

type Props = RouteComponentProps<Params>;

export default class Settings extends React.Component<Props> {
  render(): React.ReactNode {
    const type =
      this.props.match.params.mode == "extra" ? " (for expaerts)" : "";
    return <h1>Settings{type}</h1>;
  }
}
