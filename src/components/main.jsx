import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion'

import style from 'components/mainStyles.css';
import AccordionToggle from 'react-bootstrap/AccordionToggle';



function FadeInSection(props) {
    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef();
    React.useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        observer.observe(domRef.current);
    }, []);
    return (
        <div
            className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
            ref={domRef}
        >
            {props.children}
        </div>
    ); 
}


export default class Main extends Component {


  render() {
    return (        
        <div class="container" >
            <img src="/avatar_pixel2.png" alt=""/>
            <div className="nombre">
                <h1>Elias Alvarez</h1>
                <h5>Software Developer</h5>
            </div>
            <br/>
            
            <Accordion defaultActiveKey="0">
                <Card className=" text-white shadow rounded">
                    <Accordion.Toggle variant="" eventKey="0" className="toggleCustom">
                        <Card.Header><h3>Experiencia Laboral</h3></Card.Header>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className="bodyCardMain">
                            <FadeInSection>
                                <Accordion defaultActiveKey="0">
                                    <Card className="bg-dark text-white shadow rounded">
                                    <Accordion.Toggle variant="link" eventKey="0" className="toggleCustom">
                                        <Card.Header>
                                            CloudStudio 2018 - Actualidad
                                        </Card.Header>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>
                                            <Card.Title>Sr. Full Stack Developer</Card.Title>
                                            <Card.Text className="cuerpito">
                                            <span>Me desempeño cómo desarrollador web full stack en una empresa dedicada a IoT (internet of things),
                                            Siendo el principal responsable de una plataforma de telegestion para luminarias inteligentes.
                                            <br/>Desarrollo en .Net 4.5 ( C# ) y angular 2+. Hago mantenimiento y refactor del código (y procesos),
                                                implemento nuevas funcionalidad y creo nuevos servicios web.
                                                <br/>Ademas de desarrollar realizo: Administración de WindowServer en conjunto con SQLServer
                                                (servidores de AWS), me encargo de los despliegues a producción, analizo requerimientos, creo
                                                en conjunto con los desarrolladores del hardware maneras de realizar comunicaciones entre los
                                                dispositivos y la plataforma web. Creo reportes, realizo test unitarios y creación de servicios chicos en .Net Core, entre otras cosas.
                                            </span>
                                            </Card.Text>
                                            <Button variant="primary">Referencia</Button>
                                        </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </FadeInSection>
                            <br/>
                            <FadeInSection>
                                <Accordion defaultActiveKey="0">
                                    <Card className="bg-dark text-white">
                                        <Accordion.Toggle variant="" eventKey="0" className="toggleCustom">
                                            <Card.Header>BranDigital 2017 - 2018</Card.Header>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>
                                                <Card.Title>Ssr. Full Stack Developer 2017 - 2018</Card.Title>
                                                <Card.Text className="text-center">
                                                <span className="text-center">Me desempeñe cómo desarrollador web PHP (Codeigniter - MVC) principalmente, siendo parte
                                                    también de proyectos en C# (webform, ASP.NET 4.5/MVC).
                                                    Sumando el desarrollo front-end con tecnologías como jquery y angular 2+, par ala base de datos
                                                    utilice mysql.
                                                    Mis responsabilidades consistían en ser el desarrollador principal en proyectos .net y realizar
                                                    varias tareas en los proyectos php de la empresa, siendo esta del rubro publicidad digital.
                                                </span>
                                                </Card.Text>
                                                <Button variant="primary">Referencia</Button>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </FadeInSection>
                            <br/>
                            <FadeInSection>
                                <Accordion defaultActiveKey="0">
                                    <Card className="bg-dark text-white">
                                        <Accordion.Toggle variant="" eventKey="0" className="toggleCustom">
                                            <Card.Header>Concejo de la magistratura 2016 - 2017</Card.Header>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>
                                                <Card.Title>Ssr. Full Stack Developer</Card.Title>
                                                <Card.Text>
                                                <span>
                                                    Me desempeñe cómo desarrollador web full stack en el concejo de la magistratura, perteneciente al poder judicial.
                                                    Principalmente trabaje con PHP (codeigniter) y .NET en la realización de sitios institucionales,
                                                    herramientas, tareas programadas y aplicaciones de media complejidad.
                                                </span>
                                                </Card.Text>
                                                <Button variant="primary">Referencia</Button>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </FadeInSection>
                            <br/>
                            <FadeInSection>
                                <Accordion defaultActiveKey="0">
                                    <Card className="bg-dark text-white">
                                        <Accordion.Toggle variant="" eventKey="0" className="toggleCustom">
                                            <Card.Header>Plataforma 10 2015 - 2016</Card.Header>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>
                                                <Card.Title>Ssr. Full Stack Developer</Card.Title>
                                                <Card.Text>
                                                <span>
                                                    He trabajado sobre una aplicación .Net MVC en C#, junto a jquery.
                                                    He utilizado Sql server (con Linq to SQL y EF como ORM, depende el proyecto). Para las vistas
                                                    realizadas utilice Razor y Jquery (sobre html y css).
                                                    Para test unitarios/integración utilice soap-ui, NUnit, automocker y selenium. Consumo de
                                                    WebServices (SOAP, REST) para integración con gateways de pago.
                                                    Creación de servicios utilizando WCF para la comunicación entre los diferentes micro servicios.
                                                    También he usado y aprendido patrones de diseño (entre ellos MVC, inyección de dependencias
                                                    con Ninject, singleton y factory). Uso de migraciones (fluent migration).
                                                </span>
                                                </Card.Text>
                                                <Button variant="primary">Referencia</Button>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </FadeInSection>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            
            <br/>
            
            <Accordion defaultActiveKey="0">
                <Card className="bg-dark text-white shadow rounded">
                    <Accordion.Toggle variant="" eventKey="0" className="toggleCustom">
                        <Card.Header><h3>Educacion</h3></Card.Header>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className="bodyCardMain">
                            <FadeInSection>
                                <Accordion defaultActiveKey="0">
                                    <Card className="bg-dark text-white">
                                        <Accordion.Toggle variant="" eventKey="0" className="toggleCustom">
                                            <Card.Header><h4>Tecnicatura en programacion, UTN 2012 - [En suspenso]</h4></Card.Header>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>
                                                <Card.Text className="text-center">
                                                    <span className="text-center">
                                                        Carrera perteneciente a la lucenciatura en sistemas informaticos. 
                                                        <br/>
                                                        20  materias, 15 aprobadas. <br/> 
                                                        Todas las materias correspondientes a programacion estan aprobadas.<br/> 
                                                        Quedandome pendientes las correspondiente a las matematicas.
                                                    </span>
                                                </Card.Text>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>   
                            </FadeInSection>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            <br/>

            <Accordion defaultActiveKey="0">
                <Card className="bg-dark text-white shadow rounded">
                    <Accordion.Toggle variant="" eventKey="0" className="toggleCustom">
                        <Card.Header><h3>Proyectos</h3></Card.Header>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className="bodyCardMain">
                            <FadeInSection>
                                <Accordion defaultActiveKey="0">
                                    <Card className="bg-dark text-white">
                                        <Accordion.Toggle variant="" eventKey="0" className="toggleCustom">
                                            <Card.Header><h4>Formulario autos Angular 8 </h4></Card.Header>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>
                                                <Card.Text className="text-center">
                                                    <img/>imagen - click repo
                                                    <br/>Simple abm para poder cargar autos, <br/>utilizando el framwork angular, version 8 en frontend
                                                </Card.Text>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>   
                            </FadeInSection>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    )
  }
}