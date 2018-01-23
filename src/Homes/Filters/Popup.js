import onClickOutside from 'react-onclickoutside';
import { PopupWrapper } from '../styled';

class Popup extends PopupWrapper {
  handleClickOutside = (e) => {
    this.props.handleClickOutside();
  };
}

export default onClickOutside(Popup);
