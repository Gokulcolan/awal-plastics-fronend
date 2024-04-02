import { Table, TableCell, TableHead, TableRow } from "@mui/material";
import React from "react";
import "./tableCommonStyle.scss";

const TotalSingleTable = ({ totalHead, totalData, bgcolor }) => {
  return (
    <>
      <Table
        style={{ backgroundColor: `${bgcolor}` }}
        className="totalTableMain"
      >
        <TableHead>
          <TableRow>
            <TableCell className="totalHeadCell">{totalHead}</TableCell>
            <TableCell className="totalDataCell">{totalData}</TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </>
  );
};

export default TotalSingleTable;
