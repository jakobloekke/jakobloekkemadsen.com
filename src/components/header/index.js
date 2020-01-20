import { h } from "preact";
import { Link } from "preact-router/match";

const Header = () => (
  <header className="header">
    <div className="info">
      <h1>Jakob Løkke Madsen</h1>
      <div className="description">Digital product creator</div>

      <div className="contact">
        <p>
          <a href="callto:+45 26 65 25 68">+45 26 65 25 68</a>
        </p>
        <p>
          <a href="mailto:jakob@jakobloekkemadsen.com">
            jakob@jakobloekkemadsen.com
          </a>
        </p>
        <p>
          <a href="https://linkedin.com/in/jakobloekkemadsen">
            linkedin.com/in/jakobloekkemadsen
          </a>
        </p>
      </div>
    </div>
    <div className="photo">
      <img src="/assets/PORTRAET_074_cropped_small.jpg" alt="Jakob Løkke Madsen" />
    </div>
  </header>
);

export default Header;
