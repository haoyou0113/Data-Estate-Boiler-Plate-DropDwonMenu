import React, { Component } from 'react';
import { actionCreators } from './../store';
import { Checkbox } from 'antd';
import { connect } from 'react-redux';

import './style.css';

class CheckboxList extends Component {
  render() {
    const { onChange, clearSelected, listSelected, options } = this.props;
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
    checkedValues: state.DropDownMenu.checkedValues,
    options: state.DropDownMenu.options
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onChange(checkedValues) {
      // console.log('checked = ', checkedValues);
      dispatch(actionCreators.listValue(checkedValues));
    },
    clearSelected() {
      dispatch(actionCreators.clearSelected());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CheckboxList);
