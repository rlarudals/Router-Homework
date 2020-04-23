import React from "react";
import { Route, Link } from "react-router-dom";
import { OnePage, TwoPage, ThreePage, FourPage } from "./screens";

class App extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">OnePage</Link>
          </li>
          <li>
            <Link to="/two">TwoPage</Link>
          </li>
          <li>
            <Link to="/three">ThreePage</Link>
          </li>
          <li>
            <Link to="/four">FourPage</Link>
          </li>
        </ul>
        <Route exact path="/" component={OnePage} />
        <Route exact path="/two" component={TwoPage} />
        <Route exact path="/three" component={ThreePage} />
        <Route exact path="/four" component={FourPage} />
      </div>
    );
  }
}

export default App;
