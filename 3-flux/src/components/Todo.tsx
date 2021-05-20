import React from "react";

interface Props {
  text: string;
  complete: boolean;
  edit?: boolean;
}

export default class Todo extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  render(): React.ReactNode {
    const { complete, edit, text } = this.props;
    const icon = complete ? "\u2714" : "\u2716";

    if (edit) {
      return (
        <li>
          <input value={text} autoFocus />
        </li>
      );
    }

    return (
      <li>
        <span>{text}</span>
        <span>{icon}</span>
      </li>
    );
  }
}
