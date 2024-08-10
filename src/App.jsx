import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/pages/Header';
import Footer from './component/pages/Footer';
import Home from './component/pages/Home';
import About from './component/pages/About';
import ProductList from './component/pages/ProductList';
import Contact from './component/pages/Contact';
import Card from './component/Card';
import cardimg from '/images/pro-1.webp'
const App = () => {
    const message = "Welcome to the Home Page!";
    const adds = [
        {
            src: cardimg,
        },
        {
            src: "../../../public/images/pro-2.jpg",
        },
        {
            src: "../../../public/images/pro-3.webp",
        },
        {
            src: "../../../public/images/pro-4.webp",
        }

    ];

    return (
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home message={message} />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/contact" element={<Card />} />
                    <Route path="/products" element={<ProductList adds={adds} />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
};

export default App;
