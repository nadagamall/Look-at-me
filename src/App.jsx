// @ts-nocheck

import Footer from './components/5-footer/footer';
import Contact from './components/4-contact/contact';
import Main from './components/3-main/main';
import Hero from './components/2-hero/hero';
import Header from './components/1-header/header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'; // استيراد أيقونة السهم
import { useEffect, useState } from 'react';

function App() {
  const [ShowScrollBTN, setShowScrollBTN] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollBTN(true);
      } else {
        setShowScrollBTN(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // تنظيف الحدث عند إزالة المكون
  }, []);

  return (
    <div id="up" className="container">
      <Header />
      <div className="divider" />
      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />

      {/* زر التمرير إلى الأعلى مع الأيقونة */}
      <a style={{ opacity: ShowScrollBTN ? 1 : 0, transition: "1s" }} href="#up">
        <button className="icon-arrow-outline-up scroll2Top">
          <FontAwesomeIcon icon={faArrowUp} /> {/* إضافة أيقونة السهم */}
        </button>
      </a>
    </div>
  );
}

export default App;
