import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

const FormPropsTextFields = (props) => {
    const classes = useStyles();
  
    return (
      <form className={classes.root} noValidate autoComplete='off'>
        <div>
          <TextField
            id='standard-number'
            label='Quantity'
            type='number'
            InputLabelProps={{
              shrink: true,
            }}
            onChange={props.onChange}
          />
        </div>
      </form>
    );
  }
 
export default FormPropsTextFields;
