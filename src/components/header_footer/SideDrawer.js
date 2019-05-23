import React from 'react';
import { scroller } from 'react-scroll';
import Drawer from '@material-ui/core/Drawer/index';
import List from '@material-ui/core/List/index';
import ListItem from'@material-ui/core/ListItem';

const SideDrawer = (props) => {

    const scrollToElement = (element) => {
        scroller.scrollTo(element, {
            duration: 1500,
            delay: 100,
            smooth: true,
            offset: -150
        });
        props.onClose(false);
    };

    return (
        <Drawer
            anchor={"right"}
            open={props.open}
            onClose={() => props.onClose(false)}
        >
            <List component={"nav"}>
                <ListItem button onClick={() => scrollToElement('featured')}>
                    Pozostało do koncertu
                </ListItem>
                <ListItem button onClick={() => scrollToElement('venue nfo')}>
                    Miejsce
                </ListItem>
                <ListItem button onClick={() => scrollToElement('highlights')}>
                    Dodatkowe
                </ListItem>
                <ListItem button onClick={() => scrollToElement('pricing')}>
                    Ceny biletów
                </ListItem>
                <ListItem button onClick={() => scrollToElement('location')}>
                    Mapa
                </ListItem>
            </List>
        </Drawer>
    );
};

export default SideDrawer;