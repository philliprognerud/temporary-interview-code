import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import axios from "axios";

const API_URL = "https://pixabay.com/api/?key=15014299-1f74874335da2d367e375c76d&q=flowers&image_type=photo";

function Home() {
    // State Hooks
    const [images, setImages] = useState([]);

    // Effect Hooks
    useEffect(() => {
        axios.get(API_URL).then(res => {
            if (!res || !res.data) throw new Error("Something broke with the API request");

            let newImages = [];
            let tmp = [];

            res.data.hits.forEach(({ webformatURL }) => {
                if (tmp.length < 4) {
                    tmp.push(webformatURL);
                }

                if (tmp.length === 4) {
                    newImages.push(tmp);
                    tmp = [];
                }
            });

            setImages(newImages);
        });
    }, []);

    return (
        <Container>
            {images.map((arr, i1) => {
                return (
                    <Row className="d-flex justify-content-center mb-3" key={i1}>
                        {arr.map((imgUrl, i2) => {
                            return (
                                <Col className="d-flex justify-content-center" lg="3" key={i2}>
                                    <img width="200px" height="200px" src={imgUrl} />
                                </Col>
                            );
                        })}
                    </Row>
                );
            })}
        </Container>
    );
}

export default Home;
