import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks';
import { Route } from 'react-router-dom'
import SearchBooks from "./SearchBooks";

class BooksApp extends React.Component {
    state = {
        books:[]
  };

    updateShelf = () => {
        BooksAPI.getAll().then((books) => {
            console.log(books);
            this.setState({books: books});
        });
    };

    componentDidMount() {
      this.updateShelf();
    }

    changeBookShelf = (id, target) => {
        this.setState((pState) => {
            if (Array.isArray(pState))
                pState.books.filter((it) => it.id === id).map((it) => it.shelf = target);
            return {books: pState.books};
        })
    };

    resetBooks = () => {
        this.updateShelf();
    };
  render() {
    return (
      <div className="app">
          <Route path="/search" render={({ history }) => (
            <SearchBooks history={history}
                         chosenBooks={this.state.books}
                         onShelfChanged={this.changeBookShelf}
                         resetBooks={this.resetBooks}
                        />
          )}>
          </Route>

          <Route exact path="/" render={() => (
              <ListBooks onShelfChanged={this.changeBookShelf}
                         books={this.state.books}
                        />
          )}>

          </Route>
      </div>
    )
  }
}

export default BooksApp
