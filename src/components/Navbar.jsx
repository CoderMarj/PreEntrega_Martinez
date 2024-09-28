//import mi archivo css
import CartWidget from './CartWidget';
import ItemListContainer from './ItemListContainer';
import './Navbar.css';

const Navbar = ({saludo}) => {
  return (
    <>
      <header className="header">
        {/* links de navegación */}
        <nav>
          <ul className="nav-container">
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/">Productos</a>
            </li>
            <li>
              <a href="/">Caballero</a>
            </li>
            <li>
              <a href="/">Damas</a>
            </li>
            <li>
              <a href="/">Niños</a>
            </li>
          </ul>

        </nav>

        < CartWidget />
      </header>
      
      < ItemListContainer greeting = {saludo} />
    </>
  )
}

export default Navbar