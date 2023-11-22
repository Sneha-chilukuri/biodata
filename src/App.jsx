import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/styles.scss";
import NavBar from "./components/NavBar";
import SubTitle from "./components/SubTitle";
import data from "./data.json";
import { createContext } from "react";
import FormTable from "./components/FormTable";
export const Apidata = createContext();

function App() {
  return (
    <div className="biodata-container">
      <Apidata.Provider value={{ data }}>
        <NavBar />
        <div className="biodata-content-container">
          <SubTitle />
          <FormTable/>
        </div>
      </Apidata.Provider>
    </div>
  );
}

export default App;
