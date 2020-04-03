import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Game from "./pages/Game";
import Score from "./pages/Score";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/game" exact component={Game} />
        <Route path="/scores" exact component={Score} />
      </Switch>
    </BrowserRouter>
  );
}
