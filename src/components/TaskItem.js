import React, { Component } from 'react';
import {connect } from 'react-redux';
import * as actions from './../Actions/index'

class TaskItem extends Component {
    onUpdateStatus = () => {
        this.props.onUpdateStatus(this.props.task.id);
    }

    onDelete = () => {
        this.props.onDelete(this.props.task.id)
        this.props.onCloseForm();
    }

    onUpdate = () => {
        this.props.onUpdate(this.props.task.id);
    }
    render() {
        var { task, index } = this.props;
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{task.name}</td>
                <td className="text-center">
                    <span className={task.status ? "label label-success closeButton" : "label label-danger closeButton"}
                        onClick={this.onUpdateStatus}>
                        {task.status ? 'Active' : 'Deactive'}
                    </span>
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-warning" onClick ={this.onUpdate}>
                        <span className="fas fa-pencil-alt mr-5"  ></span>Update
                          </button>
                    &nbsp;
                          <button type="button" className="btn btn-danger"
                        onClick={this.onDelete}>
                        <span className="fa fa-trash mr-5" ></span>Delete
                          </button>
                </td>
            </tr>
        );
    }
}

const mapStateToProps = state =>{
    return {

    }
} 

const mapDispatchToProps = (dispatch,props) =>{
    return {
        onUpdateStatus : (id) =>{
            dispatch(actions.updateStatus(id));
        },
        onDelete : (id) =>{
            dispatch(actions.deleteTask(id));
        },
        onCloseForm : () =>{
            dispatch(actions.closeForm());
        }
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TaskItem);
