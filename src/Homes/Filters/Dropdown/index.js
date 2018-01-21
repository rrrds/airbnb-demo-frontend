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
            filter={props.filter}
            onApply={props.onApply}
            onClose={props.onClose}
            onReset={props.onReset}
            mobileInfoRow={props.mobileInfoRow}
          />
        ) : (
          <Popup
            filter={props.filter}
            onApply={props.onApply}
            onClose={props.onClose}
            onReset={props.onReset}
          />
        ))}

      {props.button}
    </Wrapper>
  );
};
