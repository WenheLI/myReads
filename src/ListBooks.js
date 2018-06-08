import React, {Component} from 'react';
import Shelf from "./Shelf";
import {Link} from "react-router-dom"

class ListBooks extends Component {

    listHead = () => (
        <div className="list-books-title">
            <h1>MyReads</h1>
        </div>
    );

    distributeBooks = (categoty) => (
        this.props.books.filter((it) => it.shelf === categoty)
    );

    render() {
        return (
            <div className="list-books">
                {this.listHead()}
                <div className="list-books-content">
                    <Shelf onShelfChanged={this.props.onShelfChanged} category="Currently Reading" books={this.distributeBooks("currentlyReading")}/>
                    <Shelf onShelfChanged={this.props.onShelfChanged} category="Want to Read" books={this.distributeBooks("wantToRead")}/>
                    <Shelf onShelfChanged={this.props.onShelfChanged} category="Read" books={this.distributeBooks("read")}/>
                </div>
                <div className="open-search">
                    <Link
                        to='/search'
                    >Add Books</Link>
                </div>
            </div>

        )
    }
}

export default ListBooks