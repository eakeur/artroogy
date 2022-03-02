import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Home, HomeRoute } from './components/home/home';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { Navigator } from './components/navigator/navigator';
import { About, AboutRoute } from './components/about/about';
import { useFile } from './content/text';
import { GalleryRoute, PhotoGallery } from './components/gallery/gallery';
import { Footer } from './components/footer/footer';
import { ContactRoute } from './components/contact/contact';
import { CSSTransition, TransitionGroup} from 'react-transition-group';

const home = (<Home/>)
const about = (<About/>)
const gallery = (<PhotoGallery/>)

export const routes = [
  { name: 'INÍCIO', path: HomeRoute, comp: home},
  { name: 'SOBRE MIM', path: AboutRoute, comp: about},
  { name: 'GALERIA', path: GalleryRoute, comp: gallery},
  { name: 'CONTATO', path: ContactRoute, comp: gallery},
]

function App() {
  useFile('./texts.json')

  return (
    <>
      <Navigator routes={routes}/>
      <Routes>
        {routes.map((r) => (
          <Route key={r.path} path={r.path} element={r.comp}></Route>
        ))}
      </Routes>
      <Footer/>
    </>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, rootElement);
reportWebVitals();
