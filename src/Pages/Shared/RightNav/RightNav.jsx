import React from 'react';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Button, ListGroup } from 'react-bootstrap';
import QZone from '../QZone/QZone';


const RightNav = () => {
    return (
        <div>
            <h3>Login With </h3>
            <Button className='mb-2' variant="outline-primary"><FaGoogle /> Login With Google</Button>
            <Button variant="outline-secondary"><FaGithub /> Login with Github</Button>
            <div>
                <h4 className='mt-4'>Find Us on</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook />facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter />twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram />instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
        </div>


    );
};

export default RightNav;