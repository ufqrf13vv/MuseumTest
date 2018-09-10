import React, { Component, Fragment } from 'react'
import Pagination from '../Pagination'

export class Table extends Component {

    state = {
        sort: 'ASC',
        search: '',
        pagination: {
            count: 3,
            active: 1
        }
    }

    sortTable = () => {
        const { data } = this.props
        const { sort } = this.state
        const sortIco = document.querySelector('.table__td-ico')

        if (sort === 'ASC') {
            this.ascTable(data)
            this.setState({ sort: 'DESC' })
            sortIco.classList.remove('table__td-ico--desc')
        } else {
            this.descTable(data)
            this.setState({ sort: 'ASC' })
            sortIco.classList.add('table__td-ico--desc')
        }
    }

    ascTable = data => {
        data.sort((a, b) => {
            if (a.city > b.city) return 1
            if (a.city < b.city) return -1
            return 0
        })

        return data
    }

    descTable = data => {
        data.sort((a, b) => {
            if (a.city < b.city) return 1
            if (a.city > b.city) return -1
            return 0
        })
        
        return data
    }

    searchOnChange = e => {
        this.setState({ search: e.target.value })
    }

    onPaginationClick = e => {
        this.setState({ 
            pagination: { 
                ...this.state.pagination, 
                active: Number(e.currentTarget.innerText) 
            } 
        })
    }

    render () {
        const { data } = this.props
        const pagination = {
            active: this.state.pagination.active,
            countElements: data.length,
            countOnPage: this.state.pagination.count,
            onPaginationClick: this.onPaginationClick
        }
        const finishPos = pagination.countOnPage * pagination.active
        const startPos = finishPos - pagination.countOnPage
        
        return (
            <Fragment>
                <div className="table__wrapper">
                    <table className="table">
                        <thead className="table__thead">
                            <tr>
                                <td>Название
                                    <input className="search" type="text" id="search" onChange={this.searchOnChange} />
                                </td>
                                <td className="table__td-sort" onClick={this.sortTable}>Место создания<span className="table__td-ico"></span></td>
                                <td>Организация</td>
                                <td>Описание</td>
                            </tr>
                        </thead>
                        <tbody className="table__tbody">
                            {data
                            .filter(element => element.name.indexOf(this.state.search.toLowerCase()) >= 0)
                            .map((item, index) => {
                                if (index >= startPos && index < finishPos) {
                                    return (
                                        <tr key={index} >
                                            <td>{item.name}</td>
                                            {(item.city && item.country) ?
                                                <td>{item.city}, {item.country}</td> :
                                                <td></td>
                                            }
                                            <td>{item.organization}</td>
                                            <td>{item.description}</td>
                                        </tr>
                                    )
                                }
                            })}
                        </tbody>
                    </table>
                </div>
                <Pagination pagination={pagination} />
            </Fragment>
        )
    }
}

export default Table