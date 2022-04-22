import logo from "./logo.svg";
import "./App.css";
import Text from "./page/test.jsx";
import { React, useState, useEffect } from "react";

import intl from "react-intl-universal";
require("intl/locale-data/jsonp/en.js");
require("intl/locale-data/jsonp/zh.js");
// app locale data
const locales = {
  en_US: require("./page/locales/en_US.json"),
  zh_CN: require("./page/locales/zh_CN.json"),
};

function App() {
  const [initDone, setInitDone] = useState(false);
  useEffect(() => {
    loadLocales();
  }, []);
  const loadLocales = () => {
    intl
      .init({
        currentLocale: "en_US", // TODO: determine locale here
        // currentLocale: 'zh_CN',
        locales,
      })
      .then(() => {
        setInitDone(true);
      });
  };

  return (
    initDone && (
      <div className="App">
        <header className="App-header">
          <h1>这是父组件</h1>
          {intl.get("title")}
          <h1>
            <Text></Text>
          </h1>
        </header>
      </div>
    )
  );
}

export default App;
