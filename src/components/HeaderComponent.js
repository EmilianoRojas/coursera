import React, { Component, Fragment } from 'react'
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

export default class HeaderComponent extends Component {
  render() {
    return (
      <Fragment>
        <Navbar dark>
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Jumbotron>
          <div className="contain">
            <div className="row row-header">
              <div className="col-12 col-sm-6">
                <h1>Ristorante pepa</h1>
                <p>We Take inspiration from the pepa's</p>
              </div>
            </div>
          </div>
        </Jumbotron>
      </Fragment>
    )
  }
}


