import React from 'react';
import { List, Datagrid, ReferenceField, TextField, EmailField, NumberField } from 'react-admin';

const CustomerList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
        <TextField source="_id" />
            <TextField source="username" />
            <TextField source="firstName" />
            <TextField source="lastName" />
            <EmailField source="email" />         
        </Datagrid>
    </List>
);

export default CustomerList;