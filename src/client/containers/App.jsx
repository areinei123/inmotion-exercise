import React from 'react'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      movies: []
    }
  }

  async componentDidMount(){
    let response = await fetch('/api/movies')
    let data = await response.json()
    console.log(data)
    this.setState({movies: data.data})
  }

  render(){    
    return (
      <div>Hello World
        <div>
          {this.state.movies.length > 0 &&
            this.state.movies.map(movie => 
              movie.title
          )}
        </div>
      </div>
    )
  }
}

export default App