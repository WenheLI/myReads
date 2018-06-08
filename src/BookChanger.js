import React, {Component} from 'react';
import * as BooksAPI from './BooksAPI';

class BookChanger extends Component{

    render() {
        return (

            <div className="book-shelf-changer">
                <select defaultValue={this.props.category || "none"}
                    onChange={(e) => {
                        this.props.onShelfChanged(this.props.bookID, e.target.value);
                        BooksAPI.update({id: this.props.bookID}, e.target.value);
                    }}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                </select>
            </div>

    )
    }

}

export default BookChanger;