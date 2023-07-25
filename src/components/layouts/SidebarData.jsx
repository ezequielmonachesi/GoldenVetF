import React from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PetsIcon from '@mui/icons-material/Pets';
import CommentIcon from '@mui/icons-material/Comment';



 const SidebarData = [
    {
        titulo: "Turnos",
        icono: <AccessTimeIcon/>,
        link:"/#"
    },
    {
        titulo: "Pacientes",
        icono: <PetsIcon/> ,
        link:"/#"
    },
    {
        titulo: "Inicio",
        icono: <CommentIcon/> ,
        link:"/#"
    }
]
export default SidebarData;

