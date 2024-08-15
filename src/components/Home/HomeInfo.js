import React from "react";
import { Container, Row, Col, Stack } from "react-bootstrap";
import Home from "./Home";


function HomeInfo() {
    return (
        <Stack gap={1} className="home-info justify-center">
            <h1 className="underline" style={{ fontSize: "1.8em" }}>
              Jack of <span className="fat-blue"> all</span> trades, master of <i className="fat-blue"> none?</i>
            </h1>
            <p className="info">Yes, none. 😊
                <br />
                
            </p>
            <div className="info">I manage Shopify stores.</div>
            <div className="info">I create websites.</div>
        </Stack>
    )
}

export default HomeInfo;