import React from "react";
import Title from "./Header/Title";

export interface Props {
  title: string;
  changeTitle: (title: string) => void;
}

export default class Header extends React.Component<Props> {
  handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    this.props.changeTitle(e.target.value);
  }

  render(): React.ReactNode {
    return (
      <header>
        <Title title={this.props.title} />
        <input
          type="text"
          value={this.props.title}
          onChange={this.handleChange.bind(this)}
        />
      </header>
    );
  }
}
