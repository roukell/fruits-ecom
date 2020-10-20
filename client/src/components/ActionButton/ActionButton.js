import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import './ActionButton.css';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

const ActionButton = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Fab color="primary" aria-label="remove">
                <RemoveIcon />
            </Fab>
            
            <Fab color="primary" aria-label="add">
                <AddIcon />
            </Fab>
        </div>
    )
}

export default ActionButton;