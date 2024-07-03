import { Header } from "./components/header/header";

import "../styles/home.scss"

export default function Home() {
  return (
    <main className="container">
            <Header />
            <div className="Experience">
              <h3>Experience</h3>
              <p>Texto</p>
              <div className="experience-time">

              </div>
              <div className="infos">
                <h3>Languages</h3>
                <div className="languages-info"> 
                  <span>🇺🇸 EN - Fluent</span>
                  <span>🇧🇷 PT-BR Native Speaker</span>
                  <span>🇪🇸 EN - Advanced</span>
                </div>
                <h3>Education</h3>
                <div className="educational-info">
                  <span></span>
                  <span></span>
                </div>
                <span></span>
              </div>
              <div className="buttons">
                <div className="social"></div>
                <button>contact me</button>
              </div>

            </div>
    </main>
  );
}
