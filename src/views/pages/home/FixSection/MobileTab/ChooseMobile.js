import React from 'react';
// import 'views/pages/home/FixSection/FixSection.css';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import TreeItem from '@material-ui/lab/TreeItem';
import MyTreeItem from 'components/MyTreeItem/MyTreeItem.js';


const useStyles = makeStyles({
    root: {
        height: 216,
        flexGrow: 1,
        maxWidth: 400,
        height: "auto",
        minHeight: "200px"
    }
});


export default function ChooseMobile() {

    const classes = useStyles();

    return (
        <div>
            {/* <div className={classes.container}> */}
            <h3>Velg Din Mobil</h3>
            <TreeView
                className={classes.root}
                defaultCollapseIcon={<ExpandMoreIcon />}
                defaultExpandIcon={<ChevronRightIcon />}
            >
                <MyTreeItem nodeId="1" label="Iphone">
                    <MyTreeItem nodeId="2" label="Iphone X" />
                    <MyTreeItem nodeId="3" label="Iphone 8" />
                    <MyTreeItem nodeId="4" label="Iphone 7" />
                </MyTreeItem>
                <MyTreeItem nodeId="5" label="Samsung">
                    <MyTreeItem nodeId="6" label="Samsung 1" />
                    <MyTreeItem nodeId="7" label="Samsung 2" />
                    <MyTreeItem nodeId="8" label="Samsung 3" />
                    <MyTreeItem nodeId="9" label="Samsung 4" />
                    <MyTreeItem nodeId="10" label="Samsung 4" />
                    <MyTreeItem nodeId="11" label="Samsung 4" />
                    <MyTreeItem nodeId="12" label="Samsung 4" />
                    <MyTreeItem nodeId="13" label="Samsung 4" />
                </MyTreeItem>
            </TreeView>
            {/* </div> */}
        </div>
    );

}


