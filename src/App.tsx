import TopBar from "./components/TopBar";
import Row from "./components/Row";
import SpreadsheetTable from "./components/SpreadsheetTable";
import TitleRow from "./components/TitleRow";

function App() {
  return (
    <div className="w-[1440px] mx-auto">
      <nav>
        <TopBar />
        <Row />
        <SpreadsheetTable />
        <div className="fixed bottom-0 left-0 w-full z-50">
          <TitleRow />
        </div>
      </nav>
    </div>
  );
}

export default App;
