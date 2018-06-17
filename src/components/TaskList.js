import React, { Component } from 'react';
import TaskItem from './TaskItem';
import { connect } from 'react-redux';
import * as actions from './../Actions/index'

class TaskList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filterName: '',
      filterStatus: -1
    };

  }

  onChange = (envent) => {
    var target = envent.target;
    var name = target.name;
    var value = target.value;
    this.setState({ [name]: value });
    var filterVar = {
      status: name === "filterStatus" ? value : this.state.filterStatus,
      name: name === "filterName" ? value : this.state.filterName
    };

    this.props.onFilterTable(filterVar);
  }

  render() {

    var { tasks, filter } = this.props;
    if (filter) {
      if (filter.name) {
        tasks = tasks.filter((task) => {
          return task.name.toLowerCase().indexOf(filter.name.toLowerCase()) !== -1;
        })
      }
      if (filter.status !== -1) {
        tasks = tasks.filter((task) => {
          return task.status === (filter.status === 1 ? true : false);
        });
      }
    }
    var elemTasks = tasks.map((task, index) =>
      <TaskItem key={task.id} task={task} index={index}
      />);

    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th className="text-center">Number</th>
              <th className="text-center">Name</th>
              <th className="text-center">Status</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>
                <input type="text" className="form-control" name="filterName"
                  value={this.state.filterName} onChange={this.onChange} />
              </td>
              <td>
                <select className="form-control" name="filterStatus"
                  value={this.state.filterStaus} onChange={this.onChange}>
                  <option value={-1}>All</option>
                  <option value={0}>Deactive</option>
                  <option value={1}>Active</option>
                </select>
              </td>
              <td></td>
            </tr>
            {elemTasks}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.tasks,
    filter: state.filterTable
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onFilterTable: (data) => {
      dispatch(actions.filterTable(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);