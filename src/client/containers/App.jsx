import React from 'react'
import NavigationCard from './NavigationCard.jsx'
import Navigation from '../components/Navigation.jsx'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  // componentDidMount(){
  //   store.dispatch(fetchMovies())
  // }

  render(){
    return (
      <div style={{margin: '10%'}}>
        <div className='container-fluid'>
          <h1 className='display-2 text-center'>InMovies</h1>
        </div>
        <Navigation/>
      </div>
    )
  }
}

export default App