import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '10ch'
        }
    }
}));

const FormPropsTextFields = props => {
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete='off'>
            <div>
                <TextField
                    // need to fix validation here
                    id='standard-number'
                    label='Quantity'
                    type='number'
                    InputProps={{ inputProps: { min: 0, max: 15 } }}
                    pattern='[0-9]*'
                    InputLabelProps={{
                        shrink: true
                    }}
                    onChange={props.onChange}
                />
            </div>
        </form>
    );
};

export default FormPropsTextFields;
