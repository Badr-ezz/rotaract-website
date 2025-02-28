import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import './App.css'
import Companies from "./components/companies/Companies";
import Residencies from "./components/residencies/Residencies";
import Values from "./components/values/Values";
import Contactus from "./components/contactus/Contactus";

function App() {
  return (
    <div className="App">
      <div>
        <div className="pink-gradient"/>
        <Header /> 
        <Hero />
      </div>
      <Companies />
      <Residencies/>
      <Values />
      <Contactus />
    </div>
  );
}

export default App;
