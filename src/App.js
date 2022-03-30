import {logoPath} from "./data";
function App() {
  return (
    <div className="App">
      <img src={logoPath} style={{width:"40px", height:"30px"}}/>
      <h1>I am note-taking-app</h1>
    </div>
  );
}

export default App;
