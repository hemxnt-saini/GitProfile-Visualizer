import React from "react";

//class Search extends Component {
//  state = {
//    text: "",
//  };

const Search = ({searchUsers, clearUsers , showClear})=>{
  const [text, setText] = useState('');
}

  const onChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (this.state.text === "") {
      this.props.setAlert("Please Enter Something..!!", "light");
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({
        text: "",
      });
    }
  };


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

export default Search;
