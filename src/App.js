import "./App.css";
import React, { useState } from "react";
import "antd/dist/antd.css";
import { Card, Col, Row } from "antd";

function App() {
  const [user, setUser] = useState({ user: {}, active: false });

  const handleToggle = () => {
    console.log("handleToggle");

    fetch("https://api.github.com/users/CodeWithHarry")
      .then((res) => res.json())
      .then((data) => setUser({ user: data, active: !user.active }));
  };

  console.log(user.active);

  return (
    <div>
      {user.active === true && (
        <div>
          <div className="site-card-wrapper">
            <Row gutter={16}>
              <Col span={8}>
                <Card title="Avatar" bordered={false}>
                  <img src={user.user.avatar_url} />
                </Card>
              </Col>

              <Col span={8}>
                <Card title="Login" bordered={false}>
                  {user.user.login}
                </Card>
              </Col>

              <Col span={8}>
                <Card title="ID" bordered={false}>
                  {user.user.id}
                </Card>
              </Col>

              <Col span={8}>
                <Card title="E-mail" bordered={false}>
                  {user.user.email}
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      )}

      <button onClick={() => handleToggle()}> Mostrar/Esconder </button>
    </div>
  );
}

export default App;
