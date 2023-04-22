import React,{ useState} from 'react'
import AppBar from '@mui/material/AppBar';
import { Button, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DrawerComp from './DrawerComp';

const Header = () => {
    const [value, setValue] = useState();

    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));

    const pages = ["Home", "About", "Products", "Contact Us"];
  return (
    <>
        
        <AppBar sx={{ background: '#063970' }}>
            <Toolbar>
            <ShoppingCartIcon />
            {
                isMatch ? (
                    <>
                        <Typography sx={{fontSize: '1.5rem', paddingLeft: '10%'}}>
                            SHOPEE
                        </Typography>
                        <DrawerComp />
                    </>
                ) : (
                    <>
                         <Tabs sx={{marginLeft: 'auto'}} textColor="inherit" value={value} onChange={(e,value)=>setValue(value)} indicatorColor='secondary'>
                            {
                                pages.map((page, index)=> (
                                    <Tab key={index} lable={page} />
                                ))
                            }
                            {/* <Tab lable="Home" />
                            <Tab lable="About" />
                            <Tab lable="Products" />
                            <Tab lable="Contact Us" /> */}
                        </Tabs>

                        <Button sx={{marginLeft: "auto"}} variant='contained'>Login</Button>
                        <Button sx={{marginLeft: "10px"}} variant='contained'>SignUp</Button>
                        {/* <Typography>
                            LOGO
                        </Typography> */}
                    </>
                )
            }
           
            </Toolbar>
        </AppBar>
    </>
  )
}

export default Header