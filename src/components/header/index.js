import { h } from "preact";
import { Link } from "preact-router/match";

const Header = () => (
  <header className="header">
    <div className="info">
      <h1>Jakob Løkke Madsen</h1>

      <div className="description">
        <div>Freelance senior frontend developer</div>
        <div>Aarhus, Denmark</div>
      </div>

      <div className="contact">
        <div>
          <a href="callto:+45 26 65 25 68">+45 26 65 25 68</a>
        </div>
        <div>
          <a href="mailto:jakob@jakobloekkemadsen.com">
            jakob@jakobloekkemadsen.com
          </a>
        </div>
        <div>
          <a href="https://linkedin.com/in/jakobloekkemadsen">
            linkedin.com/in/jakobloekkemadsen
          </a>
        </div>
      </div>
    </div>
    <div className="photo">
      <img
        src="/assets/PORTRAET_074_cropped_small.jpg"
        alt="Jakob Løkke Madsen"
      />
    </div>
  </header>
);

export default Header;
