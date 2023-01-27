import React from 'react';
import './Nav.css';
import linkedInLogo from './img/logos/linkedin.png'
import githubLogo from './img/logos/github.svg'
import resume from './files/Logan_Campbell_Resume.pdf'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

class AppNavBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            navBarHeight: 0, //in px
        };
    }
    jumpTo(id, navBarHeight) {
        const element = document.getElementById(id);
        if(!element){
            console.log(id + " does not exist.");
            return;
        }
        const top = element.offsetTop;
        window.scrollTo({
            top: top-navBarHeight,
            left: 0, 
            behavior: 'smooth'
        });
    }

    GetNavHeight(){
        const nav = document.getElementById("navBar");
        return nav.offsetHeight;
    }
    render() {
        return ( 
            <Navbar className="navbar px-3" sticky="top" expand="md" id="navBar">
                    <Navbar.Brand className="section-link" ><button onClick={()=>this.jumpTo("home", this.GetNavHeight())}>
                    Logan Campbell
                    </button></Navbar.Brand>
                    <Navbar.Toggle aria-controls="main-navbar" aria-label="Toggle navigation"/>
                    <Navbar.Collapse id="main-navbar">
                    <Nav className="ms-auto me-auto">
                            <Nav.Item className="section-link">
                                <button onClick={()=> this.jumpTo("about", this.GetNavHeight())}>
                                    About
                                </button>
                            </Nav.Item>
                            <div className="vr"/>
                            <NavDropdown className="section-link" title="Projects">
                                <Nav.Item className="section-link">
                                    <button onClick={()=>this.jumpTo("projects", this.GetNavHeight())}>
                                        Projects
                                    </button>
                                </Nav.Item>
                                <NavDropdown.Divider />
                                {
                                    this.props.projects.map((element, index) => {
                                        return(
                                            <NavDropdown.Item key={index+1}>
                                                <button onClick={()=> this.jumpTo(element, this.GetNavHeight())}>
                                                    {element}
                                                </button>
                                            </NavDropdown.Item>
                                        );  
                                    })
                                }
                            </NavDropdown>
                            <div className="vr"/>
                            <Nav.Item className="section-link">
                                <button onClick={()=> this.jumpTo("contact", this.GetNavHeight())}>
                                    Contact
                                </button>
                            </Nav.Item>
                        
                    </Nav>
                    <Nav.Link className="contact-link px-1" rel="noreferrer" target="_blank" href={resume}>Resume</Nav.Link>
                    <a className="contact-link px-1" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/logan--campbell/"><img src={linkedInLogo} alt="LinkedIn Logo"/></a>
                    <a className="contact-link px-1" rel="noreferrer" target="_blank" href="https://github.com/Logan-Campbell"><img src={githubLogo} alt="Github Logo"/></a>
                    </Navbar.Collapse>
            </Navbar>
            
        );
    }
}

export default AppNavBar;