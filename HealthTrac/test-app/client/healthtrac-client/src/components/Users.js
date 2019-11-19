import React, { useEffect } from 'react';
import axios from 'axios';
import {
  Card, CardBody, CardTitle,
  Row, Col,
  FormGroup, Label, Input,
  Table,
  Button,
  Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';


const Users = () => {

  useEffect(() => {
    const initialize = async () => {
      const response = await axios.get('http://localhost:5000/auth/fitbit/callback');
      console.log(response.data);
    }
    initialize();
  }, []);

  return ( 
    <Row className="mt-5 mb-5">
    <Col sm={{ size: 10, offset: 1 }} >
      <Card>
        <CardBody>
          <FormGroup>
              <Label for="exampleSelect">Select patient</Label>
              <Input type="select" name="select" id="exampleSelect">
                <option>1</option>
              </Input>
          </FormGroup>
        </CardBody>
      </Card>
    </Col>
    
    </Row>
  );


}
export default Users;