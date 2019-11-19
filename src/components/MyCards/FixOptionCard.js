import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
        minWidth: 275,
        height: 170
    },
    title: {
        fontSize: 14,
    },
    cardContent: {
        minHeight: 100,
    },
    red: {
        color: "#980000",
        fontWight: 900
    },
    blue: {
        color: "#EF3E36",
        fontWight: 900
    },
    green: {
        color: "#00A99D",
        fontWight: 900
    }

});

export default function FixOptionCard(props) {
    const classes = useStyles();
    const { title, titlespan, titleSpanColor, desc, btnLable } = props
    return (
        <Card className={classes.card}>
            <CardContent className={classes.cardContent}>

                <Typography variant="h5" component="h2">
                    {title}
                    {titleSpanColor == "red" ? <span className={classes.red}>{titlespan}</span> : titleSpanColor == "blue" ? <span className={classes.blue}>{titlespan}</span> : <span className={classes.green}>{titlespan}</span>}

                </Typography>

                <Typography variant="body2" component="p">
                    {desc}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">{btnLable}</Button>
            </CardActions>
        </Card>
    );
}
