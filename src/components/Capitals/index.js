import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {activeCountryId: countryAndCapitalsList[0].id}

  btn = event => {
    this.setState({activeCountryId: event.target.value})
  }

  getCountries = () => {
    const {activeCountryId} = this.state
    const getCountry = countryAndCapitalsList.find(
      i => i.id === activeCountryId,
    )
    return getCountry.country
  }

  render() {
    const {activeCountryId} = this.state
    const country = this.getCountries(activeCountryId)
    return (
      <div className="div3">
        <div className="div2">
          <h1 className="h1">Countries And Capitals</h1>
          <div className="div1">
            <select onChange={this.btn} className="s1">
              {countryAndCapitalsList.map(i => (
                <option key={i.id} value={i.id}>
                  {i.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="p1">is capital of which country</p>
          </div>
          <p className="p2">{country}</p>
        </div>
      </div>
    )
  }
}
export default Capitals
