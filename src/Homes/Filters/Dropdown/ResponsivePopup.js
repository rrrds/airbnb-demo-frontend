import React from 'react';
import Popup from './Popup';
import Portal from './Portal';

export default (props) => {
  if (props.isActive) {
    if (props.isMobile) {
      return (
        <Portal
          onApply={props.onApply}
          onClose={props.onClose}
          onReset={props.onReset}
          mobileInfoRow={props.mobileInfoRow}
        >
          {props.children}
        </Portal>
      );
    }

    if (props.isLargePopup) {
      return (
        <Popup onApply={props.onApply} onClose={props.onClose} onReset={props.onReset}>
          {props.children}
        </Popup>
      );
    }

    return (
      <Popup onApply={props.onApply} onClose={props.onClose} onReset={props.onReset}>
        {props.children}
      </Popup>
    );
  }

  return null;
};
