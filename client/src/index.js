import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ConfigProvider } from "antd";
import store from "./redux/store";
import { Provider } from "react-redux";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#1E90FF", // Changed to Dodger Blue
          colorBorder: "#00BFFF", // Changed to Deep Sky Blue
        },
      }}
    >
      <App />
    </ConfigProvider>
  </Provider>
);

reportWebVitals();
