import ReactDOM from 'react-dom';
import './index.css';
import { Me, MeRoute, Studio, StudioRoute } from './views/pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './views/components/footer/footer';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { Home } from './home';
import { Contacting } from './contacting';
import { contacting } from './data';

const me = (<Me />)
const studio = (<Studio />)

export const routes = [
  {
    name: 'BEM VINDO',
    path: "/",
    comp: (
      <Home
        pages={[
          {
            description: "Ateliê",
            image: "/assets/006.jpg",
            href: StudioRoute,
            color: "#634E3E",
          },
          {
            description: "Ygor Rodrigues",
            image: "/assets/001.jpg",
            href: "/",
            color: "grey",
          },
          {
            description: "Contato",
            image: "/assets/007.jpg",
            href: "/contato",
            color: "#022D79",
          }
        ]}
      />
    )
  },
  {
    name: 'EU',
    path: MeRoute,
    comp: me,
  },
  {
    name: 'ATELIÊ',
    path: StudioRoute,
    comp: studio,
  },
  {
    name: 'ASSESSORIA',
    path: "/contato",
    comp: (
      <Contacting
        contacts={contacting.contacts}
        agency={contacting.agency}
        social={contacting.social}
      />
    )
  },
]

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((r) => (
          <Route key={r.path} path={r.path} element={r.comp}></Route>
        ))}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

serviceWorkerRegistration.register();
const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);



