import React, {Component} from 'react';
import BookChanger from "./BookChanger";

class Shelf extends Component{


    getCategory = (book) => {
        if (book.shelf) return book.shelf;
        else {
            let res = this.props.chosenBooks.filter((it) => it.id === book.id).map((it) => it.shelf);
            if (res.length === 0) res = "none";
            return res;
        }
    };

    render() {

            this.props.books.forEach((it) => {
               if (!it.authors) it.authors = [];
               if (!it.imageLinks) it.imageLinks = {smallThumbnail: ""};
               console.log(it)
            });

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.category}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {

                            this.props.books.map((it, index) => (


                                <li key={index}>
                                    <div className="book">
                                        <div className="book-top">
                                            <div style={
                                                {backgroundImage: "url(" + it.imageLinks.smallThumbnail + ")"}}
                                             className="book-cover" />
                                            <BookChanger category={this.getCategory(it)} bookID={it.id} onShelfChanged={this.props.onShelfChanged}/>
                                        </div>
                                        <div className="book-title">{it.title}</div>
                                        <div className="book-authors">
                                            {it.authors.toString()};
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ol>
                </div>
            </div>
        )
    }
}


export default Shelf;