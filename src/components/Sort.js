import React, { Component } from 'react';
import * as actions from './../Actions/index'
import { connect } from 'react-redux'


class Sort extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            value: 1
        };
    }

    onClick = (sortName, sortValue) => {
        this.setState({
            name: sortName,
            value: sortValue

        });

        var sortVar = {
            name: sortName,
            value: sortValue
        };

        this.props.onSort(sortVar);
    }
    render() {
        var sort = this.state;
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        Filter <span className="far fa-caret-square-down ml-5"></span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li>
                            <a role="button" onClick={() => this.onClick('name', 1)}
                                className={sort.name === 'name' && sort.value === 1 ? "sort_selected" : ''}>
                                <span className="fas fa-sort-alpha-down pr-5">
                                    Name A-Z
                                  </span>
                            </a>
                        </li>
                        <li>
                            <a role="button" onClick={() => this.onClick('name', -1)}
                                className={sort.name === 'name' && sort.value === -1 ? "sort_selected" : ''}>
                                <span className="fas fa-sort-alpha-up pr-5">
                                    Name Z-A
                                  </span>
                            </a>
                        </li>
                        <li role="separator" className="divider"></li>
                        <li><a role="button" onClick={() => this.onClick('status', 1)}
                            className={sort.name === 'status' && sort.value === 1 ? "sort_selected" : ''}>Status : Active</a></li>
                        <li><a role="button" onClick={() => this.onClick('status', -1)}
                            className={sort.name === 'status' && sort.value === -1 ? "sort_selected" : ''}>Status : Deactive</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSort: (data) => {
            dispatch(actions.sortTask(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sort);


