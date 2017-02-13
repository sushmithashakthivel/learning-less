import React, {Component} from "react";
import {render} from "react-dom";
import {Navbar,Nav,NavItem,NavDropdown,MenuItem} from "react-bootstrap";
import Application from "./Application";
import "bootstrap-less";
import "font-awesome-less";
import "./index.less";

class App extends Component {
  render() {
     return (
      <div>
        <Navbar inverse collapseOnSelect fluid className="TopHeader">
          <Navbar.Header>
            <Navbar.Brand>
              Learning Less
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavDropdown eventKey={3} title="Site Menu" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Landing Page</MenuItem>
                  <MenuItem divider />
                <MenuItem eventKey={3.2}>Data Tools Gallery</MenuItem>
                  <MenuItem divider />
                <MenuItem eventKey={3.3}>DataGSX Dashboard Designer</MenuItem>
                  <MenuItem divider />
                <MenuItem eventKey={3.4}>Dashboards</MenuItem>
                  <MenuItem divider />
                <MenuItem eventKey={3.5}>Reports</MenuItem>
                  <MenuItem divider />
                <MenuItem eventKey={3.6}>Scheduled Reports</MenuItem>
                  <MenuItem divider />
                <MenuItem eventKey={3.6}>Report Designer</MenuItem>
                  <MenuItem divider />
                <MenuItem eventKey={3.6}>Activity</MenuItem>
                  <MenuItem divider />
                <MenuItem eventKey={3.6}>Client Reporting</MenuItem>
                  <MenuItem divider />
                <MenuItem eventKey={3.6}>DataGSX Reporting</MenuItem>
                  <MenuItem divider />
                <MenuItem eventKey={3.6}>Help</MenuItem>
                </NavDropdown>
            </Nav>

              <Nav pullRight className="basic-nav-dropdown-right">
              <NavDropdown eventKey={3} title="jon Smith"/>
              </Nav>
              <div className="pull-right userprofile">
                <img src="images/user.png" alt="user"/>
              </div>
          </Navbar.Collapse>
        </Navbar>
        <Application/>
      </div>
    );
  }
}
render(
  <App />,
  document.getElementById("app")
);
