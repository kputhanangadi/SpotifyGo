import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
        <DestnInput /> <br></br><br></br>
        <PlaylistBtn />
      </header>
    </div>
  );
}

const LoginWebpge = () => {};

const DestnInptWebpge = () => {};

const DestnInput = () => {
  return (
  <form action="https://canvas.ubc.ca/">
    <input class="Input-place" type="text" placeholder="Enter destination"></input>
  </form>
  );
}

const PlaylistBtn = () => {
  return <button id="GenPL">GENERATE PLAYLIST</button>;
};

const ChckBoxWebpge = () => {};

const NewPlaylistWebpge = () => {}; // May not need this as a separate webpage

// Make a function that shows an input form or textbox with current address
// make a input form for destination
// make a cool button

// #474954 -- grey
// #06D6A0 -- green

export default App;
