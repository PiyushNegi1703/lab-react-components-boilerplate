import './App.css';
import lake from "./image/lake.JPG";
import Footer from './components/GallaryFooter';
import Gallery from './components/GalleryBody';
import Header from './components/GalleryHeader';

const imageData = [
  {
    id:1,
    img:lake 
  },
  {
    id:2,
    img:lake
  },
  {
    id:3,
    img:lake
  },
  {
    id:4,
    img:lake
  }
]

function App() {
  return (
    <div>
      <Header />

      <Gallery imageData = {imageData}/>

      {/* adding footer component */}
      <Footer/> 
    </div>
  )
}

export default App;
