import React, { Component } from 'react';
import style from 'components/mainStyles.css';

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

export default class Main extends Component {
  render() {
    return (        
        <div class="container" >
            <img src="/avatar_pixel2.png" alt=""/>
            <div className="nombre">
                <h1>Elias Alvarez</h1>
                <h4>Software Developer</h4>
            </div>
            <br/>
            <Card className="bg-dark text-white">
                <Card.Header>CloudStudio</Card.Header>
                <Card.Body>
                    <Card.Title>Sr. Full Stack Developer</Card.Title>
                    <Card.Text>
                    Trabajo muy duro
                    </Card.Text>
                    <Button variant="primary">Referencia</Button>
                </Card.Body>
                <Card.Footer className="text-muted">2018 - Actually</Card.Footer>
            </Card>
            <br/>
            <Card className="bg-dark text-white">
                <Card.Header>BeanDigital</Card.Header>
                <Card.Body>
                    <Card.Title>Ssr. Full Stack Developer</Card.Title>
                    <Card.Text>
                    Trabajo muy duro 2
                    </Card.Text>
                    <Button variant="primary">Referencia</Button>
                </Card.Body>
                <Card.Footer className="text-muted">2017 - 2018</Card.Footer>
            </Card>

            <div> 
                <ul className="lista">
                <span style={{fontSize: "20px"}}>Educacion:</span>
                    <li>
                        Tecnicatura en programacion, UTN (en suspenso) 
                    </li>
                </ul> 
            </div>
        </div>
    )
  }
}