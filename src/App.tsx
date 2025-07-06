import TopBar from "./components/TopBar";
import Row from "./components/Row";
import SpreadsheetTable from "./components/SpreadsheetTable";

function App() {
  return (
    <div className="w-[1440px] mx-auto">
      <nav>
        <TopBar />
        <Row />
        <SpreadsheetTable />
      </nav>
    </div>
  );
}

export default App;
