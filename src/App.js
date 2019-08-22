import React from "react";
import Header from "./components/Header";

import FooterTop from "./components/FooterTop";
import FooterBottom from "./components/FooterBottom";
import Grid from "./components/Grid";

function App() {
  return (
    <div>
      <Header />

      <body style={{ paddingTop: "50px" }}>
        <Grid />
      </body>

      <FooterTop />
      <FooterBottom />
    </div>
  );
}

export default App;
