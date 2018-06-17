import React, { Component } from 'react';
import * as actions from './../Actions/index'
import { connect } from 'react-redux'

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            keyword: ''
        }
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({ [name]: value });
    }

    onSearch = () => {
        this.props.onSearch(this.state.keyword);
    }

    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="input-group" >
                    <input type="text" className="form-control" placeholder="Key word ..... Key word blank and search to see all ..." name="keyword" value={this.state.keyword} onChange={this.onChange} />
                    <span className="input-group-btn">
                        <button className="btn btn-primary" type="button" onClick={this.onSearch}>
                            <span className="fa fa-search mr-5"></span>Search
                      </button>
                    </span>
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
        onSearch: (data) => {
            dispatch(actions.search(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
