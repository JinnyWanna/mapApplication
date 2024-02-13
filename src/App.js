import "./App.css";
import Search from "./components/Search";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />

      <div className="sidebar">
        <div className="sidebar-icon">1</div>
        <div className="sidebar-icon">2</div>
        <div className="sidebar-icon">3</div>
        <div className="sidebar-icon">4</div>
      </div>

      <Search />

      {/* c5bc5e9a942be7948330f8cd95de2520 */}

      {/* <Routes>
        <Route path = "/home"/>
        <Route path = "/home"/>
        <Route path = "/home"/>
      </Routes> */}
    </div>
  );
}

export default App;
