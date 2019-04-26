import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import withWidth, {isWidthUp} from '@material-ui/core/withWidth';


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    maxWidth: 1000,
    
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});



 let tileData = [
   {
     img: 'https://i.imgur.com/eTuCPxM.jpg',
     title: 'Image',
     description: 'sample recepie description',

   },
   {
    img: 'https://i.imgur.com/eTuCPxM.jpg',
    title: 'Image1',
    description: 'sample recepie description1',

  },
  {
    img: 'https://i.imgur.com/eTuCPxM.jpg',
    title: 'Image2',
    description: 'sample recepie description2',

  },
  {
    img: 'https://i.imgur.com/eTuCPxM.jpg',
    title: 'Image3',
    description: 'sample recepie description3',

  },
  {
    img: 'https://i.imgur.com/eTuCPxM.jpg',
    title: 'Image',
    description: 'sample recepie description',

  },
  {
   img: 'https://i.imgur.com/eTuCPxM.jpg',
   title: 'Image1',
   description: 'sample recepie description1',

 },
 {
   img: 'https://i.imgur.com/eTuCPxM.jpg',
   title: 'Image2',
   description: 'sample recepie description2',

 },
 {
   img: 'https://i.imgur.com/eTuCPxM.jpg',
   title: 'Image3',
   description: 'sample recepie description3',

 },
 {
  img: 'https://i.imgur.com/eTuCPxM.jpg',
  title: 'Image',
  description: 'sample recepie description',

},
{
 img: 'https://i.imgur.com/eTuCPxM.jpg',
 title: 'Image1',
 description: 'sample recepie description1',

},
{
 img: 'https://i.imgur.com/eTuCPxM.jpg',
 title: 'Image2',
 description: 'sample recepie description2',

},
{
 img: 'https://i.imgur.com/eTuCPxM.jpg',
 title: 'Image3',
 description: 'sample recepie description3',

},
{
  img: 'https://i.imgur.com/eTuCPxM.jpg',
  title: 'Image',
  description: 'sample recepie description',

},
{
 img: 'https://i.imgur.com/eTuCPxM.jpg',
 title: 'Image1',
 description: 'sample recepie description1',

},
{
 img: 'https://i.imgur.com/eTuCPxM.jpg',
 title: 'Image2',
 description: 'sample recepie description2',

},
{
 img: 'https://i.imgur.com/eTuCPxM.jpg',
 title: 'Image3',
 description: 'sample recepie description3',

},
 ];

class ResultsGridList extends React.Component {


  render() {
    const { classes, width } = this.props;
    let columns = 4;
    
    if (width === 'xs') {
      columns = 2;

    }
    if (width === 'sm') {
      columns = 3;
    }
    

  return (
    <div className={classes.root}>
      <GridList cellHeight={180}  cols={columns} className={classes.gridList}>
         <GridListTile key="Subheader" cols={columns} style={{ height: 'auto' }}>
          <ListSubheader component="div">Search Results...</ListSubheader>
        </GridListTile>
        {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>{tile.description}</span>}
              actionIcon={
                <IconButton className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
}

ResultsGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withWidth()(withStyles(styles)(ResultsGridList));
