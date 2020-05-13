import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    return (
      <div className="ui cards">
        {this.props.pets.map(pet => <Pet key={pet.id} {...pet} toggleAdoption={this.props.toggleAdoption}/>)}
      </div>
    )
  }
}

export default PetBrowser
