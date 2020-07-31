import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteMovie } from "../action/movieActions";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import BootstrapTable from "react-bootstrap-table-next";
const MovieTable = ({ data, deleteMovie }) => {
  const columns = [
    {
      id: "1",
      dataField: "movieId",
      text: "ID",
      sort: true,
      style: { textAlign: "center" },
      headerStyle: { backgroundColor: "#009966", textAlign: "center" },
    },
    {
      id: "2",
      dataField: "name",
      text: "Name",
      sort: true,
      style: { textAlign: "center" },
      headerStyle: { backgroundColor: "#009966", textAlign: "center" },
    },
    {
      id: "3",
      dataField: "year",
      text: "Year",
      sort: true,
      style: { textAlign: "center" },
      headerStyle: { backgroundColor: "#009966", textAlign: "center" },
    },
    {
      id: "4",
      dataField: "data",
      text: "Delete Movie",
      style: { textAlign: "center" },
      headerStyle: { backgroundColor: "#009966", textAlign: "center" },
      formatter: (rowContent, row) => {
        return (
          <i
            className='fa fa-trash'
            onClick={(e) => {
              e.persist();
              deleteMovie(row.movieId);
            }}
          ></i>
        );
      },
    },
  ];
  return (
    <div>
      <BootstrapTable keyField='id' data={data} columns={columns} />
    </div>
  );
};

MovieTable.propTypes = {
  deleteMovie: PropTypes.func.isRequired,
};

export default connect(null, { deleteMovie })(MovieTable);
