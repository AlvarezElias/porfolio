import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'

export default class Header extends Component {
  render() {
    return (
        <Navbar sticky="top" bg="dark" variant="dark">
            <Navbar.Brand href="#home">
                <img
                    alt=""
                    src="/logo192.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                Elias Alvarez
            </Navbar.Brand>
        </Navbar>
    )
  }
}