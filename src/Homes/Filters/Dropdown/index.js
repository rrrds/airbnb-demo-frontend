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
            filterComponent={props.filterComponent}
            onApply={props.onApply}
            onClose={props.onClose}
            onReset={props.onReset}
            mobileInfoRow={props.mobileInfoRow}
          />
        ) : (
          <Popup
            filterComponent={props.filterComponent}
            onApply={props.onApply}
            onClose={props.onClose}
            onReset={props.onReset}
          />
        ))}

      {props.button}
    </Wrapper>
  );
};
