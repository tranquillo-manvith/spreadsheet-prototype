import TopBar from "./components/TopBar";
import Row from "./components/Row";

function App() {
  return (
    <div className="w-[1440px] mx-auto border">
      <nav>
        <TopBar />
        <Row />
      </nav>
    </div>
  );
}

export default App;
