import React from 'react';
import { Alert, Container } from 'react-bootstrap';
import Ticker from 'react-ticker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn } from '@fortawesome/free-solid-svg-icons';
import './Alert.css';

export default function SimpleAlerts(props) {

    return (
        <Container>
            <Alert variant="success">
                <Ticker speed={5} mode='smooth'>
                    {({ index }) => (
                        <>
                            <p className="mb-0">
                            <FontAwesomeIcon icon={faBullhorn} className='bullhornIcon'/>
                            Shimizu White Peach In Season! Pre-order ends 30/10/2020!
                            <FontAwesomeIcon icon={faBullhorn} className='bullhornIcon'/>
                            Pearl White Straberry In Season! 
                            <FontAwesomeIcon icon={faBullhorn} className='bullhornIcon'/>
                            Shine Muscat grape In Season! Pre-order ends 12/12/2020!
                            </p>
                        </>
                    )}
                </Ticker>
            </Alert>
        </Container>

    );
}