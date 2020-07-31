import React from "react";
import { Button } from "react-bootstrap";

const Input = ({ value, onChange, onClick }) => {
  return (
    <div>
      <input
        autoFocus
        value={value}
        onChange={onChange}
        type='text'
        className='form__field'
      />
      <Button onClick={onClick} className='button1'>
        Search
      </Button>
    </div>
  );
};

export default Input;
