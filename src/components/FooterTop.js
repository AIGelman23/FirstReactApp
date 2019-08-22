import React from "react";

class FooterTop extends React.Component {
  render() {
    return (
      <footer>
        <ul>
          <li>
            <div className="link-holder">
              <h4>Company</h4>
              <div className="link">
                <a href="Asses.html">About</a>
              </div>
              <div className="link">
                <a href="Asses.html">Jobs</a>
              </div>
            </div>
          </li>
          <li>
            <div className="link-holder">
              <h4>Communities</h4>
              <div className="link">
                <a href="Asses.html">Coders</a>
              </div>
              <div className="link">
                <a href="FindEntries.html">Developers</a>
              </div>
              <div className="link">
                <a href="Objective.html">Investors</a>
              </div>
            </div>
          </li>
          <li>
            <div className="link-holder">
              <h4>Useful Links</h4>
              <div className="link">
                <a href="/">Latest Updates</a>
              </div>
              <div className="link">
                <a href="/">Upcoming Events</a>
              </div>
            </div>
          </li>
        </ul>
      </footer>
    );
  }
}

export default FooterTop;
