import React from "react";
import { Modal as SUIRModal } from "@infinitecsolutions/semantic-ui-react";

const Modal = props => {
  return <SUIRModal {...props} />;
};

Modal.Content = SUIRModal.Content;
Modal.Description = SUIRModal.Description;
Modal.Header = SUIRModal.Header;

export default Modal;
