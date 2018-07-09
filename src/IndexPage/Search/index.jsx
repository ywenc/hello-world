import React, { Component } from 'react';

class Search extends Component {
  constructor (props) {
    super(props);

    this.state = { query: '' };
  }

  render () {
    const searching = this.state.isSearching;
    return (
      <div className="mb clearfix">
        <div className='fr w-35'>
          <input
            type="text"
            value={this.state.query}
            placeholder="Search Uploaded Documents"
          />
          { searching
              ? <button className="field__icon search__clear">X</button>
              : <button className="">Search</button>
          }
        </div>
      </div>
    );
  }
}

export default Search;
