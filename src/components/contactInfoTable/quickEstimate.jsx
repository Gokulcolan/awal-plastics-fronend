import { useState } from "react";
import CommonTable from "../../components/commonTable";
import {
  labourSecondData,
  labourTimeData,
  summaryData,
  templateData,
} from "../../utils/commonData";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import TotalSingleTable from "@/pages/SD/sales/contact-informations/totalSingleTable";
import "./contactInfoTable.scss";

const QuickEstimateTable = () => {
  const [size, setSize] = useState(0);
  const [page, setPage] = useState(5);

  const paginationRowsOptions = [5, 10, 20, 50, 100];

  const handlePerRowsChange = async (event) => {
    setPage(+event.target.value);
    setSize(0);
  };
  const handlePageChange = async (event, newPage) => {
    setPage(newPage);
  };

  const customStyles = {
    tableHead: {
      color: "black",
      fontWeight: "550",
      fontSize: "16px",
      lineHeight: 1.75,
      textTransform: "capitalize",
      padding: "10px",
    },
    tableCell: {
      color: "black",
      padding: "10px",
      fontSize: "14px",
    },
    tableRowEven: {
      backgroundColor: "#FDF5CF",
    },
    tableRowOdd: {
      backgroundColor: "white",
    },
  };

  return (
    <>
      {/* 1 st table */}
      <div>
        <div style={{}}>
          <CommonTable
            columns={[
              {
                id: "ma",
                label: "MA Ts",
                minWidth: "auto",
              },
              {
                id: "material",
                label: "Material",
                minWidth: "auto",
              },

              {
                id: "plant",
                label: "Plant",
                minWidth: "auto",
              },
              {
                id: "plantquantity",
                label: "Quantity",
                minWidth: "auto",
              },
              {
                id: "description",
                label: "Description",
                minWidth: "auto",
              },
              {
                id: "empty",
                label: "",
                minWidth: "auto",
              },
              {
                id: "unit",
                label: "Unit",
                minWidth: "auto",
              },

              {
                id: "unitquantity",
                label: "Quantity",
                minWidth: "auto",
              },
              {
                id: "uCost",
                label: "U/Cost BD",
                minWidth: "auto",
              },
              {
                id: "totalCost",
                label: "Total Cost(BD)",
                minWidth: "auto",
              },
            ]}
            customStyles={{
              tableContainer: {
                boxShadow: "none",
              },
              tableHeaderCell: {
                fontWeight: "bold",
                backgroundColor: "#FF1540",
                color: "white",
                fontWeight: "bold",
                fontSize: "14px",
                lineHeight: 1.75,
                textTransform: "capitalize",
                padding: "15px",
              },
              tableRowEven: {
                backgroundColor: "#FDDBE2",
              },
              tableRowOdd: {
                backgroundColor: "white",
              },
              tableCell: {
                color: "black",
                padding: "13px",
                borderBottom: "0px",
                fontSize: "12px",
                fontWeight: "600",
              },
            }}
            rows={templateData}
            paginationStatus={true}
            rowsPerPageOptions={paginationRowsOptions}
            page={page}
            size={size}
            handleChangePage={handlePageChange}
            handleChangeRowsPerPage={handlePerRowsChange}
          />
        </div>
        <br />
        <div>
          <TotalSingleTable
            totalHead={"Material Cost"}
            totalData={"274.701"}
            bgcolor={"#FF1540"}
          />
        </div>
      </div>

      {/* 2 nd table */}
      <div style={{ marginTop: "40px" }}>
        <div style={{ paddingTop: "30px" }}>
          <Typography sx={{ fontWeight: "bold" }} variant="h6">
            Labour Time & Cost
          </Typography>
        </div>
        <div style={{ paddingTop: "30px" }}>
          <CommonTable
            columns={[
              {
                id: "act",
                label: "ACTI",
                minWidth: "auto",
              },
              {
                id: "dept",
                label: "Dept.#",
                minWidth: "auto",
              },

              {
                id: "lm",
                label: "L/M",
                minWidth: "auto",
              },
              {
                id: "lmtime",
                label: "Time(HR)",
                minWidth: "auto",
              },
              {
                id: "department",
                label: "Department",
                minWidth: "auto",
              },
              {
                id: "hrs",
                label: "hrs/each",
                minWidth: "auto",
              },
              {
                id: "hrstime",
                label: "Time(HR)",
                minWidth: "auto",
              },

              {
                id: "ten",
                label: "10% Added",
                minWidth: "auto",
              },
              {
                id: "direct",
                label: "Direct Labour Cost",
                minWidth: "auto",
              },
              {
                id: "totalDirect",
                label: "Total Direct(BD)",
                minWidth: "auto",
              },
            ]}
            customStyles={{
              tableContainer: {
                boxShadow: "none",
              },
              tableHeaderCell: {
                fontWeight: "bold",
                backgroundColor: "orange",
                color: "white",
                fontWeight: "bold",
                fontSize: "14px",
                lineHeight: 1.75,
                textTransform: "capitalize",
                padding: "15px",
              },
              tableRowEven: {
                backgroundColor: "#FDF5CF",
              },
              tableRowOdd: {
                backgroundColor: "white",
              },
              tableCell: {
                color: "black",
                padding: "13px",
                borderBottom: "0px",
                fontSize: "14px",
                fontWeight: "bold",
              },
            }}
            rows={labourTimeData}
            paginationStatus={true}
            rowsPerPageOptions={paginationRowsOptions}
            page={page}
            size={size}
            handleChangePage={handlePageChange}
            handleChangeRowsPerPage={handlePerRowsChange}
          />
        </div>
        <div className="quick_second_table">
          <div style={{ width: "40%" }}>
            <Table>
              <TableBody>
                {labourSecondData?.map((l, index) => {
                  const isEvenRow = index % 2 === 0;
                  const rowStyle = isEvenRow
                    ? customStyles.tableRowEven
                    : customStyles.tableRowOdd;

                  return (
                    <>
                      <TableRow key={index} style={rowStyle}>
                        <TableCell
                          className="comp_th"
                          style={customStyles.tableHead}
                        >
                          Total Cost
                        </TableCell>
                        <TableCell
                          className="comp_td"
                          style={customStyles.tableCell}
                        >
                          {l?.totalCost}
                        </TableCell>
                      </TableRow>
                      <TableRow
                        key={index + 2}
                        style={{ backgroundColor: "white" }}
                      >
                        <TableCell
                          className="comp_th"
                          style={customStyles.tableHead}
                        >
                          Material Cost & Labour Cost (A+B)
                        </TableCell>
                        <TableCell
                          className="comp_td"
                          style={customStyles.tableCell}
                        >
                          {l?.materialCost}
                        </TableCell>
                      </TableRow>
                      <TableRow key={index + 2} style={rowStyle}>
                        <TableCell
                          className="comp_th"
                          style={customStyles.tableHead}
                        >
                          Add On 5% Variation
                        </TableCell>
                        <TableCell className="comp_td">{l?.addOn}</TableCell>
                      </TableRow>
                      <TableRow
                        key={index + 3}
                        style={{ backgroundColor: "white" }}
                      >
                        <TableCell
                          className="comp_th"
                          style={customStyles.tableHead}
                        >
                          Total Material & Labour Cost
                        </TableCell>
                        <TableCell className="comp_td">
                          {l?.totalMaterial}
                        </TableCell>
                      </TableRow>
                    </>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

      {/* 3 rd table */}
      <div style={{}}>
        <div>
          <Typography
            sx={{ paddingTop: "20px", fontWeight: "bold" }}
            variant="h6"
          >
            Summary
          </Typography>
        </div>
        <div style={{ paddingTop: "20px" }}>
          <CommonTable
            columns={[
              {
                id: "description",
                label: "Description",
                minWidth: "auto",
              },
              {
                id: "totalunit",
                label: "Total Unit Cost",
                minWidth: "auto",
              },

              {
                id: "percentage",
                label: "Percentage Profit",
                minWidth: "auto",
              },
              {
                id: "profit",
                label: "Profit Markup",
                minWidth: "auto",
              },
              {
                id: "price",
                label: "Price BD",
                minWidth: "auto",
              },
            ]}
            rows={summaryData}
            customStyles={{
              tableContainer: {
                boxShadow: "none",
              },
              tableHeaderCell: {
                fontWeight: "bold",
                backgroundColor: "#0071B9",
                color: "white",
                fontWeight: "bold",
                fontSize: "16px",
                lineHeight: 1.75,
                textTransform: "capitalize",
                padding: "15px",
              },
              tableRowEven: {
                backgroundColor: "#EBF0FF",
              },
              tableRowOdd: {
                backgroundColor: "white",
              },
              tableCell: {
                color: "black",
                padding: "13px",
                borderBottom: "0px",
                fontSize: "14px",
                fontWeight: "bold",
              },
            }}
            paginationStatus={true}
            rowsPerPageOptions={paginationRowsOptions}
            page={page}
            size={size}
            handleChangePage={handlePageChange}
            handleChangeRowsPerPage={handlePerRowsChange}
          />
          <div style={{ paddingTop: "20px" }}>
            <TotalSingleTable
              totalHead={"Unit Price"}
              totalData={"603.000"}
              bgcolor={"#0071B9"}
            />
          </div>
        </div>
      </div>

      <div className="tab-btn">
        <Button
          style={{
            backgroundColor: "#ff1540",
            textTransform: "none",
            fontWeight: "bold",
          }}
          variant="contained"
          className="closeBtn"
        >
          Close
        </Button>
      </div>
    </>
  );
};

export default QuickEstimateTable;
