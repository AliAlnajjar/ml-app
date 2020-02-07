import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    card: {
        minWidth: 275,
        height: "100%"
    },
    title: {
        fontSize: "1.5rem",
        textAlign: "center",
        paddingBottom: "2rem",
    },
    desc: {
        fontSize: "0.9rem",
        textAlign: "left",
        lineHeight: "1.8"
    },
    cardContent: {
        minHeight: 100,
    },
    red: {
        color: "#EF3E36",
        fontWight: 900
    },
    blue: {
        color: "#1976d2",
        fontWight: 900
    },
    green: {
        color: "#00A99D",
        fontWight: 900
    },
    btn: {
        textTransform: "none",
        fontSize: "1.2rem",
        color: "#1976d2",
        width: "100%"
    },
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: 200,
        },
    },

}));



const Form = () => {
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="standard-basic" label="Standard" />
            <TextField id="filled-basic" label="Filled" variant="filled" />
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </form>
    )
}

export default function FixOptionCard(props) {
    const classes = useStyles();
    const { title, titlespan, titleSpanColor, desc, btnLable, img, left } = props
    const [showForm, setShowForm] = useState(false)
    return (<div>
        <Card className={classes.card}>
            {!left ?

                <Grid container spacing={0}>
                    <Grid item xs={12} md={6}>
                        <CardContent className={classes.cardContent}>

                            <Typography variant="h5" component="h2" className={classes.title}>
                                {title}
                                {titleSpanColor == "red" ? <span className={classes.red}>{titlespan}</span> : titleSpanColor == "blue" ? <span className={classes.blue}>{titlespan}</span> : <span className={classes.green}>{titlespan}</span>}

                            </Typography>

                            <Typography variant="body2" component="p" className={classes.desc}>
                                {desc}
                            </Typography>
                        </CardContent>

                        <CardActions>
                            <Button
                                size="small"
                                className={classes.btn}
                                onClick={() => { setShowForm(true) }}
                            >{btnLable}</Button>
                        </CardActions>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src={img} height="100%" width="100%" />

                    </Grid>
                </Grid>







                :

                <Grid container spacing={0}>
                    <Grid item xs={12} md={6}>
                        <img src={img} height="100%" width="100%" />

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <CardContent className={classes.cardContent}>

                            <Typography variant="h5" component="h2" className={classes.title}>
                                {title}
                                {titleSpanColor == "red" ? <span className={classes.red}>{titlespan}</span> : titleSpanColor == "blue" ? <span className={classes.blue}>{titlespan}</span> : <span className={classes.green}>{titlespan}</span>}

                            </Typography>

                            <Typography variant="body2" component="p" className={classes.desc}>
                                {desc}
                            </Typography>
                        </CardContent>

                        <CardActions>
                            <Button
                                size="small"
                                className={classes.btn}
                                onClick={() => { console.log(title) }}
                            >
                                {btnLable}
                            </Button>
                        </CardActions>
                    </Grid>

                </Grid>

            }






        </Card>
        {showForm && (<Form>

        </Form>)}

    </div>
    );
}




