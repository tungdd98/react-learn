import React from "react";
import { Container, Col, Row } from "reactstrap";
import { NavLink } from "react-router-dom";
import style from "./Header.module.scss";

const Header = () => {
    return (
        <header
            className={`${style.header} sticky-top py-2 bg-white shadow-sm`}
        >
            <Container>
                <Row className="justify-content-between align-items-center">
                    <Col xs="auto">
                        <h3 className="display-4">Easy...</h3>
                    </Col>
                    <Col xs="auto">
                        <NavLink to="/photos">
                            <h3 className="display-4">Photo App</h3>
                        </NavLink>
                    </Col>
                </Row>
            </Container>
        </header>
    );
};

export default Header;
