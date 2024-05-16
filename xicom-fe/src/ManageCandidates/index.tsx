import {
  Button,
  Checkbox,
  FormControl,
  IconButton,
  MenuItem,
  Select,
} from "@mui/material";
import axiosInstance from "Configs/axios";
import AddIcon from "Resources/AddIcon";
import CloseIcon from "Resources/CloseIcon";
import DeleteIcon from "Resources/DeleteIcon";
import { validationSchema } from "Schemas";
import CustomFileInput from "Shared/CustomFileInput";
import CustomInput from "Shared/CustomInput";
import { useFormik } from "formik";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Document {
  file_name: string;
  file_type: string;
  file: File | null;
}

interface FormValues {
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

const ManageCandidates = () => {
  const navigate = useNavigate();
  const initialValues: FormValues = {
    first_name: "",
    last_name: "",
    email: "",
    dob: "",
    residential_address_one: "",
    residential_address_two: "",
    same_as_residential: false,
    permanent_address_one: "",
    permanent_address_two: "",
    documents: [
      { file_name: "", file_type: "", file: null },
      { file_name: "", file_type: "", file: null },
    ],
  };

  const addCandidateFn = async (reqBody: any) => {
    try {
      const response = await axiosInstance.post("candidates", reqBody);
      console.log(response.data);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      addCandidateFn(values);
    },
  });

  const isSameAsResidential = formik.values.same_as_residential;
  const residential_address_one = formik.values.residential_address_one;
  const residential_address_two = formik.values.residential_address_two;

  useEffect(() => {
    if (isSameAsResidential) {
      formik.setFieldValue("permanent_address_one", residential_address_one);
      formik.setFieldValue("permanent_address_two", residential_address_two);
    } else {
      formik.setFieldValue("permanent_address_one", "");
      formik.setFieldValue("permanent_address_two", "");
    }
  }, [isSameAsResidential]);

  const handleMoreDocumentField = () => {
    formik.setFieldValue("documents", [
      ...formik.values.documents,
      { file_name: "", file_type: "", file: null },
    ]);
  };

  const handleDeleteDocumentField = (index: number) => {
    if (index === 1) return alert("Please upload at least 2 documents.");
    const documents = formik.values.documents?.filter((_, i) => i !== index);
    formik.setFieldValue("documents", documents);
  };

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col gap-1 w-[84vw]"
      encType="multipart/form-data"
    >
      <div className="flex justify-between bg-white rounded-lg p-2 items-center shadow">
        <p className="font-bold">MERN STACK MACHINE TEST</p>
        <IconButton onClick={() => navigate(-1)}>
          <CloseIcon />
        </IconButton>
      </div>

      <div className="overflow-y-auto flex flex-col h-[80vh] p-5 bg-white rounded-lg shadow">
        <div className="grid grid-cols-2 gap-5">
          <CustomInput
            name="first_name"
            label="First Name"
            formik={formik}
            required
          />
          <CustomInput
            name="last_name"
            label="Last Name"
            formik={formik}
            required
          />
          <CustomInput name="email" label="Email" formik={formik} required />
          <CustomInput
            name="dob"
            label="Date of Birth"
            type="date"
            formik={formik}
            required
          />
        </div>
        <p className="font-bold">Residential Address</p>
        <div className="grid grid-cols-2 gap-5">
          <CustomInput
            name="residential_address_one"
            label="Street 1"
            formik={formik}
            required
          />
          <CustomInput
            name="residential_address_two"
            label="Street 2"
            formik={formik}
            required
          />
        </div>
        <div className="flex font-bold items-center gap-2">
          <Checkbox
            size="small"
            checked={formik.values.same_as_residential}
            onChange={(event) =>
              formik.setFieldValue("same_as_residential", event.target.checked)
            }
          />
          <p>Same as Residential Address</p>
        </div>
        <p className="font-bold">Permanent Address</p>
        <div className="grid grid-cols-2 gap-5">
          <CustomInput
            name="permanent_address_one"
            label="Street 1"
            formik={formik}
          />
          <CustomInput
            name="permanent_address_two"
            label="Street 2"
            formik={formik}
          />
        </div>
        <p className="font-bold">Upload Documents</p>
        {formik.values.documents.map((document: any, index: number) => (
          <div key={index} className="flex items-end gap-5 w-full">
            <CustomInput
              name={`documents[${index}].file_name`}
              label="File Name"
              formik={formik}
              className="w-[30%]"
              required={index === 0 || index === 1}
            />

            <FormControl fullWidth className="flex flex-col">
              <p className="py-1 font-semibold whitespace-nowrap">
                Type Of File
                {(index === 0 || index === 1) && (
                  <span className="text-red-600">*</span>
                )}
              </p>
              <Select
                className="!w-full"
                size="small"
                name={`documents[${index}].file_type`}
                value={formik.values.documents[index].file_type || ""}
                onChange={(event) => {
                  const value = event.target.value as string;
                  formik.setFieldValue(`documents[${index}].file_type`, value);
                }}
              >
                <MenuItem value="Image">Image</MenuItem>
                <MenuItem value="PDF">PDF</MenuItem>
              </Select>
            </FormControl>

            <CustomFileInput
              formik={formik}
              disabled={!document.file_type}
              accept={
                document.file_type === "Image"
                  ? "image/jpeg"
                  : "application/pdf"
              }
              value={document?.file?.name}
              label="Upload Document"
              name={`documents[${index}].file`}
              required={index === 0 || index === 1}
            />
            {index === 0 ? (
              <Button
                variant="contained"
                size="medium"
                className="!h-10"
                onClick={() => handleMoreDocumentField()}
              >
                <AddIcon />
              </Button>
            ) : (
              <Button
                variant="outlined"
                size="medium"
                className="!h-10"
                onClick={() => handleDeleteDocumentField(index)}
              >
                <DeleteIcon />
              </Button>
            )}
          </div>
        ))}
        <div className="flex justify-center py-5">
          <Button
            className="!w-32 !h-12"
            color="primary"
            variant="contained"
            type="submit"
          >
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
};

export default ManageCandidates;
