import { StudentInfo } from "./StudentInfo";
import { StudentReducer } from "../reducers/StudentReducer";
import { Table } from "react-bootstrap";

export const Student = () =>{
    return(

        <div className="App">
            <Table striped bordered variant="dark">
                <tbody>
                <tr>
                    {StudentReducer.Data.map((item) => (
                        <td>
                            <StudentInfo 
                                studentName={item.studentName}
                                RollNo = {item.RollNo}
                                contact = {item.contact}
                                city = {item.city}
                            />
                        </td>                                
                    )
                    )}
                </tr>
                </tbody>
            </Table>
        </div>

    )
} 