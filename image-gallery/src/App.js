
import './App.css';
import Header from "./components/Header/Header.js";
import Images from "./components/Images/Images.js";
import Nav from "./components/Nav/Nav.js";
import imagesData from "./components/assets/imagesData.js";



function App() {
  console.log(imagesData);
  return (
     <div> 
      <Nav />
      <Header />
      <Images images={imagesData} />
      
    </div>
  );
}

export default App;
