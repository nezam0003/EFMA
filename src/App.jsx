import React from "react";
import Faculty from "./components/Faculty";
import Notes from "./components/Notes";
import Title from "./components/Title";
import TopHeader from "./components/TopHeader";

const App = () => {
  return (
    <>
      <TopHeader />
      <Title />
      <Faculty />
      <Notes />
    </>
  );
};

export default App;
