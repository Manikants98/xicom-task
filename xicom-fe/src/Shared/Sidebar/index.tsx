import { List, ListItem, ListItemButton, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-full w-[15vw]">
      <List className="flex flex-col gap-1 h-full" disablePadding>
        <ListItem className="bg-white h-[10vh] shadow rounded-lg font-bold text-xl">
          Xicom Technlogies™
        </ListItem>
        <div className="bg-white shadow h-full rounded-lg p-1">
          <ListItemButton
            sx={{
              backgroundColor: useTheme().palette.primary.main,
              ":hover": {
                backgroundColor: useTheme().palette.primary.main,
              },
            }}
            onClick={() => navigate("/")}
            className="!rounded-lg !text-white"
          >
            Candidates
          </ListItemButton>
        </div>
      </List>
    </div>
  );
};

export default Sidebar;
