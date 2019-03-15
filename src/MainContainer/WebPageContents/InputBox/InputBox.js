import React from "react";
import { Form, Input } from "reactstrap";

const InputBox = () => {
  return (
    <div className="inputBox">
      <Form>
        <Input type="text" name="text" id="inputText" placeholder="Search" />
        <i className="fas fa-search" />
      </Form>
    </div>
  );
};

export default InputBox;
