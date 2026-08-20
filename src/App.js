import React, { useState } from 'react';
import ReactPlayer from 'react-player';
//import './App.css';
import AppNavBar from './Nav.js';
import githubLogoWhite from './img/logos/github-white.svg'
import linkedInLogo from './img/logos/linkedin.png'
import FWLTAnalytics from './img/projects/FWLT-analytics.png'
import FWLTRolesTable from './img/projects/FWLT-roles-table.png'
import FWLTEditingPermissions from './img/projects/FWLT-editing-permissions.png'
import GroupChat from './img/projects/GroupChat.gif'
import LoginPM from './img/projects/LoginPM.gif'
import easyWin from './img/projects/ms-easy-win.png'
import expertLose from './img/projects/ms-expert-lose.png'
import pongGame from './img/projects/pong-game.png'
import tetradeMarathon from './img/projects/tetrade-marathon.png'
import tetradeVersus from './img/projects/tetrade-versus.png'

import resume from './files/Logan_Campbell_Resume.pdf'

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Collapse from 'react-bootstrap/Collapse';

function App() {
  const projects = ["Tetrade", "FWLT", "Networked Pong", "Chat", "Minesweeper"]
  const [open, setOpen] = useState(false);
  const linkImageButton = (src, image, alt, buttonText) =>{
    return (
      <Button className="link-button" rel="noreferrer" target="_blank" href={src}>{buttonText}<img src={image} alt={alt}/></Button>
    );
  };

  const linkIconButton = (src, iconClass, buttonText) =>{
    return (
      <Button className="link-button" rel="noreferrer" target="_blank" href={src}>
        {buttonText}
        <span className="icon oi oi-file" title={buttonText + " icon"} aria-hidden="true"></span>
      </Button>
    );
  };

  return (
    <div className="App">
      <AppNavBar projects={projects}/>
        <Container className="section home-page" id="home" fluid>
          <Row className="align-items-center">
            <Col className="title" lg={true}>
              <h5>Hi I'm</h5>
              <h1>Logan Campbell</h1>
              <h5>A Software/Web Developer</h5>
            </Col>
            <Col className="terminal" lg={true}>
              
            </Col>
          </Row>
        </Container>
      <div className="background-container"><div className="scrolling-background"></div></div>
      <div className="section " id="about">
        <div className="text">
          <h2>About</h2>
          <p>
          I'm Logan Campbell, a Bachelor of Computer Information Systems graduate from Okanagan College. 
          I am a software developer, most interested in standalone software, though I also enjoy full-stack web development. I also dabble 
          in game development from time to time.    
          </p>
          <div className="button-holder">
              {linkIconButton(resume, "file", "Resume")}
          </div>
        </div>
      </div>
      <div className="section" id="projects">
        <div className="text">
          <h2>Projects</h2>
          <div className="project" id="Tetrade">
            <h4>Tetrade: PlayStation Homebrew</h4>
            <p>
              <em>Tetrade</em> is a Tetris clone for the original PlayStation (released in 1994) and is fully playable in an emulator and on real PlayStation hardware. 
              The game can be played solo or with two players, including a "versus" head-to-head mode, and plays very similarly to modern Tetris games. <em>Tetrade</em> is built 
              using the community-created and open-source SDK <a href="https://github.com/Lameguy64/PSn00bSDK" rel="noreferrer" target="_blank">PSn00bSDK</a>, 
              which is a set of libraries for interacting with the console's BIOS/hardware. <em>Tetrade</em> was created as a personal project in 2024.
            </p>
            <p>
              In recent years, there has been a resurgence in "retro"-styled games mainly focused on the N64 and PlayStation. I find this style 
              fascinating even though I have no nostalgia for it. As a result, I thought it would be fun to not only make 
              a game in the style of the original PlayStation but one for it. This project served as a way to learn the hardware of the system, improve 
              my C programming skills, <em>finish</em> more projects, and create a stepping stone for 3D games on the PlayStation. Overall, it was a 
              fun opportunity to dive into lowish-level software development.
            </p>
            <h5>Technologies Used</h5>
            <ul>
              <li>C</li>
              <li>cmake</li>
            </ul>
            <div className="button-holder">
              {linkImageButton("https://github.com/Logan-Campbell/Tetrade", githubLogoWhite, "Github Logo", "Github", "Github")}
            </div>
            <div className="image-holder">
              <p>
                  Marathon Mode: allows 1 or 2 players to play simultaneously and independently.
              </p>
              <img src={tetradeMarathon} alt="Gameplay of marathon mode"/>
              <p>
                  Versus Mode: 2-player head-to-head.
              </p>
              <img src={tetradeVersus} alt="Gameplay of versus mode"/>
            </div>
          </div>
          <div className="project" id="FWLT">
            <h4>Flexible Work Location Tool</h4>
            <h5>What The Project Is</h5>
            <p>
              The Flexible Work Location Tool (FWLT) was an application built for Interior Health as part of my
              capstone project for Okanagan College. FWLT was needed to streamline the process of handling forms submitted 
              by employees, which was previously done by sharing PDF files or physical copies. The forms were related to 
              applying to work from home. Employees would fill out forms and submit them through the application, then managers
              could review, approve, or deny them. The forms took a data-driven approach, meaning all the 
              questions and the answers were stored in a relational database instead of being hard-coded in the front end.
            </p>
            <p>
              Admins of the application could use a custom What You See Is What You Get (WYSIWYG) form builder for creating new forms that can
              then be filled out by users. 
            </p>
            <p>
              HR users could view various analytics related to the application, like form approval rate, average manager response time, and
              employee workplace by province.
            </p>
            <h5>Technologies Used</h5>
            <ul>
              <li>
                Blazor Server
              </li>
              <li>
                C#, HTML, CSS
              </li>
              <li>
                Entity Framework
              </li>
              <li>
                Microsoft SQL Server
              </li>
              <li>
                Tableau
              </li>
            </ul>
            <h5>My Contribution</h5>
            <p>
              One of the major parts I've worked on was the form builder WYSIWYG. This included breaking down the problem into smaller manageable chunks, 
              building out a general structure, and actually programming a large portion of the component.
            </p>
            <h5>What I've Learned</h5>
            <Button
              onClick={() => setOpen(!open)}
              aria-controls="FWLT-learned-text"
              aria-expanded={open}
              className="expand-btn"
            >
              {((open) ? "Close" : "Expand")}
            </Button>
            <Collapse in={open}>
              <div id="FWLT-learned-text">
                <p>
                  The project was developed as part of a group of ten others using Agile, Scrum, and some Extreme Programming methodologies. 
                  During the project, I have learned a ton about working with large groups, communication, software development, and software engineering.
                </p>
                <p>
                  How important it is to ask for help when stuck (especially from those with more experience) and put aside a bit of ego for the success 
                  of the project. While working with others in XP pairs, learning to effectively communicate ideas back and forth, read other's code live
                  and provide feedback and assistance take the feedback as well. Effectively discuss and resolve disagreements in a friendly productive manner.
                </p>
                <p>
                  Lots about developing software in an Agile and Scrum approach, learning to self manage and being proactive enough to take on new tasks. Discussing 
                  what we have done, will do etc. almost every day. Meeting with clients regularly to gain a better understanding of the kind of
                  software that they need, and applying their feedback to our project.
                </p>
                <p>
                  The critical role of version control, and being strict on uploading new features or fixes to their own branch. Submitting and reviewing pull
                  requests to have more eyes so that hopefully no bugs slip through. I've read a lot of code reviewing my peers' work and found it
                  incredibly useful for understanding the project well, but also as practice for being able better read and learn from others' code.
                </p>
                <p>
                  Since others will be reading my code as well I've learned to better write self-documenting code and better descriptive comments
                  too, for more complex sections. I've also got to write tons of documentation for the project (which I can't show, unfortunately),
                  and gotten lots of practice writing clear and in-depth explanations of the software.
                </p>
                <p>
                  In short, I have learned how better work and communicate in large groups, applying agile methodologies, and have become a better
                  programmer and software developer in general.
                </p>
              </div>
            </Collapse>
            <div className="image-holder">
              <p>
                Form Builder in action.
              </p>
              <ReactPlayer url='videos/FWLT-form-builder.mp4' 
                controls={true} 
                width='100%'
              />
              <p>
                Various analytics of the application are provided through Tableau Cloud, and displayed on our app.
              </p>
              <img src={FWLTAnalytics} alt="Map showing locations of users"/>
              <p>
                A table displaying all roles on the app, admins can add new roles as needed.
              </p>
              <img src={FWLTRolesTable} alt="Table of user roles"/>
              <p>
                Roles have many permissions and can be added or removed by admins.
              </p>
              <img src={FWLTEditingPermissions} alt="Add or Remove Permissions Form"/>
            </div>
            
          </div>

          <div className="project" id="Networked Pong">
            <h4>Networked Pong</h4>
            <p>
              Networked Pong is a rendition of the classic that can be played over a network (Internet or LAN), as the name implies. Players connect
              to the server application and, once all players are connected, a game of pong is run. The server application handles all game logic, the client application
              itself simply acts as a view receiving game state from the server, updating the screen, and sending player input to the server. The applications
              are written in Java and the client GUI uses Swing. The project was built for a network programming course at my college in April 2023.
            </p>
            <div className="button-holder">
              {linkImageButton("https://github.com/Logan-Campbell/NetworkPong", githubLogoWhite, "Github Logo", "Github", "Github")}
            </div>
            <div className="image-holder">
              <img src={pongGame} alt="In the Middle of a game of pong"/>
            </div>
          </div>

          <div className="project" id="Chat">
            <h4>Chat Application</h4>
            <p>
              LANMessenger is a simple chatting application with a login system, a group chat that any user can send messages to
              (even without logging in), and private messaging between users. It is built using Blazor WebAssembly, ASP.NET Core, 
              and Entity Framework for interacting with a database.
            </p>
            <div className="button-holder">
              {linkImageButton("https://github.com/Logan-Campbell/BlazorMessenger", githubLogoWhite, "Github Logo", "Github", "Github")}
            </div>
            <div className="image-holder">
              <img src={GroupChat} alt="Sending a message to the group chat"/>
              <img src={LoginPM} alt="Logging in and sending a private message"/>
            </div>
          </div>

          <div className="project" id="Minesweeper">
            <h4>Minesweeper Clone</h4>
            <p>
              Minesweeper clone built in Java with JavaFX and Gradle. The game has three difficulties like the original game (Easy, Intermediate, and Expert),
              and a custom difficulty option which allows you to change the height, width, number of mines. It also writes to a file keeping track of 
              high scores which are measured by how fast you win the game. It was built as part of a programming course at my college in 2020.
            </p>
            <div className="button-holder">
              {linkImageButton("https://github.com/Logan-Campbell/MinesweeperJavaFX", githubLogoWhite, "Github Logo", "Github")}
            </div>
            <div className="image-holder">
              <img src={easyWin} alt="Easy game win"/>
              <img src={expertLose} alt="Expert game loss"/>
            </div>
            
          </div>
        </div>
      </div>
      <div className="" id="contact">
        <div className="text">
          <h2>Contact</h2>
          <p>
          If you want me for your projects, or have any questions, the best way to contact me is at
            <span className="email"> loganbmcampbell@gmail.com</span>
          </p>
          <div className="button-holder">
              {linkImageButton("https://github.com/Logan-Campbell", githubLogoWhite, "Github Logo", "Github")}
              {linkImageButton("https://www.linkedin.com/in/logan--campbell/", linkedInLogo, "LinkedIn Logo", "LinkedIn")}
            </div>
        </div>
        <footer className="text-center pb-4">
          © 2026 Logan Campbell | <a className="contact-link px-1" rel="noreferrer" target="_blank" href="https://github.com/Logan-Campbell/PersonalWebsite">Page Source</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
