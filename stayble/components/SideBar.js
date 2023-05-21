import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider } from '@mui/material';
import AccountIcon from '@mui/icons-material/AccountCircle';
import UploadIcon from '@mui/icons-material/AddAPhoto';
import HomeIcon from '@mui/icons-material/Home';
import styles from "../styles/feed.module.css";
import Link from 'next/link';

const getIcon = (text, index) => {
    if (index === 0) {
        return (
            <ListItemButton href="/">
                <ListItemIcon>
                    <HomeIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
            </ListItemButton>
        )
    }
    else if (index === 1) {
        return (
            <ListItemButton href="/upload">
                <ListItemIcon>
                    <UploadIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
            </ListItemButton>
        )
    }
    else if (index === 2) {
        return (
            <ListItemButton href="/account">
                <ListItemIcon>
                    <AccountIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
            </ListItemButton>
        )
    }
}

export default function SideBar() {
    return (
        <Drawer
            variant="permanent"
            sx={{
                maxWidth: "240",
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: "240", boxSizing: 'border-box' },
            }}
        >
            <Toolbar />
            <Box sx={{ overflow: 'auto' }}>
                <List>
                    {['Home', 'Upload', 'Account'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            {getIcon(text, index)}
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    )
}