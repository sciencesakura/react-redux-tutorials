import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Archives from "./pages/Archives";
import Featured from "./pages/Featured";
import Layout from "./pages/Layout";
import Settings from "./pages/Settings";

class App extends React.Component {
  render(): React.ReactNode {
    return (
      <BrowserRouter>
        <Layout>
          <Route exact path="/" component={Featured} />
          <Route exact path="/archives" component={Archives} />
          <Route path="/archives/:article" component={Archives} />
          <Route path="/settings/:mode(main|extra)" component={Settings} />
        </Layout>
      </BrowserRouter>
    );
  }
}

const app = document.getElementById("app");
ReactDOM.render(<App />, app);
