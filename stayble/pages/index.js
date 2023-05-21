'use client'
import styles from '../styles/Home.module.css'
import * as React from 'react'
import TitleBar from '@/components/TitleBar'
import Feed from '@/components/Feed'
import SideBar from '@/components/SideBar';

export default function Home() {
  return (
    <main className={styles.main}>
      <Feed className={styles.feed} />
    </main>
  )
}
