import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { fetchTweets } from "../actions/tweetsActions";
import { fetchUser } from "../actions/userActions";
import { Tweet, User } from "../domains";
import { State } from "../reducers";

interface StateProps {
  user: User;
  userFetched: boolean;
  tweets: Tweet[];
  tweetFetching: boolean;
}

const connecter = connect<StateProps, unknown, unknown, State>((state) => {
  return {
    user: state.userReducer.user,
    userFetched: state.userReducer.fetched,
    tweets: state.tweetsReducer.tweets,
    tweetFetching: state.tweetsReducer.fetching,
  };
});

class Layout extends React.Component<ConnectedProps<typeof connecter>> {
  componentDidMount(): void {
    this.props.dispatch(fetchUser());
  }

  fetchTweets(): void {
    fetchTweets()(this.props.dispatch);
  }

  render(): React.ReactNode {
    const { user, tweets, tweetFetching } = this.props;
    if (tweetFetching) {
      return <div>fetching...</div>;
    }
    if (!tweets.length) {
      return <button onClick={this.fetchTweets.bind(this)}>load tweets</button>;
    }
    const mappedTweets = tweets.map((t) => <li key={t.id}>{t.text}</li>);
    return (
      <div>
        <h1>{user.name}</h1>
        <ul>{mappedTweets}</ul>
      </div>
    );
  }
}

export default connecter(Layout);
