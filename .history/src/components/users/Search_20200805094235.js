import React, { Component } from "react";

class Search extends Component {
  state = {
    text: "",
  };

  //Removal of this keyword
  //addition of const while making function
  //use of arrow to avoid bind()
  //removal of this.setState() ==> Just call setText(pass the changed value)
  //removal of this.state.text ==> text
  //that this.props convertinto just props in function and that too we destructure on top

  onChange = (e) => {
    this.setState({ text: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (this.state.text === "") {
      this.props.setAlert("Please Enter Something..!!", "light");
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: "" });
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
          <input
            type='text'
            name='text'
            placeholder='Search Users'
            value={this.state.text}
            onChange={this.onChange}
            autoComplete='off'
          />
          <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'
          />
        </form>

        {this.props.showClear && (
          <button
            className='btn btn-light btn-block'
            onClick={this.props.clearUsers}
          >
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
