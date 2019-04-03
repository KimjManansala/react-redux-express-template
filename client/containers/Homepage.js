import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class Homepage extends Component {
  constructor(props){
      super(props)
      this.state = {}
  }

  render() {
    return (
      <div>
        <h1>Welcome to the hompage!</h1>
        <p>Please use this anyway you would like! If you have any suggestions to add to this or questions for me please contact me at
            <a href='https://www.linkedin.com/in/kim-jasper-manansala/'> LinkedIn</a>
        </p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    test: state.testReducer
})

const mapDispatchToProps = dispatch => ({
    testDispatch : (value) => ({type:'TEST_CASE', value: value})
})

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)
