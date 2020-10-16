import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import Button from '@bit/mui-org.material-ui.button';

const jumbotron = () => {
    return (
        <>
            <Jumbotron fluid style={{height: '500px'}}>
                <Container>
                    <h1>Fluid jumbotron</h1>
                    <p>
                        This is a modified jumbotron that occupies the entire horizontal space of
                        its parent.
                    </p>
                    <Button color="primary">
                    Pre-order
                   </Button>
                </Container>
            </Jumbotron>
        </>
    )
}

export default jumbotron;
