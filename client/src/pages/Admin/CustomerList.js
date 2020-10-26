import React from 'react';
import { List, Datagrid, TextField, EmailField, Filter, TextInput } from 'react-admin';

const CustomerList = props => {
    const PostFilter = (props) => (
        <Filter {...props}>
            <TextInput label="Search" source="q" alwaysOn />
        </Filter>
    );

    return(
      <List {...props} filters={<PostFilter />}>
        <Datagrid rowClick="edit">
        <TextField source="_id" />
            <TextField source="username" />
            <TextField source="firstName" />
            <TextField source="lastName" />
            <EmailField source="email" />         
        </Datagrid>
    </List>  
    )
};

export default CustomerList;