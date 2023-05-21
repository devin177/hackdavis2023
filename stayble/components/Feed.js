import { Card, Stack, CardMedia, CardContent, Typography } from '@mui/material';
import styles from '../styles/feed.module.css';

export default function Feed() {
    return (
        <Stack spacing={5} className={styles.stack}>
            <Card className="card">
                <CardMedia
                    component="img"
                    image="images/horse1.jpg"
                    title="horse"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Horse1
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        This is horse 1
                    </Typography>
                </CardContent>
            </Card>
            <Card>
                <CardMedia
                    component="img"
                    image="images/horse2.jpg"
                    title="horse"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Horse2
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        This is horse 2
                    </Typography>
                </CardContent>
            </Card>
            <Card>
                <CardMedia
                    component="img"
                    image="images/horse3.jpg"
                    title="horse"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Horse2
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        This is horse 3
                    </Typography>
                </CardContent>
            </Card>
        </Stack >
    )
}