import * as React from "react";
import { List, Datagrid, TextField, ArrayField, ReferenceField, NumberField, SingleFieldList, ChipField } from 'react-admin';

const OrderList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="_id" />
            <TextField source="username" />
            <ArrayField source="orders">
                <SingleFieldList>
                    <ChipField source="title" />
                </SingleFieldList>
            </ArrayField>
            <TextField source="quantity" />
        </Datagrid>
    </List>
);

export default OrderList;