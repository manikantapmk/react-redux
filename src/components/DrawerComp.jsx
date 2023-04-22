import { Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import React, {useState} from 'react'

const DrawerComp = () => {
    const [openDrawer, setOpenDrawer] = useState(false)

    const pages = ["Home", "About", "Products", "Contact Us", "Login", "signUp"];


  return (
    <>
       <Drawer open={openDrawer} onClose={()=> setOpenDrawer(false)}>
        <List>
            {
                pages.map((page, index)=>(
                    <ListItemButton onClick={()=>setOpenDrawer(false)} key={index}>
                        <ListItemIcon>
                            <ListItemText>
                                {page}
                            </ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                ))
            }
            
        </List>

        </Drawer> 
        <IconButton sx={{color: 'white', marginLeft: 'auto'}} onClick={()=> setOpenDrawer(!openDrawer)}>
            <MenuIcon />
        </IconButton>
    </>
  )
}

export default DrawerComp