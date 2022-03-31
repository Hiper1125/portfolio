import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import "./index.css";
import App from "./components/App";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas)

var accessToken =
  "IGQVJWQWJGZAkdQZAFcxVlNWSFpTT1hZAcFhtN1A1VUt1TmRTTGt1WTh0TUI2TlItTm9Fa2c2UU5Bb0M4QlhWLUd3dVlzdkFHVm9kczQ4UUN2bElHQjJRem1oTVRaeGxlVlk2UV9oeWVGWWtTQ1QtQml2UwZDZD";

ReactDOM.render(
    <App />,
  document.getElementById("root")
);