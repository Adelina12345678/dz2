
import './App.css';
import MainPage from "./pages/MainPage/MainPage";

function App() {
  function Header (){
    return (
        <div>
          <h2>Header</h2>
            <Tittle/>
        </div>
    )
  }
  function Footer (){
    return (
        <div>
          <h2>Footer</h2>
            <Tittle/>
        </div>
    )
  }
  function Content () {
    return (
        <div>
          <h2>Content</h2>
            <Tittle/>
        </div>
    )
  }
  function Tittle () {
    return (
        <div>
          <h2>Tittle</h2>
        </div>
    )
  }
  return (
    <div className="App">
        <Header/>
        <Footer/>
        <Content/>
        <p>-------------DZ2</p>
        <MainPage/>
    </div>
  );
}

export default App;
