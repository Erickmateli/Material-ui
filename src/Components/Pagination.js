import React from 'react';
import PropTypes from 'prop-types';
import PaginationDot from './PaginationDot';

const styles = {
  root: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    display: 'flex',
    flexDirection: 'row',
  },
};

class Pagination extends React.Component {
  handleClick = (event, getindex) => {
    this.props.onChangeIndex(getindex);
  };

  render() {
    const { getindex, dots } = this.props;

    const children = [];

    for (let i = 0; i < dots; i += 1) {
      children.push(
        <PaginationDot key={i} getindex={i} active={i === getindex} onClick={this.handleClick} />,
      );
    }

    return <div style={styles.root}>{children}</div>;
  }
}

Pagination.propTypes = {
  dots: PropTypes.number.isRequired,
  getindex: PropTypes.number.isRequired,
  onChangeIndex: PropTypes.func.isRequired,
};

export default Pagination;