import { makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
    page: {
        backgroundColor: '#ffe4e3',
        width: '100%'
    }
})

const Layout = ({ children }) => {

    const classes = useStyles()
    return (
        <div>
            {/* appbar */}

            {/* sidedraw */}

            <div className={classes.page}>
                {children}
            </div>
        </div>
    )
}

export default Layout
