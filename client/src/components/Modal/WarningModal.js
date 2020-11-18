import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';
import OrderModalContext from '../../utils/Contexts/OrderModalContext';

const WarningModal = props => {
    const orderModalState = useContext(OrderModalContext);
    function getModalStyle() {
        return {
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            borderRadius: '10px',
            fontSize: '15px',
            paddingTop: '19px'
        };
    }

    const useStyles = makeStyles(theme => ({
        paper: {
            position: 'absolute',
            width: 400,
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #F4F3EE',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3)
        }
    }));

    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <Grid container>
                <Grid item xs={11} >
                    <p id='modal-description' style={{ marginTop: '8px' }}>
                        {orderModalState.placeOrderWarning}
                    </p>
                </Grid>
                <Grid item xs={1} >
                    <CloseIcon
                        style={{ marginTop: '8px' }}
                        onClick={props.onClose}
                    />
                </Grid>
            </Grid>
        </div>
    );

    return (
        <>
            <Modal
                open={props.open}
                onClose={props.onClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </>
    );
};

export default WarningModal;
