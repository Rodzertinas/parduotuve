import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { useShoppingCart } from "../context/ShoppingCartContext"


export function Navbar() {
    const {openCart, cartQuantity} = useShoppingCart()
    return (
        <NavbarBs sticky="top" className="bg-white shadow-sm mb3">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link to="/" as={NavLink}>
                    Pagrindinis
                    </Nav.Link>
                    <Nav.Link to="/store" as={NavLink}>
                      Parduotuvė
                    </Nav.Link>
                    <Nav.Link to="/about" as={NavLink}>
                      Apie
                    </Nav.Link>
                </Nav>
                {cartQuantity > 0 && (
                <Button 
                onClick={openCart}
                style={{ width: "3rem", height: "3rem", position: "relative" }}
                    variant="outline-primary"
                    className="rounded-circle"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="feather feather-shopping-cart">
                        <circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                    <div className="rounded-circle bg danger d-flex justify-content-center
                    alingn-items-center" style={{transform:"translate(-25%. -25%)" ,background:"red", border:"1px solid white" , color: "white", width: "1.5rem", height: "1.5rem", position: "absolute", bottom: "0", right: "0" }}>
                    {cartQuantity}
                  
                    </div>
                
                </Button>
                    )}
            </Container>
        </NavbarBs>
    )
}