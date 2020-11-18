import * as React from 'react';
import {
    List, Datagrid, TextField, ArrayField, SingleFieldList, ChipField, Filter, TextInput
} from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Divider, Tabs, Tab } from '@material-ui/core';

const useStyles = makeStyles({
    table: {
        minWidth: 650
    }
});

// filter box function
const PostFilter = props => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

// expand panel to show order details
// eslint-disable-next-line no-unused-vars
const PostPanel = ({ id, record, resource }) => {
    const classes = useStyles();

    const orderItems = record.orders.map((order, i) => {
        const { title } = order;
        const { quantity } = order;

        return (
            <TableRow key={i}>
                <TableCell align="center">{title}</TableCell>
                <TableCell align="center">{quantity}</TableCell>
            </TableRow>
        );
    });

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
    );
};

// tabs for different order status
const tabs = [
    { id: 'ordered', name: 'ordered' },
    { id: 'delivered', name: 'delivered' },
    { id: 'cancelled', name: 'cancelled' }
];

const TabbedDatagrid = () => (
    <>
        <Tabs
            variant="fullWidth"
            centered
            // value={filterValues.status}
            indicatorColor="primary"
            // onChange={handleChange}
        >
            {tabs.map(choice => (
                <Tab
                    key={choice.id}
                    label={
                        // totals[choice.name]
                        //     ? `${choice.name} (${totals[choice.name]})`
                        //     :
                        choice.name
                    }
                    value={choice.id}
                />
            ))}
        </Tabs>
        <Divider />
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
    </>
);

const OrderList = props => (
    <>
        <List {...props} filters={<PostFilter />}>
            <TabbedDatagrid />
        </List>
    </>
);

export default OrderList;
