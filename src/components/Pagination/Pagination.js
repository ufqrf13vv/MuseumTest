import React, { Component } from 'react'

class Pagination extends Component {

    state = {
        active: this.props.pagination.active,
        count: this.props.pagination.countOnPage
    }

    componentWillReceiveProps(props) {
        this.setState({
            active: props.pagination.active,
            count: Math.ceil(props.pagination.countElements / props.pagination.countOnPage)
        })
    }

    render () {
        let length = Math.ceil(this.props.pagination.countElements / this.props.pagination.countOnPage)

        return (
            <ul className="app-pagination">
                {new Array(length)
                .fill(1)
                .map((el, index) => {
                    return (
                        <li className={(index+1) === this.state.active ?
                            "app-pagination__item app-pagination__item--active" :
                            "app-pagination__item"} 
                            key={index}
                            onClick={this.props.pagination.onPaginationClick} >
                            {index+1}
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default Pagination