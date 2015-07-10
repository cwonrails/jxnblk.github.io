
import React from 'react'

class About extends React.Component {

  render () {
    return (
      <section id='about' className='py3 mb4 md-col-10'>
        <p className='h2 m0'>{this.props.byline}</p>
      </section>
    )
  }

}

export default About

