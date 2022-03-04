import ReactDOM from 'react-dom';
import './index.css';
import { Home, HomeRoute, Me, MeRoute } from './views/pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navigator } from './views/components/navigator/navigator';
import { useFile } from './content/text';
import { GalleryRoute, PhotoGallery } from './views/components/gallery/gallery';
import { Footer } from './views/components/footer/footer';
import { Counsel, CounselRoute } from './views/pages/counsel';

const home = (<Home/>)
const me = (<Me/>)
const gallery = (<PhotoGallery/>)
const counsel = (<Counsel/>)

export const routes = [
  { name: 'BEM VINDO', path: HomeRoute, comp: home},
  { name: 'EU', path: MeRoute, comp: me},
  { name: 'ATELIÊ', path: GalleryRoute, comp: gallery},
  { name: 'ASSESSORIA', path: CounselRoute, comp: counsel},
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
