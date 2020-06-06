import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Home() {
    const myfamilyInfo = [
        {
            name: "James Smith",
            schoolNme: 'Gaithersburg Elementary School',
            dateOfBirth: "16/10/2001",
            state: "Maryland"
        },
        {
            name: "Maria Garcia",
            schoolNme: 'Gaithersburg Elementary School',
            dateOfBirth: "08/08/2002",
            state: "Maryland"
        },
        {
            name: "Maria Garcia",
            schoolNme: 'Gaithersburg Elementary School',
            dateOfBirth: "16/10/2003",
            state: "Maryland"
        },
        {
            name: "Maria Garcia",
            schoolNme: 'Gaithersburg Elementary School',
            dateOfBirth: "01/02/2004",
            state: "Maryland"
        }
    ];

    return (
        <>
            <div class="container">
                <div class="form-Family">
                    <h3>My Family</h3>
                </div>
                <div class="add-New">
                    <p><a href="#"><img src="images/parent-landingpage/vector.png" />Add New</a></p>
                </div>
                <div class="table-form">
                    <table class="School-Detail">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">School Name</th>
                                <th scope="col">Date of Birth</th>
                                <th scope="col">State</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myfamilyInfo.map((info, i) => {
                                return (
                                    <tr>
                                        <td data-label="Name"><span>{info.name}</span></td>
                                        <td data-label="School Name"><span>{info.schoolNme}</span></td>
                                        <td data-label="Date of Birth"><span>{info.dateOfBirth}</span></td>
                                        <td data-label="State"><span>{info.state}</span></td>
                                        <td data-label="Action"><span><a href="#" class="view">View</a> | <Link class="create-Form" to="/pediatric-form">Create form</Link></span></td>
                                    </tr>
                                );
                            })}

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Home;