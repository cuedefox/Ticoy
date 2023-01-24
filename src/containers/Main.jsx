import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Faq from "../components/Faq";
import Products from "../components/Products";

const Main = () => {
    return <main>
        <Products />
        <Faq />
        <About />
        <Contact />
    </main>
}

export default Main;