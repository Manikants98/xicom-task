import React, { ReactNode } from "react";
import { TableCell, TableCellProps } from "@mui/material";
import classNames from "classnames";

interface CustomTableCellProps extends TableCellProps {
  className?: string;
  children: ReactNode;
  isHead?: boolean;
  isCentered?: boolean;
  customPadding?: number;
}

const CustomTableCell: React.FC<CustomTableCellProps> = ({
  className = "",
  children,
  isHead = false,
  isCentered = true,
  customPadding = 1,
  ...rest
}) => {
  return (
    <TableCell
      className={classNames(
        "!border-r !whitespace-nowrap",
        isHead && "!font-bold !border-white !p-2 !bg-gray-200",
        isCentered && "!text-center",
        `!p-${customPadding}`,
        className
      )}
      {...rest}
    >
      {children}
    </TableCell>
  );
};

export default CustomTableCell;
