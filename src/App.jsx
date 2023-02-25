import './App.scss'
import Pet from './Pet';

function App() {

  return (
   <div>
    <h1>Hello world</h1>
    <Pet name="Luna" animal="dog" breed="Havanse"></Pet>
    <Pet name="Pepper" animal="bird" breed="Cockatiel"></Pet>
    <Pet name="Doink" animal="cat" breed="Mixed"></Pet>
   </div>
  )
}

export default App
