import React from 'react';
import SmallPopup from './SmallPopup';
import LargePopup from './LargePopup';
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
          name={props.name}
        >
          {props.children}
        </Portal>
      );
    }

    if (props.isLargePopup) {
      return (
        <LargePopup onApply={props.onApply} onClose={props.onClose} onReset={props.onReset}>
          {props.children}
        </LargePopup>
      );
    }

    return (
      <SmallPopup onApply={props.onApply} onClose={props.onClose} onReset={props.onReset}>
        {props.children}
      </SmallPopup>
    );
  }

  return null;
};
