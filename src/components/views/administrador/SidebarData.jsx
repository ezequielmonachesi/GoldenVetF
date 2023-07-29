import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PetsIcon from "@mui/icons-material/Pets";
import CommentIcon from "@mui/icons-material/Comment";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import InventoryIcon from "@mui/icons-material/Inventory";

const SidebarData = [
  {
    titulo: "Comentarios",
    icono: <CommentIcon className="fs-1" />,
    link: "/admin/comentarios/",
  },
  {
    titulo: "Pacientes",
    icono: <PetsIcon className="fs-1" />,
    link: "/admin/pacientes/",
  },
  {
    titulo: "Productos",
    icono: <InventoryIcon className="fs-1" />,
    link: "/admin/productos/",
  },
  {
    titulo: "Servicios",
    icono: <MedicalInformationIcon className="fs-1" />,
    link: "/admin/servicios/",
  },
  {
    titulo: "Turnos",
    icono: <AccessTimeIcon className="fs-1" />,
    link: "/admin/turnos/",
  },

  {
    titulo: "Usuarios",
    icono: <ManageAccountsIcon className="fs-1" />,
    link: "/admin/usuarios/",
  },
];
export default SidebarData;
