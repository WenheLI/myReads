import React from 'react';
import BookChanger from "./BookChanger";


const getCategory = (book, chosenBooks) => {
    if (book.shelf) return book.shelf;
    else {
        let res = chosenBooks.filter((it) => it.id === book.id).map((it) => it.shelf);
        if (res.length === 0) res = "none";
        return res;
    }
};

const Shelf = (props) => {

    let {books} = props;
    if (!Array.isArray(books)) books = [];
    books.forEach((it) => {
        if (!it.authors) it.authors = [];
        if (!it.imageLinks) it.imageLinks = {smallThumbnail: ""};
        console.log(it)
    });


    return ( <div className="bookshelf">
        <h2 className="bookshelf-title">{props.category}</h2>
        <div className="bookshelf-books">
            <ol className="books-grid">
                {

                    books.map((it, index) => (


                        <li key={index}>
                            <div className="book">
                                <div className="book-top">
                                    <div style={
                                        {backgroundImage: "url(" + it.imageLinks.smallThumbnail + ")"}}
                                         className="book-cover" />
                                    <BookChanger category={getCategory(it, props.chosenBooks)} bookID={it.id} onShelfChanged={props.onShelfChanged}/>
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
    </div>)
};



export default Shelf;