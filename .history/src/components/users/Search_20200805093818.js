import React, { useState } from "react";

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
    setText(e.target.value);
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (text === "") {
      setAlert("Please Enter Something..!!", "light");
    } else {
      searchUsers(text);
      setText("");
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={onSubmit} className='form'>
          <input
            type='text'
            name='text'
            placeholder='Search Users'
            value={text}
            onChange={onChange}
            autoComplete='off'
          />
          <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'
          />
        </form>

        {showClear && (
          <button className='btn btn-light btn-block' onClick={clearUsers}>
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
