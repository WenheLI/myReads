import React, {Component} from "react";
import Shelf from "./Shelf";
import * as BooksAPI from "./BooksAPI";
import debounce from "lodash.debounce";

class SearchBooks extends Component{

    state = {
        searchBooks: []
    };

    onSearch = (q) => {
        BooksAPI.search(q).then((it) => {
                this.setState({searchBooks: it})
        })
    };

    debounceOnSearch = debounce(this.onSearch, 150);


    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <a className="close-search" onClick={() => {
                                                this.props.history.push("/");
                                                 this.props.resetBooks();
                                                 this.setState({searchState: []});
                                                }}>Close</a>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author"
                                onChange={(e) => {this.debounceOnSearch(e.target.value)}}/>
                    </div>
                </div>
                <div className="search-books-results">
                    <Shelf chosenBooks={this.props.chosenBooks} books={this.state.searchBooks} category="" onShelfChanged={this.props.onShelfChanged}/>
                </div>
            </div>
        )
    }
}

export default SearchBooks;