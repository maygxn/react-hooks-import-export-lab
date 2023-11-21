import React from "react";

// define username and city in global scope
import { username, city } from "/home/truong19/Development/code/phase-2/react-hooks-import-export-lab/src/data/user.js"

function Home() {
  return (
    <div id="home">
      <h1>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home;