import { Box, Container, Typography } from '@mui/material';
import styles from "../styles/feed.module.css";

export default function TitleBar() {
    return (
        <Box>
            <Container>
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
    )
}