import React, { Component, Fragment } from 'react';
import { actionCreators } from './../store';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

class CheckboxList extends Component {
  // const classes = useStyles();
  handleToggle(value) {
    e => {
      e.nativeEvent.stopImmediatePropagation();
      const currentIndex = checked.indexOf(value);
      const newChecked = [...checked];

      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }

      setChecked(newChecked);
    };
  }
  render() {
    const { handleToggle, list } = this.props;
    return (
      <Fragment>
        <List>
          {/* {list.map(()=>{return li})} */}
          {['Accommodation', 'Tour', 'Attractions & Experiences'].map(value => {
            const labelId = value;

            return (
              <ListItem key={value} role={undefined} dense button>
                <ListItemIcon>
                  <Checkbox
                    edge='start'
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={labelId} />
              </ListItem>
            );
          })}
        </List>
        <Button variant='contained'>Apply</Button>
        <Button variant='contained'>Clear</Button>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    list: state.DropDownMenu.list
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleToggle(value) {
      // e.nativeEvent.stopImmediatePropagation();
      dispatch(actionCreators.listValue(value));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CheckboxList);
