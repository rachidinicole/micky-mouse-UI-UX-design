import React, { Component } from "react";
import { Container, Row, Col } from "bootstrap-4-react";

function Content() {
  return (
    <div>
      <Container className="main_content">
        <Row>
          <Col>
            <img src="workout.jpg" className="img-fluid" alt="" height="100%" />
          </Col>
          <Col>
            <table width="100%" className="table">
              <h3>Invoice</h3>
           
              <tr>
                <td>
                  <p># 2256445555</p>
                </td>
                <td>
                  <p>Date 05/06/2023</p>
                </td>
              </tr>
              <tr>
                <td>Nike dumbell Turbo</td>
                <td>$60.000</td>
              </tr>
              <tr>
                <td>Nike dumbell JDI LNTC </td>
                <td>$160.000</td>
              </tr>

              <tr>
                <td>Nike dumbell JDI LNTC </td>
                <td>$160.000</td>
              </tr>

              <tr>
                <td>Total Paid </td>
                <td>$285</td>
              </tr>

            </table>
            <button className="btn btn-success btn-lg"> Pay Now</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Content;
