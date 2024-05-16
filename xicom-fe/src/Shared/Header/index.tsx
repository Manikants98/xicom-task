import { Avatar } from "@mui/material";

const Header = () => {
  return (
    <div className="bg-white flex items-center justify-between rounded-lg shadow h-[10vh] px-5">
      <p className="text-xl font-semibold">Candidates</p>
      <Avatar alt="M" src="hbihiu" />
    </div>
  );
};

export default Header;
