import React from "react";
import { RouteComponentProps } from "react-router-dom";

interface Params {
  article?: string;
}

type Props = RouteComponentProps<Params>;

export default class Archives extends React.Component<Props> {
  render(): React.ReactNode {
    const query = new URLSearchParams(this.props.location.search);
    const message =
      (this.props.match.params.article
        ? this.props.match.params.article + ", "
        : "") +
      "date=" +
      query.get("date") +
      ", filter=" +
      query.get("filter");
    return <h1>Archives ({message})</h1>;
  }
}
