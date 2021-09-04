import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { SubjectOutlined, AddCircleOutlined } from '@material-ui/icons';
import { useHistory, useLocation } from 'react-router';

const drawerWidth = 240

const useStyles = makeStyles({
    page: {
        backgroundColor: '#ffe4e3',
        width: '100%'
    },
    drawer: {
        width: drawerWidth
    },
    drawerPaper: {
        width: drawerWidth
    },
    root: {
        display: 'flex'
    },
    active: {
        backgroundColor: '#f4f4f4'
    }
})

const Layout = ({ children }) => {

    const classes = useStyles()

    const history = useHistory()
    const location = useLocation()

    const menuItems = [
        {
            id: 1,
            text: 'My Notes',
            icon: <SubjectOutlined color="secondary" />,
            path: '/'
        },
        {
            id: 2,
            text: 'Create Note',
            icon: <AddCircleOutlined color="secondary" />,
            path: '/create'
        },
    ]

    return (
        <div className={classes.root}>
            {/* appbar */}

            {/* sidedraw */}

            <Drawer
                className={classes.drawer}
                variant="permanent"
                anchor="left"
                classes={{ paper: classes.drawerPaper }}
            >
                <div>
                    <Typography variant="h5">
                        Ninja Notes
                    </Typography>
                </div>

                {/* lists / links */}

                <List>
                    {menuItems.map((val) => {
                        return (
                            <ListItem
                                key={val.id}
                                button
                                onClick={() => history.push(val.path)}
                                className={location.pathname === val.path ? classes.active : null}
                            >
                                <ListItemIcon>{val.icon}</ListItemIcon>
                                <ListItemText primary={val.text} />
                            </ListItem>
                        )
                    })}
                </List>
            </Drawer>

            <div className={classes.page}>
                {children}
            </div>
        </div>
    )
}

export default Layout
