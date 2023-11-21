import { createContext,useState,useEffect } from 'react';
import Navbar from '../src/components/Navbar'
import FilterFeatures from './components/FilterFeatures';
import PersonsDetailsTable from './components/PersonsDetailsTable';
import PagesFeature from './components/PagesFeature';
// import biodata from './BioData.json'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './styles/styles.scss'

export const DataContext = createContext();

const App= () => {
  const [studentData, setStudentData] = useState([]);

  useEffect(() =>{
    const getData = async ()=>{
      try{
        const response = await fetch('Biodata.json');
        const data =await response.json()
        setStudentData(data)
        // console.log(data)
      }
      catch(error){
        console.log("error is:",error)
      }
    }
    getData()
  },[])

  return (
    <DataContext.Provider value={studentData}>
        <Navbar/>
        <FilterFeatures/>
        <PersonsDetailsTable/>
        <PagesFeature/>
    </DataContext.Provider>
  );
}

export default App;
