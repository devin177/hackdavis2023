import SideBar from "@/components/SideBar";
import { Card } from "@mui/material";
import styles from '../../styles/page.module.css';

export default function accountPage() {
    return (
        <main className={styles.main}>
            <SideBar />
            <Card>Account</Card>
        </main>
    );
}