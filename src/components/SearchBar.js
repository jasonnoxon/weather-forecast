import React from 'react';

class SearchBar extends React.Component {
  state = { term: '', days: 5 };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };
  onSelectChange = event => {
    this.setState({ days: event.target.value });
  };
  onFormSubmit = event => {
    event.preventDefault();
    this.props.onFormSubmit({ term: this.state.term, days: this.state.days });
  };
  render() {
    console.log(this.props.loading);
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit}>
          <div
            className={`ui action icon input${
              this.props.loading ? ' loading' : ''
            }`}
          >
            <input
              type="text"
              placeholder="Enter Location"
              value={this.state.term}
              onChange={this.onInputChange}
            />
            <select
              className="ui compact selection dropdown"
              value={this.state.days}
              onChange={this.onSelectChange}
            >
              <option value="5">5 Days</option>
              <option value="7">7 Days</option>
            </select>
            <div className="ui button" onClick={this.onFormSubmit}>
              Search
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
