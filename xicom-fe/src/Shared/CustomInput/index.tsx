import { FormControl, TextField } from "@mui/material";
import classNames from "classnames";
import { ChangeEvent, FC } from "react";

interface CustomInputProps {
  type?: string;
  value?: string | number;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  className?: string;
  name?: string;
  formik?: any;
  onBlur?: () => void;
  required?: boolean;
  fullWidth?:boolean
}

/**
 * CustomInput component for handling form inputs with Material-UI TextField.
 *
 * @component
 * @param {CustomInputProps} props - Component props
 * @param {string} [props.type=""] - Type of input field
 * @param {string|number} [props.value] - Value of input field
 * @param {Function} [props.onChange] - onChange event handler for input field
 * @param {string} [props.label=""] - Label for input field
 * @param {string} [props.placeholder=""] - Placeholder for input field
 * @param {string} [props.className=""] - Additional class names for styling
 * @param {string} [props.name=""] - Name of the input field
 * @param {object} [props.formik] - Formik context for handling form state
 * @param {Function} [props.onBlur] - onBlur event handler for input field
 * @param {boolean} [props.required=false] - Indicates if the input is required
 * @param {boolean} [props.fullWidth=true] - fullWidth
 * @returns {JSX.Element} - Rendered CustomInput component
 */
const CustomInput: FC<CustomInputProps> = ({
  type = "",
  value,
  onChange,
  label = "",
  placeholder="",
  className = "",
  name = "",
  formik,
  onBlur,
  required = false,
  fullWidth = true,
  ...rest
}): JSX.Element => {
  const selectedValue = formik?.values[name] ?? value;
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (formik) {
      formik.handleChange(event);
    } else if (onChange) {
      onChange(event);
    }
  };

  const handleBlur = () => {
    if (formik) {
      formik.handleBlur(name);
    } else if (onBlur) {
      onBlur();
    }
  };

  return (
    <FormControl fullWidth={fullWidth} className="flex flex-col justify-center">
      {label && (
        <p className="py-1 font-semibold whitespace-nowrap">
          {label}
          {required && <span className="text-red-600">*</span>}
        </p>
      )}
      <TextField
        fullWidth
        name={name}
        type={type}
        placeholder={placeholder}
        inputProps={{
          className: type === "file" ? `!pt-1.5 !pl-1.5 !pb-3` : "",
        }}
        size="small"
        error={formik?.errors?.[name] && formik?.touched?.[name]}
        onBlur={handleBlur}
        helperText={formik?.touched?.[name] && formik?.errors?.[name]}
        value={selectedValue}
        onChange={handleChange}
        className={classNames("", className)}
        {...rest}
      />
    </FormControl>
  );
};

export default CustomInput;
