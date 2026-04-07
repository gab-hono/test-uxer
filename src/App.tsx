// src/App.tsx

import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Button from './components/Button/Button'
import ButtonGroup from './components/Button/ButtonGroup'
import Test from './pages/Test'
import { CheckIcon, TrashIcon, SlidersHorizontalIcon, GearSixIcon } from "@phosphor-icons/react/dist/ssr"


function App() {
  return (
    <Routes>

      <Route path="/" element={
        <main>
          <h1>Démo des composants</h1>

          <nav aria-label="Navigation principale">
            <Link to="/test">
              <Button variant="secondary" size="m">
                Voir tous les boutons
              </Button>
            </Link>
          </nav>

          <section aria-labelledby="exemples-titre">
            <h2 id="exemples-titre">Exemples de boutons</h2>

            <div>
              <h3>Bouton primaire avec icône de validation</h3>
              <Button variant="primary" size="m" leadingIcon={<CheckIcon />}>
                Valider
              </Button>
            </div>

            <div>
              <h3>Bouton secondaire avec filtre et badge</h3>
              <Button variant="secondary" size="m" leadingIcon={<SlidersHorizontalIcon />} badge={3}>
                Filtrer
              </Button>
            </div>

            <div>
              <h3>Bouton groupe destructif</h3>
              <ButtonGroup variant="destructive" size="m" addonIcon={<GearSixIcon />}>
                Supprimer
              </ButtonGroup>
            </div>

            <div>
              <h3>Bouton icône seul (suppression)</h3>
              <Button
                variant="secondary"
                iconOnly
                leadingIcon={<TrashIcon />}
                aria-label="Supprimer"
              />
            </div>
          </section>
        </main>
      } />

      <Route path="/test" element={<Test />} />

    </Routes>
  )
}

export default App