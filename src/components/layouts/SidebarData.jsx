import React from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PetsIcon from '@mui/icons-material/Pets';
import CommentIcon from '@mui/icons-material/Comment';



 const SidebarData = [
    {
        titulo: "Turnos",
        icono: <AccessTimeIcon/>,
        link:"admin/turnos/"
    },
    {
        titulo: "Pacientes",
        icono: <PetsIcon/> ,
        link:"admin/pacientes/"
    },
    {
        titulo: "Comentarios",
        icono: <CommentIcon/> ,
        link:"admin/comentarios/"
    }
]
export default SidebarData;

