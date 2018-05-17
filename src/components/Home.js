import React, { Component } from 'react';

import SearchBar from './SearchBar'
import List from './List'
import _ from 'lodash'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      selectedMedicine: null,
    };
  }

  medicineSearch(term) {
    this.setState({term});
  }

  selectMedicine(selectedMedicine) {
    this.setState({selectedMedicine})
    console.log(selectedMedicine);
  }

  render() {
    const medicineSearch = _.debounce((term) => { this.medicineSearch(term) }, 300);

    return (
      <div className="container">
        <div className="row">
          <div className="col s8">
          </div>
          <div className="col s4">
            <SearchBar onSearchTermChange={medicineSearch} />
            <List onMedicineSelect={(medicine) => this.selectMedicine(medicine)} value={this.state.term}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
