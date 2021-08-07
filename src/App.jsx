import React from "react";
import Awards from "./components/Awards";
import Faculty from "./components/Faculty";
import Footer from "./components/Footer";
import Notes from "./components/Notes";
import Services from "./components/Services";
import Title from "./components/Title";
import TopHeader from "./components/TopHeader";

const App = () => {
  return (
    <>
      <TopHeader />
      <Title />
      <Faculty />
      <Notes />
      <Services />
      <Awards />
      <Footer />
    </>
  );
};

export default App;
