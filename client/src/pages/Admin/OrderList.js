export const ApiorderList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <ArrayField source="orders"><SingleFieldList><ChipField source="title" /></SingleFieldList></ArrayField>
            <ReferenceField source="id"><TextField source="id" /></ReferenceField>
            <TextField source="quantity" />
            <TextField source="username" />
            <NumberField source="__v" />
            <TextField source="_id" />
        </Datagrid>
    </List>
);