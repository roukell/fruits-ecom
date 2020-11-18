import React from 'react';

const UserContext = React.createContext({
    user: [],
    onClick: () => undefined
});

export default UserContext;
