import ReactDOM from 'react-dom';
import './index.css';
import { Counsel, CounselRoute, Home, HomeRoute, Me, MeRoute, Studio, StudioRoute } from './views/pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navigator } from './views/components/navigator/navigator';
import { useFile } from './content/text';
import { Footer } from './views/components/footer/footer';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';


const home = (<Home/>)
const me = (<Me/>)
const studio = (<Studio/>)
const counsel = (<Counsel/>)

export const routes = [
  { name: 'BEM VINDO', path: HomeRoute, comp: home},
  { name: 'EU', path: MeRoute, comp: me},
  { name: 'ATELIÊ', path: StudioRoute, comp: studio},
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

serviceWorkerRegistration.register();
const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
