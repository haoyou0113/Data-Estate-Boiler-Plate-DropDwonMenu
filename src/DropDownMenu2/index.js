import React, { Component, Fragment } from 'react';
import { SearchWrapper, Container, DropdownMenu } from './style';
import { actionCreators } from './store';
import MenuOption from './components/MenuOption';
import { connect } from 'react-redux';
import './style.css';

class DropDownMenu extends Component {
  componentDidMount() {
    document.addEventListener('click', this.props.handleInputBlur);
  }

  render() {
    const { focused, handleInputFocus, Categories } = this.props;

    return (
      <Container>
        <SearchWrapper>
          <label htmlFor=''>I'm looking for...</label>
          <div className='selectdropdown' onClick={handleInputFocus}>
            {Categories}
          </div>
          <div className={focused ? 'show' : 'hide'}>
            <MenuOption content={focused}></MenuOption>
          </div>
        </SearchWrapper>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    focused: state.DropDownMenu.focused,
    Categories: state.DropDownMenu.Categories
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleInputFocus(e) {
      e.nativeEvent.stopImmediatePropagation();
      dispatch(actionCreators.searchFocus());
    },

    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DropDownMenu);
