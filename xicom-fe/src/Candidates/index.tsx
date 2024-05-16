import {
  Button,
  Divider,
  IconButton,
  Skeleton,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import axiosInstance from "Configs/axios";
import AddIcon from "Resources/AddIcon";
import EditIcon from "Resources/EditIcon";
import CustomInput from "Shared/CustomInput";
import CustomTableCell from "Shared/CustomTableCell";
import useRandomArray from "Shared/useRandomArray";
import moment from "moment";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface candidatesProps {
  first_name: string;
  last_name: string;
  email: string;
  dob: string;
  residential_address_one: string;
  residential_address_two: string;
  same_as_residential: boolean;
  permanent_address_one: string;
  permanent_address_two: string;
  documents: Document[];
}
const Candidates = () => {
  const [candidates, setCandidates] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const getCandidatesFn = async () => {
    setIsLoading(true);
    try {
      const response = await axiosInstance.get("candidates");
      setCandidates(response.data.candidates);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCandidatesFn();
  }, []);
  return (
    <div className="bg-white rounded-lg shadow h-full w-[84vw]">
      <div className="flex justify-between items-center p-2">
        <CustomInput
          fullWidth={false}
          value={search}
          placeholder="Search Candidates"
          onChange={(event) => setSearch(event.target.value)}
          className="!w-72"
        />
        <Button
          onClick={() => navigate("/manage-candidates")}
          variant="contained"
          size="small"
          className="!whitespace-nowrap"
          startIcon={<AddIcon />}
        >
          Add Candidates
        </Button>
      </div>
      <Divider />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <CustomTableCell isHead>First Name</CustomTableCell>
              <CustomTableCell isHead>Last Name</CustomTableCell>
              <CustomTableCell isHead>Email</CustomTableCell>
              <CustomTableCell isHead>Date Of Birth</CustomTableCell>
              <CustomTableCell isHead>Residential Address 1</CustomTableCell>
              <CustomTableCell isHead>Residential Address 2</CustomTableCell>
              <CustomTableCell isHead>Permanent Address 1</CustomTableCell>
              <CustomTableCell isHead>Permanent Address 2</CustomTableCell>
              <CustomTableCell isHead>Action</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading
              ? useRandomArray(0, 10).map((i) => (
                  <TableRow key={i}>
                    {useRandomArray(0, 9).map((i) => (
                      <CustomTableCell key={i}>
                        <Skeleton />
                      </CustomTableCell>
                    ))}
                  </TableRow>
                ))
              : candidates
                  ?.filter((i: { first_name: string }) =>
                    i.first_name.toLowerCase().includes(search.toLowerCase())
                  )
                  ?.map((candidate: candidatesProps, index: number) => {
                    return (
                      <TableRow key={index}>
                        <CustomTableCell>
                          {candidate.first_name}
                        </CustomTableCell>
                        <CustomTableCell>{candidate.last_name}</CustomTableCell>
                        <CustomTableCell>{candidate.email}</CustomTableCell>
                        <CustomTableCell>
                          {moment(candidate.dob).format("ll")}
                        </CustomTableCell>
                        <CustomTableCell>
                          {candidate.residential_address_one}
                        </CustomTableCell>
                        <CustomTableCell>
                          {candidate.residential_address_two}
                        </CustomTableCell>
                        <CustomTableCell>
                          {candidate.permanent_address_one}
                        </CustomTableCell>
                        <CustomTableCell>
                          {candidate.permanent_address_two}
                        </CustomTableCell>
                        <CustomTableCell>
                          <IconButton size="small">
                            <EditIcon />
                          </IconButton>
                        </CustomTableCell>
                      </TableRow>
                    );
                  })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Candidates;
