import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    height: "auto",
    backgroundColor: theme.palette.background.paper,
    padding: "20px 0"
  },
}));

export default function SelectService(props) {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(100);
  const { serviceList } = props

  const handleListItemClick = (event, serviceName) => {
    const index = serviceList.findIndex (name => name ==serviceName)
    setSelectedIndex(index);
    props.onSelectService (serviceName)

  };

  return (
    <div className={classes.root}>
      <List>
      {
        serviceList.map(serviceName => 
          <ListItem
            button
            selected={ !props.selectedService? false:
              selectedIndex === (serviceList.findIndex (name => name ==serviceName))  
            }
            onClick={event => handleListItemClick(event, serviceName)}
          >
            <ListItemText primary={serviceName} />
          </ListItem>
        )  
      }
      </List>
    </div>
  );
}