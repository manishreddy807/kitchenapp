import {Component} from 'react'

class SelectInput extends Component {
  state = {
    onChangeSearchInput: '',
  }

  onChangeSearch = event => {
    this.setState({onChangeSearchInput: event.target.value})
  }

  render() {
    const {onChangeSearchInput} = this.state
    console.log(onChangeSearchInput)
    return (
      <>
        <input
          type="search"
          value={onChangeSearchInput}
          onChange={this.onChangeSearch}
        />
      </>
    )
  }
}

export default SelectInput
