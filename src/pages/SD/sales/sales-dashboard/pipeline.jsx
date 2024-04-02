import { Card, CardContent, Typography } from "@mui/material";
import { cancelCard, pipelineCard } from "./commonData";

const Pipeline = ({ pipelineData, currentView }) => {
  return (
    <div className="pipeline_main">
      <div className="pipe_prod_card">
        <Typography sx={{ fontWeight: "600",fontSize:"20px" }} variant="h6">
          Pipelines Of Production Orders
        </Typography>
        <Card
          sx={{
            borderRadius: "20px",
            padding: "20px",
            width: "100",
            mt: 3,
            boxShadow:"0px 4px 20px 0px #6150E11A"
          }}
        >
          {pipelineData?.map((p) => {
            return (
              <>
                <CardContent
                  className="pipe_content"
                  sx={{ display: "flex",alignItems:"center", justifyContent: "space-between", padding:"5px 0"}}
                >
                  <Typography sx={{ fontWeight: "400", fontSize: "16px" }}>
                    {p?.label}
                  </Typography>
                  <Typography
                    sx={{
                      backgroundColor: "#F5F6F9",
                      padding: "12px",
                      borderRadius: "10px",
                      width: "50%",
                      textAlign: "center",
                      fontWeight: "500",
                      fontSize: "16px",
                    }}
                  >
                    {p?.count}
                  </Typography>
                </CardContent>
              </>
            );
          })}
        </Card>
      </div>
      {currentView === "daily" && (
        <div style={{ width: "48%" }}>
          <Typography sx={{ fontWeight: "600", fontSize:"20px" }} variant="h6">
            Cancelled Jobs
          </Typography>
          <Card
            sx={{
              borderRadius: "20px",
              padding: "15px 20px",
              width: "100%",
              mt: 3,
              boxShadow:"0px 4px 20px 0px #6150E11A"
            }}
          >
            {cancelCard?.map((p) => (
              <CardContent
                sx={{display: "flex",alignItems:"center", justifyContent: "space-between", padding:"5px 0"}}
                key={p?.label}
              >
                <Typography
                  sx={{ pt: 0, fontWeight: "400", fontSize: "16px" }}
                >
                  {p?.label}
                </Typography>
                <Typography
                  sx={{
                    backgroundColor: "#F5F6F9",
                    padding: "10px",
                    borderRadius: "10px",
                    width: "50%",
                    textAlign: "center",
                    fontWeight: "500",
                    fontSize: "16px",
                  }}
                  key={p?.label}
                >
                  {p?.count}
                </Typography>
              </CardContent>
            ))}
          </Card>
        </div>
      )}
    </div>
  );
};

export default Pipeline;
