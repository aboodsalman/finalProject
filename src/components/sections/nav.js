import {Link} from 'react-router-dom';
import './nav.css'
import { Grid   , makeStyles , Typography  , AppBar , Toolbar , Button } from '@material-ui/core'
import logo from '../../assets/logo.png'
import Tooltip from '@material-ui/core/Tooltip';

function Nav() {

  const useStyles = makeStyles({
    Appbar : {
        'background-color' : '#1b1c19' , 
        height : '77px',
        border: '1px solid #1b1c19',
        'border-bottom-color': '#fcd462'
      } , 
      text : {
        'font-size' : '20px' , 
         color : 'white' , 
         'font-weight' : 'bold'
      } ,

       li : {
        display: 'inline-block' , 
        color : 'white' , 
        padding :'20px' , 
        'font-size': '17px' ,
        fontFamily: 'Segoe UI',
        borderLeft: '0.5px solid #333333'
    },
    upload : {
      textDecoration: 'none',
      position: 'absolute',
      marginTop: '-50px',
      marginLeft: '920px',
      padding: '10px',
      borderRadius: '10px',
      backgroundColor: '#fcd462',
      color: '#333333'  
    },
    
})
const classes = useStyles()

  return (
    <Grid container>
        <AppBar className={classes.Appbar}>
          <Toolbar>
          <nav>
       
       <ul className="tap">
         <img src={logo} style={{
         width: '230px',
         position: 'absolute',
         marginTop: '-40px',
         marginLeft: '-240px'
         }}/>
         <Tooltip>
       <Link to ='/'>
            <li className = {classes.li}>
            Login</li>
        </Link></Tooltip>

        <Tooltip>
        <Link to ='/all'>
            <li className = {classes.li}>
            All</li>
        </Link></Tooltip>

        <Tooltip>
      <Link to ='/computer'>
            <li className = {classes.li}>
            Computers</li>
        </Link></Tooltip>

        <Tooltip>
        <Link to ='/mobile'>
            <li className = {classes.li}>
            Cell Phones</li>
        </Link></Tooltip>

        <Tooltip>
        <Link to ='/tv'>
            <li className = {classes.li}>
            TV's</li>
        </Link></Tooltip>

        <Tooltip>
        <Link to ='/cameras'>
            <li className = {classes.li}>
            Cameras</li>
        </Link></Tooltip>

        <Tooltip>
        <Link to ='/game'>
            <li className = {classes.li}>
            Video Game Consoles</li>
        </Link></Tooltip>

        <Tooltip>
        <Link to ='/accessories'>
            <li className = {classes.li}>
            Accessories</li>
        </Link></Tooltip>
        <Link to ='/ubload'>
            <p className = {classes.upload}>
            + Ubload Your Product</p>
        </Link>
       </ul>
   </nav>

          </Toolbar>
          </AppBar>
        </Grid>

  );
}

export default Nav;
