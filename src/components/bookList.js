import React, { Component } from "react";
import { Table } from "reactstrap";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = { bookTypes: this.props.books, dropdownOpen: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  handleClick = id => {
    this.props.history.push("/book-descripton/" + id);
  };

  handleTabs = tabs => {
    const { books } = this.props;
    let selectedTabs = [
      {
        book: "Generic",
        type: 1
      },
      {
        book: "Motivational",
        type: 2
      },
      {
        book: "Fictional",
        type: 3
      },
      { book: "all", type: 0 }
    ];

    let display = selectedTabs.find(e => e.book === tabs);

    let bookType = books.filter(book => book.type === display.type);
    let data = display.type === 0 ? books : bookType;
    this.setState({
      bookTypes: data
    });
  };

  render() {
    let bookDisplay = this.state.bookTypes;

    let content = bookDisplay.map(book => {
      return (
        <tr
          key={book.id}
          onClick={() => {
            this.handleClick(book.id);
          }}
          className="cursor-pointer"
        >
          <td>
            <img
              style={{ width: 175, height: 175 }}
              className="tc br3"
              alt="Image Not Available"
              src={book.imageLink}
            />
          </td>
          <td>
            <ul>
              <h5>
                <b>{book.title}</b>
              </h5>
              <ul>Written By: {book.author}</ul>
              <ul>Country: {book.country}</ul>
            </ul>
          </td>
        </tr>
      );
    });

    return (
      <React.Fragment>
        <Table bordered>
          <thead></thead>
          <tbody>
            <tr>
              <td>
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                  <DropdownToggle caret>Filter Books</DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem
                      value="all"
                      onClick={() => this.handleTabs("all")}
                    >
                      Show All
                    </DropdownItem>
                    <DropdownItem
                      value="Generic"
                      onClick={() => this.handleTabs("Generic")}
                    >
                      Generic
                    </DropdownItem>
                    <DropdownItem
                      value="Motivational"
                      onClick={() => this.handleTabs("Motivational")}
                    >
                      Motivational
                    </DropdownItem>
                    <DropdownItem
                      value="Fictional"
                      onClick={() => this.handleTabs("Fictional")}
                    >
                      Fictional
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </td>
            </tr>
          </tbody>
        </Table>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li>
              <div className="App container">
                <Table>
                  <thead>
                    <tr></tr>
                  </thead>
                  <tbody>{content}</tbody>
                </Table>
              </div>
            </li>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

export default BookList;
