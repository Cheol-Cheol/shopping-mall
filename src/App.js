/*eslint-disable*/
import "./App.css";
import { Nav } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      {/* TODO: router 설정 시 link 달아줘야 함 */}
      <h1 className="site-name">CHEOL CHEOL</h1>
      {/* FIXME: NavBar */}
      <Nav className="justify-content-center" activeKey="best">
        <Nav.Item>
          {/* TODO: Nav.Link - router 설정 시 router로 관리해야 함 */}
          <Nav.Link eventKey="best" href="/" className="nav">
            BEST
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/outwear" className="nav">
            OUTWEAR
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/top" className="nav">
            TOP
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/bottom" className="nav">
            BOTTOM
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/user" className="nav">
            <i class="fa-regular fa-user"></i>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/cart" className="nav">
            <i class="fa-solid fa-cart-shopping"></i>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/search" className="nav">
            <i class="fa-solid fa-magnifying-glass"></i>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default App;
