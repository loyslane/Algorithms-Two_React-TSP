import React from 'react';

class Selections extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: 'heaps',
      numberOption: 0
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleNumberChange = this.handleNumberChange.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);

handleOptionChange(changeEvent) {
  this.setState({
    selectedOption: changeEvent.target.value,
  });
}

handleNumberChange(changeEvent) {
  this.setState({
    numberOption: changeEvent.target.value
  });
}

handleFormSubmit(formSubmitEvent) {
  formSubmitEvent.preventDefault();
  console.log(this.state.numberOption);

  console.log('You have selected:', this.state.selectedOption);
}


<form onSubmit={this.handleFormSubmit}>
<label>
  <input type="radio" value="heaps" checked={this.state.selectedOption === 'heaps'} onChange={this.handleOptionChange}/>
  Heaps Algorithm
</label>
<label>
  <input type="radio" value="nearest" checked={this.state.selectedOption === 'nearest'} onChange={this.handleOptionChange}/>
  Nearest Neighbor
</label>
<input type="number" value={this.state.numberOption} placeholder="Number of Cities" onChange={this.handleNumberChange}/>
<button type="submit">Run</button>
</form>