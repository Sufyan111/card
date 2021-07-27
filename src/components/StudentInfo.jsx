import { Table } from "react-bootstrap";

export const StudentInfo = ({studentName , RollNo,contact,city}) =>{
    return (
    
    <Table striped bordered variant="dark">
        <tbody><tr>
      <td>Student Name</td>
      <td>:</td>
      <td>{studentName}</td>
    </tr>
    <tr>
      <td>Roll Number</td>
      <td>:</td>
      <td>{RollNo}</td>
    </tr>
    <tr>
      <td>Contact</td>
      <td>:</td>
      <td>{contact}</td>
    </tr>
    <tr>
      <td>City</td>
      <td>:</td>
      <td>{city}</td>
    </tr>
    </tbody>
    
  </Table>);


}