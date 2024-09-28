import carrito from "../assets/carrito-rjo.png"

const CartWidget = () => {
  return (
    <>
        {/* carrito */}
        <div className="logo-container">
          <img src={carrito} alt="carrito" />
          <div className='texto-encima'>5</div>
          
        </div>
    </>
  )
}

export default CartWidget