import React from 'react'
import PropTypes from 'prop-types'
import {concat} from 'lodash'

class EditActorList extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      newActor: '',
      newRole: ''
    }

    this.onAddActor = this.onAddActor.bind(this)
    this.onDeleteActor = this.onDeleteActor.bind(this)
    this.onEditActor = this.onEditActor.bind(this)
    this.onAddActor = this.onAddActor.bind(this)
    this.onEditNewActor = this.onEditNewActor.bind(this)
    this.onEditNewRole = this.onEditNewRole.bind(this)
  }

  onAddActor(){
    let newList = concat(this.props.actors, 
        [{actor: this.state.newActor,
          role: this.state.newRole
        }]
      )
    this.props.onChange(newList)
    this.setState({
      newActor: '',
      newRole: ''
    })
  }

  onDeleteActor(id){
    let newList = this.props.actors
    newList.splice(id, 1)
    this.props.onChange(newList)
  }

  onEditActor(type, id, event){
    let newList = this.props.actors
    newList[id][type] = event.target.value
    this.props.onChange(newList)
  }

  onEditNewActor(event){
    let value = event.target.value
    this.setState({newActor: value})
  }

  onEditNewRole(event){
    this.setState({newRole: event.target.value})
  }

  render(){
    return (
      <div>
        {this.props.actors && this.props.actors.length > 0 && this.props.actors.map((actor, key) => 
        <div className='form-row'>
          <div className="form-group col-md-4">
            <input type="text" className="form-control" placeholder="Actor"
              value={actor.name} onChange={() => this.onEditActor('actor', key, event)}/>
          </div>
          <div className="form-group col-md-4">
            <input type="text" className="form-control" placeholder="Role"
              value={actor.role} onChange={() => this.onEditActor('role', key, event)}/>
          </div>
          <button className='btn btn-sm form-group col' onClick={() => this.onDeleteActor(key)}>X</button>
        </div>
        )}
        <div className='form-row'>
          <div className="form-group col">
            <input type="text" className="form-control" placeholder="Actor"
              value={this.state.newActor} onChange={this.onEditNewActor}/>
          </div>
          <div className="form-group col">
            <input type="text" className="form-control" placeholder="Role"
              value={this.state.newRole} onChange={this.onEditNewRole}/>
          </div>
          <button className='btn btn-sm form-group col' onClick={this.onAddActor}>Add</button>
        </div>
      </div>
    )
  }
}

export default EditActorList
