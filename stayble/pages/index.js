'use client'
import styles from '../styles/Home.module.css'
import * as React from 'react'
import TitleBar from '@/components/TitleBar'
import Feed from '@/components/Feed'
import SideBar from '@/components/SideBar';
import { Card } from '@mui/material'
import axios from 'axios';

export default function Home() {
  return (
    <main className={styles.main}>
      <SideBar />
      <Feed className={styles.feed} />
    </main>
  )
}
