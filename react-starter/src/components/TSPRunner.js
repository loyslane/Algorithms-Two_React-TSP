import React from 'react';
import heap from './Heaps';
import nearest from './Nearest';

class TSPRunner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOption: 0,
      selectedOption: 'heaps',
      result: {}};
      
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleNumberChange = this.handleNumberChange.bind(this);
  }
  
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
    if (this.state.selectedOption === 'heaps' && this.state.numberOption > 11) {
      return alert("That Number is too big! Please select Nearest Neighbor to get a result")
    } else if (this.state.selectedOption === 'nearest') {
      const nearestResult = nearest(this.state.numberOption);
      this.props.onComplete(nearestResult);
    } else {
      const heapResult = heap(this.state.numberOption);
      this.props.onComplete(heapResult);
    }
  }
  render() {
    return (
      <div>
        <p>Choose options, click run, and then click on the canvas to see the results</p>
        <form onSubmit={this.handleFormSubmit}>
          <label>
            <input type="radio" value="heaps" checked={this.state.selectedOption === 'heaps'} onChange={this.handleOptionChange}/>
            Heaps Algorithm
          </label>
          <label>
            <input type="radio" value="nearest" checked={this.state.selectedOption === 'nearest'} onChange={this.handleOptionChange}/>
            Nearest Neighbor
          </label>
          <br/>
          <p>Number of Cities: <input type="number" value={this.state.numberOption} onChange={this.handleNumberChange}/></p>
          <button type="submit">Run</button>
        </form>
      </div>
    );
  }
}

export default TSPRunner;