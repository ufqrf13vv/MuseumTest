import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ADD_DATA } from '../../actions'

export class NewElement extends Component {

    state = {
        name: '',
        city: '',
        country: '',
        organization: '',
        description: ''
    }

    handleOnAdd = () => {
        this.props.ADD_DATA(this.state)
    }

    updateInputValue = e => {
        this.setState({ [e.target.id]: e.target.value })
    }

    render () {
        return (
            <div className="app__form">
                <div className="app__block">
                    <label className="app__label" htmlFor="name">Название</label>
                    <input className="app__input" type="text" id="name" onChange={this.updateInputValue}></input>
                </div>
                <div className="app__block">
                    <label className="app__label" htmlFor="city">Город</label>
                    <input className="app__input" type="text" id="city" onChange={this.updateInputValue}></input>
                </div>
                <div className="app__block">
                    <label className="app__label" htmlFor="country">Страна</label>
                    <input className="app__input" type="text" id="country" onChange={this.updateInputValue}></input>
                </div>
                <div className="app__block">
                    <label className="app__label" htmlFor="organization">Организация</label>
                    <input className="app__input" type="text" id="organization" onChange={this.updateInputValue}></input>
                </div>
                <div className="app__block">
                    <label className="app__label" htmlFor="description">Описание</label>
                    <input className="app__input" type="text" id="description" onChange={this.updateInputValue}></input>
                </div>
                <div className="app__block">
                    <button onClick={this.handleOnAdd}>Добавить</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    data: state.data
});

const mapDispatchToProps = {
    ADD_DATA
};

export default connect( mapStateToProps, mapDispatchToProps)(NewElement)