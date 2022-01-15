import React from "react";
import ButtonCancel from "./ButtonCancel";
import ButtonSubmit from "./ButtonSubmit";
import "./Modal.css";
const Modal = ({ children }) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        {children}
        <div className="footer">
          <ButtonCancel>Cancel</ButtonCancel>
          <ButtonSubmit>Submit</ButtonSubmit>
        </div>
      </div>
    </div>
  );
};
export default Modal;
