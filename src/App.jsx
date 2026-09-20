import React from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
// import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  return (
    <div>
      <Navigation />
      <Header data={JsonData.Header} />
      <Features data={JsonData.Features} />
      <Gallery data={JsonData.Gallery} />
      <Services data={JsonData.Services} />
      {/* <About data={JsonData.About} /> */}
      <Contact data={JsonData.Contact} />
    </div>
  );
};

export default App;