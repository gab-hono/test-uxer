import './App.css'
import Button from './components/Button/Button'
import { CheckIcon } from './components/Icons/CheckIcon'
import { FilterIcon } from './components/Icons/FilterIcon'

function App() {

  return (
    <>
    <ul>
      <h1>Liste des Boutons</h1>
      <li>
        <h2>Bouton primaire avec "Check" icon à gauche</h2>
        <Button
          variant='primary'
          size='m'
          leadingIcon = {<CheckIcon />}
          >
            Valider
        </Button>   
      </li>

      <li>
        <h2>Bouton secondaire avec "filter" icon à gauche et badge avec numéro 3</h2>
        <Button 
          variant='secondary'
          size='m'
          leadingIcon = {<FilterIcon />}
          badge={3}>
            Filter
          </Button>
      </li>
    </ul>
    </>

  )
}

export default App