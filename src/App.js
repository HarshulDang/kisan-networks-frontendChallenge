import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown , Card, Button, ListGroup, ListGroupItem, FormControl,Col, Image, CardColumns } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {

  
  render() {
    return (
      <div className="App">

        {/*The text Layout i.e. Quotes one*/}
          <div className="col-8" style={{position: 'absolute', top: '30%'}}>
            <h1 style={{textAlign:'center'}}>Quotes</h1><br/>
            <h3>“We’ve all heard that a million monkeys banging on a million typewriters will eventually reproduce the entire works of Shakespeare. Now, thanks to the Internet, we know this is not true.”</h3>
            <br/>
            <h4>“Make it simple. Make it memorable. Make it inviting to look at. Make it fun to read.”</h4>
            <br/>
            <h5>At KisanNetwork.com, we believe everyone deserves to have a website or online store. Innovation and simplicity makes us happy: our goal is to remove any technical or financial barriers that can prevent business owners from making their own website. We're excited to help you on your journey!</h5>
            <h2 style={{marginTop:90}}>----------------------------Related Articles-----------------------</h2>

            {/* The places column after Realted Article*/}
            <CardColumns style={{marginTop: 60}}>
              <Card.Img variant="top" src={require("./images/bali.jpeg")} />
              <Card>
                <Card.Body>
                  
                  <Card.Title>Bali</Card.Title>
                  <Card.Text>
                    Bali is an island paradise that has something for everyone to enjoy on vacation. 
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="p-3">
                <Card.Img variant="top" src={require("./images/dubai.jpg")} />
                <Card.Body>
                  <Card.Title>Dubai</Card.Title>
                  
                  <p>
                    Dubai is the second largest of the seven states of the United Arab Emirates (UAE) and its main port and commercial centre.
                  </p>
                </Card.Body>  
            
              </Card>
              <Card>
                <Card.Img variant="top" src={require("./images/HongKong.jpg")} />
                <Card.Body>
                  <Card.Title>Hong Kong</Card.Title>
                  <Card.Text>
                    Hong Kong is located in Eastern Asia on the southeast coast of China. ... Hong Kong was a self-governing British colony from 1841 to mid-1997. 
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src={require("./images/india.jpg")} />
                <Card.Body>
                  <Card.Title>India</Card.Title>
                  <Card.Text>
                    <b>Taj Mahal</b> is a monument located in Agra in India, constructed between 1631 and 1653 by a workforce of more than 20,000. The Mughal Emperor Shah Jahan commissioned its construction as a mausoleum for his favorite wife Mumtaz Mahal.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="text-left">
                <Card.Img variant="top" src={require("./images/newyork.jpeg")} />
                <Card.Body>
                  <Card.Title>New York</Card.Title>
                  <Card.Text>
                      New York City consists of five boroughs, each of which is a separate county of the State of New York. The five boroughs – Brooklyn, Queens, Manhattan, The Bronx, and Staten Island – were consolidated into a single city in 1898.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="text-left">
                   <Card.Img variant="top" src={require("./images/paris.jpg")} />
                  <Card.Body>
                    <Card.Title>Paris</Card.Title>
                  
                    <Card.Text>
                    Paris Overview is a designed to provide you with a generalized view of the city of light.
                    </Card.Text>
                  </Card.Body>
              </Card>
            </CardColumns>;
          </div>
          {/*navBar at the top of the screen*/}
          <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">DANG</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <NavDropdown title="Activities" id="collasible-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                  <Nav>
                    <Nav.Link href="#deets">Explore</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                      Dashboard
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
            </Navbar>
          </div>
          <div>
             <Card style={{ width: '100rem', backgroundColor: 'grey' , position: 'absolute', top: '10%' }}> 
                <Card.Body>
                  <Card.Title><b>Travel</b></Card.Title>
                  <Card.Text>
                    Travel is the other name for enjoyment and passion for the people who wants to explore the world 
                  </Card.Text>
                </Card.Body>
              </Card>
          </div>

            {/*Submenu*/}
            <div>
              <Card style={{ height: '12rem', width: '16rem', position: 'absolute', top: '30%', right: '2%' }}>
                <Card.Body>
                  <Card.Title style={{ position: 'absolute', top:'2%', right:'30%'}}>Submenu</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <Nav.Link href="#link">Home</Nav.Link>
                  <Nav.Link href="#link">Conatct Us</Nav.Link>
                  <Nav.Link href="#link">About</Nav.Link>
                </ListGroup>
                <Card.Body>
                  
                </Card.Body>
              </Card>
              <Card bg="light" style={{ height: '20rem', width: '16rem', position: 'absolute', top: '60%', right: '2%' }}>
                 <Card.Img variant="top" src={require("./images/australia.jpg")} style={{width: '16rem' , height: '10rem'}}/>
                 
                
                  
                <Card.Body>
                  <div style={{marginLeft : 'auto', marginRight : 'auto', width: '50%'}}>
                    <Image style={{height: 80, marginTop: -80, width: 80}} src={require("./images/user.jpeg")} roundedCircle />
                  </div>
                  <Card.Text>
                    <b>Name:</b> User <br/>
                    <b>Email:</b> user@user.com<br/>
                    <b>Phone:</b> 12345678
                  </Card.Text>
                </Card.Body>
              </Card>
    
              <Card style={{ height: '25rem',width: '16rem', backgroundColor: 'grey' , position: 'absolute', top: '105%', right: '2%' }}> 
                  <Card.Body>
                    <Card.Title style={{textAlign: 'center'}}><b>Send a Message</b></Card.Title>
                      Name:
                
                    <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                    <br/>
                      Message
                    <FormControl style={{ height: '120px'}} aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                    <br/>
                    <Button variant="primary">Send</Button>
                  </Card.Body>
                </Card>

                <Card bg="light" style={{ height: '22rem',width: '16rem' , position: 'absolute', top: '165%', right: '2%' }}> 
                  <Card.Body>
                    <Card.Title style={{textAlign: 'center'}}><b>Meet me at the Office</b></Card.Title>
                      <Card.Img variant="top" src={require("./images/maps.jpg")} style={{height: '13rem',width: '16rem', marginLeft: -20}}/>
                      <Card.Text>
                          21st Street, Norway<br/>
                          California, USA
                      </Card.Text>
                  </Card.Body>
                </Card>
            </div>
      </div>
    );
  }
}

export default App;
