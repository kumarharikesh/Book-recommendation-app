import React from "react";
// import reportWebVitals from './reportWebVitals';
import "./styles.css";

const bookDB =  {
  JavaScript: [ { name: "Eloquent JavaScript", rating: "4/5⭐", link: "" },
    { name: "You Don't Know JS", rating: "3.5/5⭐", linl: "" } ],

  Fiction: [ { name: "Shiva Trilogy",rating: "5/5⭐", linl: ""},
    {name: "Harry Potter and the Sorcerer's Stone", rating: "4.5/5⭐", link: ""} ],

  Business: [ { name: "Never Split the Difference", rating: "3.5/5⭐", link: "" },
    { name: "Loonshots", rating: "5/5⭐", linl: "" } ],
};

const books = ["JavaScript", "Fiction", "Bussiness"]

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {color:"#E5E7EB"}
    this.clickHandler = this.clickHandler.bind(this)
  }

  book1 = "Fiction";

  clickHandler = (book) => {

    this.book1 = book;
    this.setState({color : "rgb(201, 255, 237)"});

    for(let bk of books){
      if(bk===book){
        document.getElementById(bk).style.backgroundColor = "rgb(201, 255, 237)";
      }else{
        document.getElementById(bk).style.backgroundColor = "#E5E7EB";
      }
    }

  };
  render() {
    return (
      <div className="App">
        <h1 className="title">Best books available on web 📚</h1>
        <p className="description">
          Have a look on my list of favorite books. Select a genre to get started..
        </p>
  
        <div>
          {Object.keys(bookDB).map((genre) => (
            <button
              onClick={() => this.clickHandler(genre)}
              className="month"
              id = {genre}
            >
              {genre}
            </button>
          ))}
        </div>
  
        <hr style={{width:"70%"}}/>
  
        <ul className="flexbox"> 
          {bookDB[this.book1].map((book) => (
            <div style={{margin:"20px"}}>
              <li
                key={book.name}
                style={{
                  listStyle: "none",
                  padding: "1rem",
                  width: "100%",
                  margin: "0rem 1rem",
                  borderRadius: "0.5rem",
                  border: "1px solid #D1D5DB",
                  backgroundColor: "rgb(237, 255, 255)"
                }}
              >
                <a rel="noreferrer" href={book.link} target="_blank" style={{ fontSize: "larger" }}> {book.name} </a>
                <div style={{ fontSize: "smaller" }}> {book.rating} </div>
              </li>
            </div>
          ))}
        </ul >
  
      </div>
    );
  }
}
