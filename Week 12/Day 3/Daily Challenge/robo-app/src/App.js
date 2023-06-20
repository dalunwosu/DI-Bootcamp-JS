import React, { Component } from "react";
import { connect } from "react-redux";
import CardList from "./components/CardList";
import SearchBar from "./components/SearchBar";
import Scroll from "./components/Scroll";
import ErrorBoundary from "./components/ErrorBoundary";
import { setSearchField, request } from "./actions";
import "./App.css";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(request()),
  };
};

class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { robots, searchField, onSearchChange, isPending } = this.props;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <div className="tc">
        <h1 className="f1"> RoboFriends </h1>
        <SearchBar searchChange={onSearchChange} />{" "}
        <Scroll>
          {" "}
          {isPending ? (
            <h1> Loading </h1>
          ) : (
            <ErrorBoundary>
              <CardList robots={filteredRobots} />{" "}
            </ErrorBoundary>
          )}{" "}
        </Scroll>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
