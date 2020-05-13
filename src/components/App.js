import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  changeFilterType = (event) => {
    this.setState({
      filters: {type: event.target.value}
    })
  }

  fetchPetDate = () => {
    let query = (this.state.filters.type === 'all' ? '':`?type=${this.state.filters.type}`)
    fetch(`/api/pets${query}`)
    .then(res => res.json())
    .then(pets => this.setState({ pets }))
    .catch(err => console.log('err: ', err))
  }

  toggleAdoption = (id) => {
    const copy = this.state.pets.map(pet => pet.id === id ? {...pet, isAdopted: !pet.isAdopted } : pet)
    this.setState({
      pets: copy
    })
  }

  render() {
    console.log('App state:', this.state)
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters fetchPetData={this.fetchPetDate} onChangeType={this.changeFilterType}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} toggleAdoption={this.toggleAdoption}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
