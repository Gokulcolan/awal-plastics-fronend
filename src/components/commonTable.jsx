import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import "../pages/SD/sales/contact-informations/contactInformation.scss";
import VerifiedIcon from "@mui/icons-material/Verified";

function CommonTable(props) {
  const { rows, columns, customStyles, modalOpen } = props;
  return (
    <div>
      <Paper elevation={0}>
        <TableContainer style={customStyles?.tableContainer}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns?.map((column) => (
                  <TableCell
                    key={column.id}
                    style={customStyles?.tableHeaderCell}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={columns.length}>
                    There are no records to display
                  </TableCell>
                </TableRow>
              ) : (
                rows.map((row, rowIndex) => (
                  <TableRow
                    key={rowIndex}
                    style={
                      rowIndex % 2 === 0
                        ? customStyles.tableRowEven
                        : customStyles.tableRowOdd
                    }
                  >
                    {columns.map((column) => {
                      return (
                        <TableCell
                          key={column.id}
                          style={customStyles?.tableCell}
                        >
                          <>
                            {/* this condition is only for buttons in contact info table and for verified icons */}
                            {column.id === "isVerified" ? (
                              row[column.id] === "true" ? (
                                <span
                                  style={{ fontSize: "12px", fontFamily: "" }}
                                >
                                  <VerifiedIcon
                                    sx={{ color: "#00d566", fontSize: "14px" }}
                                  />
                                  Sijilat Verified
                                </span>
                              ) : (
                                ""
                              )
                            ) : column.id === "Type" ? (
                              <button
                                className="tableBtn"
                                style={{
                                  backgroundColor:
                                    row[column.id] === "Lead"
                                      ? "#d8faed"
                                      : "#fff6df",
                                  color:
                                    row[column.id] === "Lead"
                                      ? "#22a06f"
                                      : "#ffc121",
                                }}
                                onClick={() => {
                                  modalOpen(true);
                                }}
                              >
                                {row[column.id]}
                              </button>
                            ) : (
                              // table Value
                              row[column.id]
                            )}
                          </>
                        </TableCell>
                      )
                    })}
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}

export default CommonTable;
