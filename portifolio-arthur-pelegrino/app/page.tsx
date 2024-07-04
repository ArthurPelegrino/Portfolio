import "../styles/home.scss"

import { Experience } from "./components/experience/experience";
import { Header } from "./components/header/header";
import { Info } from "./components/information/information";
import { SocialBtns } from "./components/social-btns/social-btns";
import { EmailIcon } from "./components/icons/email-icon";


export default function Home() {
  return (
    <main className="container">
            <Header />
            <Experience />
            <Info />
            <div className="buttons">
              <SocialBtns />
            <div className="social">

            </div>
                <a href="mailto:arthurpelegrino97@icloud.com" className="btn-primary">
                  contact me
                  <EmailIcon />
                </a>

            </div>
    </main>
  );
}
