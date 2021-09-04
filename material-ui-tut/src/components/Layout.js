import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'
import Drawer from '@material-ui/core/Drawer';

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
    }
})

const Layout = ({ children }) => {

    const classes = useStyles()
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
            </Drawer>

            <div className={classes.page}>
                {children}
            </div>
        </div>
    )
}

export default Layout
