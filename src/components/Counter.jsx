// import React, {useState} from "react";
// import { Button } from "react-bootstrap";

// export const Counter =() =>{
// const [cntr, setCntr]= useState(0);
// return(
//     <div>

//         <table>
//             <tr>
//                 <td><Button onClick={()=>cntr > 0 && setCntr(cntr-1)}><h1>-</h1></Button></td>
//                 <td> <h1>{cntr}</h1></td>
//                 <td><Button onClick={()=>cntr <5 && setCntr(cntr+1)}><h1> + </h1></Button></td>
//             </tr>
//         </table>
//     </div>
// )
    

// }

import React,{useState} from 'react';
import {Button, Row, Col} from "react-bootstrap"
export const Counter = () => {
const [cntr, setCntr]=  useState(0);   

    return (
        <div>
            
                <Row>
                    <Col><Button variant={cntr > 0 ? "primary": "danger"} disabled={!(cntr>0)} onClick={()=> cntr>0 && setCntr(cntr-1)}>-</Button></Col>

                    <Col><h1>{cntr}</h1></Col>

                    <Col><Button variant={cntr < 10 ? "primary": "danger"} disabled={!(cntr<10)} onClick={()=> cntr<10 && setCntr(cntr+1)}>+</Button></Col>
                </Row>
            
        </div>
    );
};