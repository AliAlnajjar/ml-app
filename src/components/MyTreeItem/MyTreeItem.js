import React from 'react';
// import 'views/pages/home/FixSection/FixSection.css';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import TreeItem from '@material-ui/lab/TreeItem';

const useStyles = makeStyles({
    content: {
        textAlign: "left",
        lineHeight: 1.7,
    }
});


export default function MYTreeItem(props) {

    const classes = useStyles();
    const { ...rest } = props;
    return (
        <TreeItem
            classes={{
                content: classes.content
            }}

            {...rest}
        />
    );

}


