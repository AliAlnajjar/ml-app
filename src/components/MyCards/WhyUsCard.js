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

        backgroundSize: "80px", /* Resize the background image to cover the entire container */
    },
    
});

export default function MediaCard(props) {
    const classes = useStyles();
    const { title, img } = props

    return (
       <div>
                <CardMedia
                    className={classes.media}
                    image={img}
                    title=" "
                />
                    <Typography  variant="h6" component="h3">
                        {title}
                    </Typography>
       </div>
                
                    
                
    );
}
