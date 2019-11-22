import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { fetchBio } from "./redux/actions/actions";

const TableHeabder = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th>delete</th>
      </tr>
    </thead>
  );
};

const TableBody = props => {
  const rows = props.characterData.map((row, index) => (
    <tr key={index}>
      <td>{row.name}</td>
      <td>{row.job}</td>
      <td>
        <button onClick={() => props.removeCharacter(index)}>Delete</button>
      </td>
    </tr>
  ));
  return <tbody>{rows}</tbody>;
};

class Table extends Component {


  renderButton() {
    return <button onClick={() => this.props.fetchBio(2) }>click</button>;
  }
  render() {
    const { characterData, removeCharacter } = this.props;
    return (
      <div>
        {this.renderButton()}
        <table>
          <TableHeabder />
          <TableBody
            characterData={characterData}
            removeCharacter={removeCharacter}
          />
        </table>
      </div>
    );
  }
}
Table.propTypes = {
  
  bio: PropTypes.array,
  
};
const mapStateToProps = state => ({
  bioData: state.bioReducer
});
const mapDispatchToProps = ({
  fetchBio
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Table);
