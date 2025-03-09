import { Pagination } from "@mui/material";

const PaginationPart = ({ setPage }) => {
  const paginationHadler = (event) => {
    if (event.target.dataset.testid) {
      if (event.target.dataset.testid === "NavigateNextIcon") {
        setPage((page) => page + 1);
      } else {
        setPage((page) => page - 1);
      }
    } else {
      const value = +event.target.innerText;
      setPage(value);
    }
  };

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
      onClick={paginationHadler}
    />
  );
};

export default PaginationPart;
