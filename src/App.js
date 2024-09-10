import './App.css';

import About from './components/About/About';
import Faq from './components/Faq/Faq';
import Follow from './components/Follow/Follow';
import Footer from './components/Footer/Footer';
import Gallery from './components/Gallery/Gallery';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Testimonials from './components/Testimonials/Testimonials';


function App() {
    return (
        <>
            <Navbar />
            <Header />
            <About />
            <Gallery />
            <Testimonials />
            <Follow />
            <Faq />
            <Footer />
        </>
    );
}

export default App;
