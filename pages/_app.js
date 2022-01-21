import { useEffect } from "react";
import Aos from "aos";
import "../styles/main.scss";
import "aos/dist/aos.css";
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
