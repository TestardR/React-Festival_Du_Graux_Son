import React, { Component } from 'react';

import BaseLayout from './layouts/BaseLayout';

class LineUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSrc: ''
    };
  }

  handleMouseOver(src) {
    this.setState({
      imgSrc: src
    });
  }

  handleMouseOut() {
    this.setState({
      imgSrc: ''
    });
  }

  render() {
    return <BaseLayout className="lineupBackground">Hello Line Up</BaseLayout>;
  }
}

export default LineUp;
