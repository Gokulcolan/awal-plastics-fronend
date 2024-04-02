import { useState } from "react";
import CommonTable from "@/components/commonTable";
import { bomData } from "../../utils/commonData";


const BomTable = () => {
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
      <div style={{ padding: "10px 0px 20px 0px" }}>
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
              id: "Size_mml",
              label: "Size mm (L)",
              minWidth: "auto",
            },
            {
              id: "vinyl",
              label: "VINYL",
              minWidth: "auto",
            },
            {
              id: "RMeter",
              label: "R.Meter",
              minWidth: "auto",
            },

            {
              id: "LEDStripe",
              label: "LED R.Meter (Front LIT )Strip",
              minWidth: "auto",
            },
            {
              id: "LEDModule",
              label: "LED R.Meter (Front LIT )Module",
              minWidth: "auto",
            },
            {
              id: "SheetSize",
              label: "Sheet Size(mm)",
              minWidth: "auto",
            },
            {
              id: "Alu_Nesting",
              label: "Alu-Nesting Size",
              minWidth: "auto",
            },
            {
              id: "Plywood",
              label: "Plywood Nesting Size",
              minWidth: "auto",
            },
            {
              id: "Durafoam",
              label: "Durafoam Nesting Size",
              minWidth: "auto",
            },
            {
              id: "GINesting",
              label: "GI Nesting Size",
              minWidth: "auto",
            },
            {
              id: "ForSign",
              label: "For Sign",
              minWidth: "auto",
            },
            {
              id: "Upto",
              label: "Upto 1000",
              minWidth: "auto",
            },
            {
              id: "Above",
              label: "Above 1000",
              minWidth: "auto",
            },
            {
              id: "total",
              label: "Total",
              minWidth: "auto",
            },
          ]}
          customStyles={{
            tableContainer: {
              boxShadow: "none",
            },
            tableHeaderCell: {
              fontWeight: "bold",
              backgroundColor: "#0071B9",
              color: "white",
              fontWeight: "bold",
              fontSize: "14px",
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
              padding: "10px",
              borderBottom: "0px",
              fontSize: "14px",
              fontWeight: "bold",
            },
          }}
          rows={bomData}
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

export default BomTable;
