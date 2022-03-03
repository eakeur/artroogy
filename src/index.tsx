import ReactDOM from 'react-dom';
import './index.css';
import { Home, HomeRoute } from './views/components/home/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navigator } from './views/components/navigator/navigator';
import { About, AboutRoute } from './views/components/about/about';
import { useFile } from './content/text';
import { GalleryRoute, PhotoGallery } from './views/components/gallery/gallery';
import { Footer } from './views/components/footer/footer';
import { ContactRoute } from './views/components/contact/contact';

const home = (<Home/>)
const about = (<About/>)
const gallery = (<PhotoGallery/>)

export const routes = [
  { name: 'BEM VINDO', path: HomeRoute, comp: home},
  { name: 'EU', path: AboutRoute, comp: about},
  { name: 'ATELIÊ', path: GalleryRoute, comp: gallery},
  { name: 'ASSESSORIA', path: ContactRoute, comp: gallery},
]

function App() {
  useFile('./texts.json')

  return (
    <BrowserRouter>
      <Navigator routes={routes}/>
      <Routes>
        {routes.map((r) => (
          <Route key={r.path} path={r.path} element={r.comp}></Route>
        ))}
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
