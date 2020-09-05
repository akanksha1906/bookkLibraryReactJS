import React, { Component } from "react";
import book from "./book.png";
import { Table } from "reactstrap";
import axios from "axios";
//import BookDescription from "./components/bookDescription";
import BookList from "./components/bookList";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Suspense, lazy } from "react";
const BookDescription = lazy(() => import("./components/bookDescription"));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  componentDidMount() {
    axios.get("http://demo0905574.mockable.io/book").then(response => {
      this.setState({
        books: response.data
      });
    });
  }

  render() {
    return (
      <React.Fragment>
        <Table>
          <thead>
            <tr>
              <th>
                <h2 className="display-3">All That Fits to Print</h2>
              </th>
              <th>
                <img style={{ width: "200px", height: "140px" }} src={book} />
              </th>
            </tr>
          </thead>
        </Table>
        <Router>
          <Switch>
            <Route
              path="/"
              exact
              component={props => (
                <BookList {...props} books={this.state.books} />
              )}
            />

            <Suspense fallback={<h1>Loading…</h1>}>
              <Route
                path="/book-descripton/:id"
                component={props => (
                  <BookDescription {...props} books={this.state.books} />
                )}
              />
            </Suspense>
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
