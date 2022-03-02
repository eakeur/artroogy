import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Home, HomeRoute } from './components/home/home';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Navigator } from './components/navigator/navigator';
import { About, AboutRoute } from './components/about/about';
import { useFile } from './content/text';
import { GalleryRoute, PhotoGallery } from './components/gallery/gallery';
import { Footer } from './components/footer/footer';
import { ContactRoute } from './components/contact/contact';

const home = (<Home/>)
const about = (<About/>)
const gallery = (<PhotoGallery/>)

function App() {
  useFile('./texts.json')
  return (
    <>
      <HashRouter>
        <Navigator/>
        <Routes>
          <Route path={HomeRoute} element={home}/>
          <Route path={AboutRoute} element={about}/>
          <Route path={GalleryRoute} element={gallery}/>
          <Route path={ContactRoute} element={gallery}/>
        </Routes>
        <Footer/>
      </HashRouter>
    </>
  )
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
