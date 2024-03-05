import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import About from "./components/About"
import Description from "./components/Description"
import Product from "./components/Product"
import Features from "./components/Features"
import Projects from "./components/Projects"

class App extends React.Component {
    render() {
        return (
        <div className = 'wrapper'>
            <div className = 'container'>
            
                <Header />
                <Description />
                <About />
                <Product />
                <Features />
                <Projects />

                <Footer />
                
            </div>
        </div>
        );
    };

}

export default App;
