'use client'
import React from 'react'


export default function NavBar() {
    const [value, setValue] = React.useState(0);

    return (
        <AppBar position="relative">
            <Toolbar>
                <Typography variant="h6" color="inherit">
                    Stable
                </Typography>
            </Toolbar>
        </AppBar>
    )
}
