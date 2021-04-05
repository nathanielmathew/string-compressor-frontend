import logo from './logo.svg';
import './App.css';


function App() {
  function getDecompressed(e) {
    let url="https://pure-hollows-57300.herokuapp.com/decompress/";
    let str = document.getElementById("str").value;
    document.getElementById("result").textContent="Computing Decompressed String.. Please wait..";
    fetch(url+str)
    .then((resp) => resp.json())
    .then(resp => {
        // console.log(resp);
        document.getElementById("result").textContent="Decompressed string is "+resp.decompressed_str;
    })
    .catch(function() {
      document.getElementById("result").textContent="An Error Occured";
    });
  }
  function getCompressed(e) {
    let url="https://pure-hollows-57300.herokuapp.com/compress/";
    let str = document.getElementById("str").value;
    document.getElementById("result").textContent="Computing Compressed String.. Please wait..";
    fetch(url+str)
    .then((resp) => resp.json())
    .then(resp => {
        // console.log(resp);
        document.getElementById("result").textContent="Compressed string is "+resp.compressed_str;
    })
    .catch(function() {
      document.getElementById("result").textContent="An Error Occured";
    });
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <input id="str"></input>
          <br />
          <button onClick={getCompressed}>Compress</button>
          <button onClick={getDecompressed}>Decompress</button>
        </p>
        <h2 id="result">
          Enter the Compressed/Uncompressed String
        </h2>
      </header>
    </div>
  );
}

export default App;
