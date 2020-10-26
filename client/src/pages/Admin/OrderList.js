import * as React from "react";
import { List, Datagrid, TextField, ArrayField, SingleFieldList, ChipField, Filter, TextInput } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const OrderList = props => {
    const PostFilter = (props) => (
        <Filter {...props}>
            <TextInput label="Search" source="q" alwaysOn />
        </Filter>
    );

    const PostPanel = ({ id, record, resource }) => {
        const classes = useStyles();

        const orderItems = record.orders.map((order, i) => {
            const title = order.title;
            const quantity = order.quantity;
            console.log(title, quantity);

            return (
                <TableRow key={i}>
                    <TableCell align="center">{title}</TableCell>
                    <TableCell align="center">{quantity}</TableCell>
                </TableRow>
            )
        })

        return (
            <>
                <h3>Details</h3>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Product title</TableCell>
                                <TableCell align="center">Quantity</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {orderItems}
                        </TableBody>
                    </Table>
                </TableContainer>
            </>
        )
    }

    return (
        <List {...props} filters={<PostFilter />}>
            <Datagrid rowClick="edit" expand={<PostPanel />}>
                <TextField source="date" />
                <TextField source="_id" />
                <TextField source="username" />
                <ArrayField source="orders">
                    <SingleFieldList>
                        <ChipField source="title" />
                    </SingleFieldList>
                </ArrayField>
            </Datagrid>
        </List>
    )
};

export default OrderList;