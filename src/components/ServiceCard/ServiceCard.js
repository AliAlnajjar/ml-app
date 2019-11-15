import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
        maxWidth: 500,
    },
    media: {
        height: 210,

        backgroundSize: "200px", /* Resize the background image to cover the entire container */
    },
});

export default function MediaCard(props) {
    const classes = useStyles();
    const { title, desc, btn1Lable, btn2Lable, img } = props

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={img}
                    title=" "
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {desc}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    {btn1Lable}
                </Button>
                <Button size="small" color="primary">
                    {btn2Lable}
                </Button>
            </CardActions>
        </Card>
    );
}
