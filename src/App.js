import logo from './logo.svg';
import './App.css';
import {Button,Col,Row, Form} from 'react-bootstrap';


function App() {
  return (
    <div className="App" style = {{backgroundColor : "#d3e0ea", margin: 10, padding : 10}}>
<Form>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridName">
      <Form.Label>First Name</Form.Label>
      <Form.Control placeholder="Enter your First Name" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Last Name</Form.Label>
      <Form.Control placeholder="Enter your Last Name" />
    </Form.Group>
  </Form.Row>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>
    </Form.Row>

    <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Age</Form.Label>
    <Form.Control as="select">
      <option>18-25</option>
      <option>25-35</option>
      <option>35-50</option>
      <option>50-60</option>
      <option>+60</option>
    </Form.Control>
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlSelect1">
  <Form.Label> Which option best describes your current role? </Form.Label>
     <Form.Control as="select" Required>
   <optgroup label="Select your current role">
     <option value="" disabled selected hidden>Select your current role</option>
  <option>Student</option>
  <option>Full Time Job </option>
  <option>Full Time Learner </option>
  <option>Prefer Not To say  </option>
  <option>Other </option>
     </optgroup>
    </Form.Control>
    </Form.Group>

    <fieldset>
       <Form.Label as="legend" column sm={3}>
      Would you recommend Go My Code to a friend?
      </Form.Label>
      <Form.Group as={Col}>
      <Col sm={30}>
        <Form.Check
          type="radio"
          label="Definitely"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
   
        />
        <Form.Check
          type="radio"
          label="Maybe"
          name="formHorizontalRadios"
          id="formHorizontalRadios2"
  
        />
        <Form.Check
          type="radio"
          label="Not sure"
          name="formHorizontalRadios"
          id="formHorizontalRadios3"
  
        />
      </Col>
    </Form.Group>
  </fieldset>

  <Form.Group controlId="exampleForm.ControlSelect1">
  <Form.Label> What is your favorite feature of Go My Code? </Form.Label>
     <Form.Control as="select" Required>
   <optgroup label="Select your current role">
     <option value="" disabled selected hidden>Select your current role</option>
  <option>Challenges</option>
  <option>Projects </option>
  <option>Community </option>
  <option>Open Sources  </option>
     </optgroup>
    </Form.Control>
    </Form.Group>
    <fieldset>
       <Form.Label as="legend">
       What would you like to see improved?
      </Form.Label>
      <Form.Group as={Col}>
      <Col sm={30}>
        <Form.Check
          type="Checkbox"
          label="Front-end Projects"
          name="formHorizontalRadios"
   
        />
        <Form.Check
          type="Checkbox"
          label="Back-end Projects"
          name="formHorizontalRadios"
  
        />
        <Form.Check
          type="Checkbox"
          label="Data Visualization"
          name="formHorizontalRadios"
  
        />
        <Form.Check
          type="Checkbox"
          label="Challenges"
          name="formHorizontalRadios"
  
        />
        <Form.Check
          type="Checkbox"
          label="Open Source Community"
          name="formHorizontalRadios"
  
        />
        <Form.Check
          type="Checkbox"
          label="Gitter help rooms"
          name="formHorizontalRadios"
  
        />
        <Form.Check
          type="Checkbox"
          label="Videos"
          name="formHorizontalRadios"
  
        />
         <Form.Check
          type="Checkbox"
          label="City Meetups
          
          
          "
          name="formHorizontalRadios"
  
        />
        <Form.Check
          type="Checkbox"
          label="Wiki"
          name="formHorizontalRadios"
  
        />
         <Form.Check
          type="Checkbox"
          label="Forum"
          name="formHorizontalRadios"
  
        />
         <Form.Check
          type="Checkbox"
          label="Additional Courses"
          name="formHorizontalRadios"
  
        />
      </Col>
    </Form.Group>
  </fieldset>

  <Button variant="primary" type="submit">
    Submit
  </Button>

  </Form>
    </div>
  );
}

export default App;
