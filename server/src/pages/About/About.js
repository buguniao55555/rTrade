import React, { Component } from "react";
import "mdbreact/dist/css/mdb.css";
import { MDBContainer } from "mdbreact";
import { Link } from "react-router-dom";

export default class About extends Component {
    render() {
        return (
            <MDBContainer className="page">
                <div className="box box-body-text">
                    <main>
                        <h2>This is an RCOS Project</h2>
                        <p>
                            Developed by a team of 3 people.
                        </p>
                    </main>
                    <nav>
                        <Link to="/">Home</Link>
                    </nav>
                </div>
            </MDBContainer>
        );
    }
}