import React from "react";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { InputGroup, Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';

import { ytbe } from "../../Redux/features/app.feature.js";



export const LinkButton = () => {
    const dispatch = useDispatch();
    const linkInput = useRef()
  
  useEffect(() => {
  
    return () => {

    };
  }, []);

  return (
    <InputGroup  className="mb-3 heading-name">
        <Form.Control
            ref={linkInput}
            placeholder="Your awesome Youtube link"
            aria-label="Your awesome Youtube link"
            aria-describedby="basic-addon2"
        />
        <Button 
            variant="outline-secondary" 
            id="button-addon2"
            onClick={() => {
                dispatch(ytbe(linkInput.current.value))
            }}
        >
            Here We Go!
        </Button>
    </InputGroup>
  );
}
