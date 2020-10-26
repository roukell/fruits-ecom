import * as React from "react";
import { Show, SimpleShowLayout, TextField, DateField, RichTextField } from 'react-admin';

const OrderShow= (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="title" />
            <TextField source="_id" />
            <TextField source="username" />
            <DateField label="Publication date" source="created_at" />
        </SimpleShowLayout>
    </Show>
);

export default OrderShow;