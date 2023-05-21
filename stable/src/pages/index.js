'use client'
import Image from 'next/image'
import styles from './page.module.css'
import * as React from 'react'
import AppBar from '@mui/material/AppBar';
import NavBar from '../components/Navbar'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import "./page.module.css"

export default function Home() {
  return (
    <main className={styles.main}>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Stable
          </Typography>
        </Toolbar>
      </AppBar>
      <Box>
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Horse Feed
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Ipsem lorum
          </Typography>
        </Container>
      </Box>
      <NavBar className="bottomNavBar" />
    </main>
  )
}
