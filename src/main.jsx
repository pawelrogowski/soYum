import { Scrollbars } from "rc-scrollbars";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import { App } from "./App.jsx";
import { persistor, store } from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router basename="/">
          <Scrollbars style={{ width: "100vw", height: "100vh" }} autoHide autoHideTimeout={500}>
            <App />
          </Scrollbars>
        </Router>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
