import '@/styles/globals.css'
import SideBar from '@/components/SideBar';
import styles from '../styles/page.module.css';
import Card from '@mui/material/Card';

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  )
}
