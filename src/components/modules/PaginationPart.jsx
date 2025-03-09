import { Pagination } from "@mui/material";

const PaginationPart = () => {
  return (
    <Pagination
      style={{
        background: "#d7d7d7",
        display: "flex",
        justifyContent: "center",
        padding: "1rem",
        borderRadius: "8px",
        marginBottom: "3rem",
      }}
      count={10}
      color="secondary"
      size="large"
    />
  );
};

export default PaginationPart;
