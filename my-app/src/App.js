import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Card,ListGroup,ListGroupItem,Accordion,Button} from 'react-bootstrap';

class App extends React.Component {

    state ={
      user : [],
      followers : []
     
    } ;
    
 


      componentDidMount(){
        fetch("https://api.github.com/users/munal92")
        .then(res =>res.json())
        .then(user => {
          console.log("fetch user info" , user );
          this.setState({...this.state, user: user})
        })
        .catch(err => console.log("did amount user fetch error"))
      }


      fetchingFollowers = (e) => {
        e.preventDefault();

        fetch("https://api.github.com/users/munal92/followers")
        .then(res => res.json()) 
        .then(followers => { 
          console.log(" follwer info",followers);
          this.setState({...this.state, followers: followers})
          
        })
          .catch(err => console.log("fetch follwer error",err) )
      }

      


  render(){

    
  
  return (

    
    <div className="App">
      My Github Card 
      <Card className="card-" style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.state.user.avatar_url} />
  <Card.Body>
    <Card.Title>{this.state.user.name}</Card.Title>
    <Card.Text>
      {this.state.user.bio}
    </Card.Text>
  
<Accordion defaultActiveKey="0">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0" onClick={this.fetchingFollowers}>
        Followers
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body> <li>
            {this.state.followers &&
              this.state.followers.map(follower => {
                return (
                  <li  key={follower.toString()} > 
                  
                  {follower.login}               
                    
                   
                  </li>
                );
              })}
          </li>  </Card.Body>
    </Accordion.Collapse>
  </Card>
  
</Accordion>

      
  </Card.Body>
  
</Card>




      
      


    </div>
  );
}
}

export default App;


// const { user, followers } = this.state;
// console  this.state

















