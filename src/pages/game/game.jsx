import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBIcon,
  MDBTextArea,
  MDBBtn
} from "mdb-react-ui-kit";
import "./game.css"
import Drawboard from "./components/Drawboard";
import Chat from "./components/Chat";
import Info from "./components/Info";

export default function Game() {
  return (
    <MDBContainer fluid className="py-5 background-radial-gradient overflow-hidden">
      <MDBRow className="d-flex justify-content-end align-items-end" id="form">
        <MDBCol md="2" lg="2" xl="2">
          <Info />
        </MDBCol>
        <MDBCol md="6" lg="6" xl="6">
          <Drawboard />
        </MDBCol>
        <MDBCol md="3" lg="3" xl="3">
          <Chat />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}