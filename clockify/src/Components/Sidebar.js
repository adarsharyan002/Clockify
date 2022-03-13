import Drawer from '@mui/material/Drawer';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { makeStyles } from '@mui/styles';
import { Routes, Route } from "react-router-dom";
import { useNavigate} from 'react-router-dom'

import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import {BsClock,BsCalendar4Week,BsPeople,BsTag,BsFileEarmarkText} from "react-icons/bs";
import {FaRegUserCircle} from "react-icons/fa"
import {MdOutlineDashboard,MdOutlineSettingsSuggest} from "react-icons/md"

import TimeTracker from '../Pages/TimeTracker'
import Calendar from '../Pages/Calendar'






const drawerWidth = 200

const useStyles = makeStyles((theme) => {
  return {
    page: {
      // background: 'white',
      width: '100%',
      padding: theme.spacing(1),

     
    },
    root: {
      display: 'flex',
    marginTop:'3rem',
      fontFamily:'Inter, sans-serif',

    },
    drawer: {
      width: drawerWidth,
      marginTop:'4rem',
      

      [theme.breakpoints.down(650)]: {
       width:'60px'
      },
      fontFamily:'Inter, sans-serif',

    },
    drawerPaper: {
        marginTop:'4rem',
     
  backgroundColor:'white',
      width: drawerWidth,
      [theme.breakpoints.down(650)]: {
       width:'60px',


      },

    },
    active: {
      background: '#F0BC5E'
    },
    title: {
      padding: theme.spacing(0.75),
      color: 'black',
      cursor:'pointer',
      [theme.breakpoints.down(650)]: {
        display:'none',

      },
      fontFamily:'Hind Siliguri, monospace',
      fontWeight:'900',


       fontSize:'1.5rem'
    },
   
    date: {
      flexGrow: 1
    },
    list:{
       display:'flex',
       flexDirection:'column',
       

       
    },

    icon:{
    //   color:"black",
      fontSize:'1.5rem',
      
    },
    icon02:{
      color:"black",
      width:'50px',
      
    },
    label:{
      color: 'black',
           // display:'none'
      [theme.breakpoints.down(650)]: {
        display:'none'
      },
      },
      heading:{
        //   margin:'1.2rem',
    //   color:'#757575',
    

    color:'blue',
    
          marginLeft:'3rem',
          [theme.breakpoints.down(650)]: {
            display:'none'
          },
      }


   
  }
})

export default function SideBar() {
  const classes = useStyles()
  
//   const location = useLocation()
  const navigate =useNavigate();

  const menuItems = [
    { 
      text: 'TIME TRACKER', 
      icon: <BsClock />,

      path: '/' 
    },

    { 
      text: 'CALENDER', 
      icon: <BsCalendar4Week />, 
      path: '/calendar' 
    },
    { 
        heading:'ANALYZE',
      text: 'DASHBOARD', 
      icon: <MdOutlineDashboard />, 
      path: '/' 
    },
    { 
      text: 'REPORTS', 
      icon: <FormatListBulletedIcon  />, 
      path: '/' 
    },
    { 
        heading:'MANAGE',
      text: 'PROJECTS', 
      icon: <BsFileEarmarkText  />, 
      path: '/' 
    },
    { 
        text: 'TEAMS', 
        icon: <BsPeople  />, 
        path: '/' 
      },
      { 
        text: 'CLIENT', 
        icon: <FaRegUserCircle  />, 
        path: '/' 
      },
      { 
        text: 'TAGS', 
        icon: <BsTag  />, 
        path: '/' 
      },
      { 
        text: 'SETTINGS', 
        icon: <MdOutlineSettingsSuggest />, 
        path: '/' 
      },

  ];

  return (
    <div className={classes.root}>
     

      {/* side drawer */}
      <Drawer
      
        className={classes.drawer}
        variant="permanent"
        classes={{ paper: classes.drawerPaper }}
        anchor="left"
        
      >
       

        {/* links/list section */}
        <List className={classes.list}>
          {menuItems.map((item,index) =>{
          
          return(
            <div key={index}>
                {item.heading?<p className={classes.heading} style={{ margin:'1rem',marginLeft:'2rem',color:'#757575',fontSize:'0.8rem'}}>{item.heading}</p>:null}
            <ListItem 
              button
              key={item.text} 
              onClick={() => navigate(item.path)}
            //   className={location.pathname == item.path ? classes.active : null}
            >
             
                
              <ListItemIcon  className={classes.icon}>{item.icon}</ListItemIcon>
              <ListItemText  className={classes.label} primary={item.text} />
              
            </ListItem>
            </div>
  )})}
        </List>        
      </Drawer>

    
     
      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        <Routes>
        <Route exact path="/" element={<TimeTracker />} />
        <Route exact path="/calendar" element={<Calendar />} />
        
        </Routes>
      </div>
    </div>
  )
}
