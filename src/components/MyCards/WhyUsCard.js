import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
        maxWidth: 500,
    },
    media: {
        height: 80,
        backgroundSize: "80px",
    },
    title: {
        fontSize: "1em",
        // fontWeight: "bold"
    }
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
            {/* <Typography variant="h6" gutterBottom>
                {title}
            </Typography> */}
            <div className={classes.title}>
                {title}
            </div>

        </div>



    );
}
