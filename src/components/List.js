import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class List extends Component {

  renderMedicines() {
    return this.props.data.allMedicines.map(medicine => {
      return(
        <a
          className="collection-item"
          key={medicine.codeCIS}
          onClick={() => this.props.onMedicineSelect(medicine)}
        >
          {medicine.denomination.split(' ', 6).join(' ').replace(',','')}
        </a>
      )
    });
  }

  render() {
    if (this.props.data.loading) {
      return(
        <div>Loading...</div>
      )
    }
    return(
      <div className="collection">
        {this.renderMedicines()}
      </div>
    )
  }
}

const allMedicinesQuery = gql`
  query allMedicinesQuery($term: String!) {
    allMedicines(term: $term) {
      codeCIS
      denomination
    }
  }
`;

const ListWithQuery = graphql(allMedicinesQuery, {
  options: (ownProps) => ({
    variables: {
      term: ownProps.value
    }
  })
})(List);

export default ListWithQuery;
