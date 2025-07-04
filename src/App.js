// import "./App.css";

import About from "./components/About";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Home from "./components/Home";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";
import { ThemeProvider } from "./contexts/ThemeContext";
import axios from "axios";
import Blogs from "./components/Blogs";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const readToken = "9bb8f973821dd64c277667f81147bc867f8d619e";
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      axios
        .get(
          `https://api.buttercms.com/v2/pages/portfolio/portfolio/?auth_token=${readToken}`
        )
        .then((res) => {
          setData(res.data.data.fields.my_personal_portfolio);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getData();
  }, []);

  return (
    <ThemeProvider>
      <div className="App theme-bg-primary theme-text-primary">
        <ThemeToggle />
        <Navbar />
        <Home content={data[0]} />
        <About content={data[1]} />
        <Skills content={data[3]} />
        <Works content={data[2]} />
        <Blogs content={data[4]} />
        <Contact content={data[5]}/>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
