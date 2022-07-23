import "./App.css";
import EventPractice from "./components/EventPractice";
import EventPracticeClass from "./components/EventPracticeClass";

import React from "react";
import EventRemind from "./components/EventRemind";
import EventRemindClass from "./components/EventRemindClass";

const App = () => {
  return (
    <div>
      <EventPractice></EventPractice>
      <br />
      <EventPracticeClass></EventPracticeClass>
      <br />
      <EventRemind></EventRemind>
      <br />
      <EventRemindClass></EventRemindClass>
    </div>
  );
};

export default App;
