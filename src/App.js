import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMovie } from "./action/movieActions";
import "./App.css";
import Input from "./components/Input";
import MovieTable from "./components/MovieTable";
import { Container } from "react-bootstrap";

class App extends Component {
  state = {
    searchInput: "maze",
  };

  componentDidMount() {
    this.props.getMovieList(this.state.searchInput);
  }

  getMovie = () => {
    this.props.getMovieList(this.state.searchInput);
  };

  onChangeHandler = (e) => {
    this.setState({
      searchInput: e.target.value,
    });
    console.log(this.state.searchInput);
  };
  render() {
    const { data, loading } = this.props.movies;

    return (
      <Container>
        <div>
          <h2 className='center'>Movie Search</h2>
        </div>

        <div className='container'>
          <Input
            value={this.state.searchInput}
            onChange={this.onChangeHandler}
            onClick={this.getMovie}
          />
          <div className='row'>
            {loading ? (
              <div className='loader' />
            ) : (
              <MovieTable
                data={data.map((d) => ({
                  year: d.Year,
                  name: d.Title,
                  movieId: d.imdbID,
                }))}
              />
            )}
          </div>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMovieList: (name) => dispatch(fetchMovie(name)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
