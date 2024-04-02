import { useState } from "react";
import CommonTable from "@/components/commonTable";
import { bolTableData } from "../../utils/commonData";

const BolTable = () => {
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
  return (
    <>
      <div >
        <CommonTable
          columns={[
            {
              id: "SNo",
              label: "S.No",
              minWidth: "auto",
            },
            {
              id: "letter",
              label: "Letter",
              minWidth: "auto",
            },

            {
              id: "SIZE_mm",
              label: "SIZE mm",
              minWidth: "auto",
            },
            {
              id: "Water",
              label: "Water Jet (Min)",
              minWidth: "auto",
            },
            {
              id: "DieMaking",
              label: "Die Making (Min)",
              minWidth: "auto",
            },
            {
              id: "Fabrication",
              label: "Fabrication (Min)",
              minWidth: "auto",
            },

            {
              id: "Electrical",
              label: "Electrical (Min)",
              minWidth: "auto",
            },
            {
              id: "Painting",
              label: "Painting (Min)",
              minWidth: "auto",
            },
            {
              id: "Laser",
              label: "Laser (Min)",
              minWidth: "auto",
            },
            {
              id: "Plastics",
              label: "Plastics (Min)",
              minWidth: "auto",
            },
            {
              id: "Vinyl",
              label: "Vinyl (Min)",
              minWidth: "auto",
            },
            {
              id: "Assembly",
              label: "Assembly (Min)",
              minWidth: "auto",
            },
            {
              id: "install",
              label: "Install (Min)",
              minWidth: "auto",
            },
          ]}
          rows={bolTableData}
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
              padding: "10px",
            },
            tableRowEven: {
              backgroundColor: "#EBF0FF",
            },
            tableRowOdd: {
              backgroundColor: "white",
            },
            tableCell: {
              color: "black",
              padding: "15px",
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
      </div>
    </>
  );
};

export default BolTable;
