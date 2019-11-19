import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    height: "auto",
    backgroundColor: theme.palette.background.paper,
    padding: "20px 0"
  },
}));

export default function ChooseService(props) {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(-1);
  const { name } = props

  const handleListItemClick = (event, name) => {
    setSelectedIndex(name);
  };

  return (
    <div className={classes.root}>
      <List>

      
        <ListItem
          button
          selected={selectedIndex === { name }}
          onClick={event => handleListItemClick(event, { name })}
        >
          <ListItemText primary={name} />
        </ListItem>



      </List>
    </div>
  );
}