import React, { ChangeEvent } from "react";
import { Button, FormControl, Typography } from "@mui/material";
import UploadIcon from "Resources/UploadIcon";

interface CustomFileInputProps {
  required?: boolean;
  name?: string;
  formik: any;
  label?: string;
  accept?: string;
  value?: string;
  disabled?: boolean;
}

const CustomFileInput: React.FC<CustomFileInputProps> = ({
  required = false,
  name,
  formik,
  label,
  accept,
  value,
  disabled = false,
}) => {
  return (
    <FormControl fullWidth className="flex flex-col">
      <label htmlFor={name} className="py-1 font-semibold whitespace-nowrap">
        {label}
        {required && <span className="text-red-600">*</span>}
      </label>
      <Button
        component="label"
        variant="outlined"
        size="medium"
        disabled={disabled}
        className="!w-full !h-10 !justify-between"
        endIcon={<UploadIcon />}
      >
        <Typography>{value || "Choose File"}</Typography>
        <input
          id={name}
          type="file"
          hidden
          accept={accept}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            formik.setFieldValue(name, event.currentTarget.files![0])
          }
          aria-label={`Upload ${label}`}
          aria-required={required}
          aria-disabled={disabled}
        />
      </Button>
    </FormControl>
  );
};

export default CustomFileInput;
