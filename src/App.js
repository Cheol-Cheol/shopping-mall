/*eslint-disable*/
import "./App.css";
import { useState } from "react";
import { Card } from "react-bootstrap";
import Navbar from "./components/Navbar";
import data from "./data";

function App() {
  let [cloth, setCloth] = useState(data);

  return (
    <div className="App">
      {/* TODO: router 설정 시 link 달아줘야 함 */}
      <h1 className="site-name">CHEOL CHEOL</h1>

      <Navbar />

      <div className="container">
        <div className="row">
          {cloth.map((item, idx) => {
            return (
              <div className="col-md-6 col-lg-3">
                <Card border="light">
                  <Card.Img
                    variant="top"
                    src={`img/${idx + 1}.jpeg`}
                    className="card-img"
                  />
                  <Card.Body>
                    <Card.Text>{item.title}</Card.Text>
                    <Card.Text>{item.price} 원</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
