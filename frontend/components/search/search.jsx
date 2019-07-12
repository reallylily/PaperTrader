import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: ''
    };
    this.selectName = this.selectName.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    if ( Object.values(this.props.stocks).length === 0 ) this.props.requestAllStocks()
    // debugger
  }

  handleInput(event) {
    this.setState({inputVal: event.currentTarget.value});
  }

  handleSubmit(e) {
    // this.state.inoutVal === 'AAPL'
    e.preventDefault();
    // console.log(this)
    this.props.history.push(`/stocks/${this.state.inputVal}`)
  }

  matches() {
    // debugger
    // let symbols = Object.keys(this.props.stocks)
    // console.log(this.props.symbols)
    // console.log(this.props)
    // const matches = this.props.stocks;
    const matches = []
    // if (this.state.inputVal.length === 0) {
    //   return this.props.symbols;
    // }

    Object.keys(matches).forEach(symbol => {
      // const sub = symbol;
      if (symbol.indexOf(this.state.inputVal) === -1) {

        delete matches[symbol]
        // debugger
      }
      // const sub = symbol.slice(0, this.state.inputVal.length);
      // if (sub.toLowerCase() === this.state.inputVal.toLowerCase()) {
      //   matches.push(symbol);
      // }

    });


    // if (Object.keys(matches).length === 0) {
    //   matches.push('No matches');
    // }

    // return Object.keys(matches);
    return matches;
  }

  selectName(event) {
    const name = event.currentTarget.innerText;
    this.setState({inputVal: name});
  }

  render() {
    const results = this.matches().map((result, i) => {
      return (
        <li key={i} onClick={this.selectName}>{result}</li>
      );
    });
    return(
      <div>
        {/* <h1>Autocomplete</h1> */}
        <div className='search'>
          <form onSubmit={this.handleSubmit}>
            <input
              onChange={this.handleInput}
              value={this.state.inputVal}
              placeholder='Search...'/>
          </form>
          <ul>
            <ReactCSSTransitionGroup
              transitionName='auto'
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}>
              {results}
            </ReactCSSTransitionGroup>
          </ul>
        </div>
      </div>
    );
  }

} // class

export default Search;
