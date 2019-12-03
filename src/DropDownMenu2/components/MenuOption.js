import React, { Component, Fragment } from 'react';
import { actionCreators } from './../store';
import { Checkbox } from 'antd';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import './style.css';

class CheckboxList extends Component {
  render() {
    const options = [
      { label: 'Accommodation', value: 'Accommodation' },
      { label: 'Tour', value: 'Tour' },
      { label: 'Attractions & Experiences', value: 'Attractions & Experiences' }
    ];

    const { onChange, clearSelected, listSelected } = this.props;
    console.log(listSelected);
    return (
      <div
        onClick={e => {
          e.nativeEvent.stopImmediatePropagation();
        }}
      >
        <Checkbox.Group
          options={options}
          onChange={onChange}
          value={listSelected}
        />

        <div className='btn'>
          <button variant='contained' onClick={clearSelected}>
            Clear
          </button>
          <button variant='contained'>Apply</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    list: state.DropDownMenu.list,
    listSelected: state.DropDownMenu.listSelected,
    checkedValues: state.DropDownMenu.checkedValues
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onChange(checkedValues) {
      // console.log('checked = ', checkedValues);
      dispatch(actionCreators.listValue(checkedValues));
    },
    clearSelected() {
      console.log('clear');
      dispatch(actionCreators.clearSelected());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CheckboxList);
