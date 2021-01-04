import React from "react";
import {
  Row,
  Col,
  Card,
  Form,
  Button,
  InputGroup,
  FormControl,
  DropdownButton,
  Dropdown,
  Table,
  Toast,
} from "react-bootstrap";

import Aux from "../../hoc/_Aux";
import { saveDailyLogs, saveExpenses } from "./../../service";

const DailyLogs = () => {
  const addLogs = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target),
      formDataObj = Object.fromEntries(formData.entries());
    // console.log(formDataObj);
    let result = await saveDailyLogs(formDataObj);
    console.log(result);
  };

  const addExpense = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target),
      formDataObj = Object.fromEntries(formData.entries());
    // console.log(formDataObj);
    let result = await saveExpenses(formDataObj);
    console.log(result);
  };

  return (
    <Aux>
      <Row>
        <Col md={6}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Add Daily Logs</Card.Title>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md={12}>
                  <Form onSubmit={addLogs}>
                    <Form.Group>
                      <Form.Label>📅 Log Date</Form.Label>
                      <Form.Control
                        required
                        type="date"
                        name="logs_date"
                        placeholder="Enter Date"
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>💰 Total Cash</Form.Label>
                      <Form.Control
                        type="number"
                        name="total_cash"
                        placeholder="Enter amount"
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>👗 Total Quantity</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Enter quantity sold today"
                        name="total_quantity"
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>🔙 Total Returns</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Enter quantity sold today"
                        name="total_gr"
                      />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                      Save
                    </Button>
                  </Form>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Add Expenses</Card.Title>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md={12}>
                  <Form onSubmit={addExpense}>
                    <Form.Group>
                      <Form.Label>📅 Expense Date</Form.Label>
                      <Form.Control type="date" placeholder="Enter Date" />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>🏷️ Expense Category</Form.Label>
                      <Form.Control as="select">
                        <option>Tea</option>
                        <option>Staff</option>
                        <option>Nishu</option>
                        <option>Prakash</option>
                        <option>Others</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>💰 Amount</Form.Label>
                      <Form.Control type="number" placeholder="Enter amount" />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>📝 Notes</Form.Label>
                      <Form.Control as="textarea" rows="1" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      Save
                    </Button>
                  </Form>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Striped Table</Card.Title>
              <span className="d-block m-t-5">
                use props <code>striped</code> with <code>Table</code> component
              </span>
            </Card.Header>
            <Card.Body>
              <Table striped responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Aux>
  );
};

export default DailyLogs;
