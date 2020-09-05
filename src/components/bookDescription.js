import React, { Component } from "react";
import { Table } from "reactstrap";
import back from "../back.png";

class BookDescription extends Component {
  handleBack = () => {
    this.props.history.goBack();
  };

  render() {
    const {
      match: { params },
      books
    } = this.props;
    const id = params.id;

    const filtered_book = books.filter(books => books.id == id);
    return (
      <React.Fragment>
        {filtered_book.map(myBook => (
          <Table borderless>
            <thead></thead>
            <tbody key={myBook}>
              <tr>
                <td>
                  <img
                    style={{ width: "10px", height: "10px" }}
                    src={back}
                    onClick={this.handleBack}
                    className="d-flex justify-content-start button"
                    title="Go Back To the BookList"
                    style={{ cursor: "pointer" }}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <center>
                    <img
                      style={{ width: 450, height: 300 }}
                      className="tc br3"
                      alt="Image Not Available"
                      src={myBook.imageLink}
                    />
                  </center>
                </td>
              </tr>
              <tr>
                <td>
                  <center>
                    <h5 className="display-4">{myBook.title}</h5>
                  </center>
                </td>
              </tr>

              <tr>
                <td>
                  <b>Written By: </b>
                  {myBook.author}
                </td>
              </tr>
              <tr>
                <td>
                  <b>Country: </b>
                  {myBook.country}
                </td>
              </tr>
              <tr>
                <td>
                  <b>Description: </b>
                  {myBook.description}
                </td>
              </tr>
              <tr>
                <td>
                  <b>Language: </b>
                  {myBook.language}
                </td>
              </tr>
              <tr>
                <td>
                  <b>Read More at: </b>
                  {myBook.link}
                </td>
              </tr>
              <tr>
                <td>
                  <b>No. of Pages: </b>
                  {myBook.pages}
                </td>
              </tr>

              <tr>
                <td>
                  <b>Book Type: </b>
                  {myBook.type}
                </td>
              </tr>
              <tr>
                <td>
                  <b>Book Year: </b>
                  {myBook.year}
                </td>
              </tr>
            </tbody>
          </Table>
        ))}
      </React.Fragment>
    );
  }
}

export default BookDescription;
