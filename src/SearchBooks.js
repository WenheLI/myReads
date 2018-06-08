import React, {Component} from "react";
import Shelf from "./Shelf";

class SearchBooks extends Component{


    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <a className="close-search" onClick={() => {
                                                this.props.history.push("/");
                                                 this.props.resetBooks();
                                                }}>Close</a>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author"
                                onChange={(e) => {
                                    console.log(e.target.value);
                                    this.props.onSearch(e.target.value);
                                }}/>
                    </div>
                </div>
                <div className="search-books-results">
                    <Shelf chosenBooks={this.props.chosenBooks} books={this.props.books} category="" onShelfChanged={this.props.onShelfChanged}/>
                </div>
            </div>
        )
    }
}

export default SearchBooks;