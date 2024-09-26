//import mi archivo css
import './Navbar.css';
import carrito from "../assets/buying-48.png"


const Navbar = () => {
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
              <a href="/">Blog</a>
            </li>
            <li>
              <a href="/">Contacto</a>
            </li>
          </ul>

        </nav>

        {/* carrito */}
        <div className="logo-container">
          <img src={carrito} alt="logo" />
        </div>

      </header>
    </>
  )
}

export default Navbar