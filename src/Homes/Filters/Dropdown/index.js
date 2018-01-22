import React from "react";
import styled from "styled-components";
import Popup from "./Popup";
import Portal from "./Portal";

const Wrapper = styled.div`
  display: inline-block;
`;

export default props => {
  return (
    <Wrapper>
      {props.isActive &&
        (props.isMobile ? (
          <Portal
            onApply={props.onApply}
            onClose={props.onClose}
            onReset={props.onReset}
            mobileInfoRow={props.mobileInfoRow}
          >
            {props.filterComponent}
          </Portal>
        ) : (
          <Popup
            onApply={props.onApply}
            onClose={props.onClose}
            onReset={props.onReset}
          >
            {props.filterComponent}
          </Popup>
        ))}

      {props.button}
    </Wrapper>
  );
};
