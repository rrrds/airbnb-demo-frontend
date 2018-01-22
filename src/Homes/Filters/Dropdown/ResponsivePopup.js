import React from "react";
import Popup from "./Popup";
import Portal from "./Portal";

export default props => {
  return (
    props.isActive &&
    (props.isMobile ? (
      <Portal
        onApply={props.onApply}
        onClose={props.onClose}
        onReset={props.onReset}
        mobileInfoRow={props.mobileInfoRow}
      >
        {props.children}
      </Portal>
    ) : (
      <Popup
        onApply={props.onApply}
        onClose={props.onClose}
        onReset={props.onReset}
      >
        {props.children}
      </Popup>
    ))
  );
};
