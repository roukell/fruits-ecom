import * as React from 'react';
import {
    List, Datagrid, TextField, EmailField
} from 'react-admin';

const UserList = props => (
    <List {...props}>
        <Datagrid rowClick='edit'>
            <TextField source='_id' />
            <TextField source='username' />
            <TextField source='firstName' />
            <TextField source='lastName' />
            <EmailField source='email' />
        </Datagrid>
    </List>
);

export default UserList;
