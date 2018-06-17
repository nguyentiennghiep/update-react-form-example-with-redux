import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';
import { connect } from 'react-redux';
import * as actions from './Actions/index';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskEditing: null,
      filter: {
        name: '',
        status: -1
      },
      keyword: '',
      sortName: '',
      sortValue: 1
    };

  }

  onToggleForm = () => {
    console.log(this.props.isDisplayForm,'-',this.props.taskEditing.id);
    if (this.props.isDisplayForm === true && this.props.taskEditing.id !== null) {
      this.props.openForm();
      
    }
    else {
      console.log(123);
      this.props.onToggleForm();
    }
    this.props.onUpdate({
      id: '',
      name: '',
      status: false
    }
    );

  }


  onSearch = (keyword) => {
    this.setState({ keyword: keyword });
  }

  onSort = (sortName, sortValue) => {

    this.setState({
      sortName: sortName,
      sortValue: sortValue
    });

  }

  render() {
    var { isDisplayForm } = this.props;

    // if (keyword) {
    //   tasks = tasks.filter((task) => {
    //     return task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    //   })
    // }
    // if (sortName === 'name') {
    //   tasks.sort((a, b) => {
    //     if (a.name.toUpperCase() > b.name.toUpperCase())
    //      return sortValue;
    //     else if (a.name.toUpperCase() < b.name.toUpperCase())
    //       return -sortValue;
    //     else return 0;
    //   });
    // }
    // if (sortName === 'status') {
    //   tasks.sort((a, b) => {
    //     if (a.status > b.status)
    //       return -sortValue;
    //     else if (a.status < b.status)
    //       return sortValue;
    //     else return 0;
    //   });
    // }
    return (
      <div className="container">
        <div className="text-center">
          <h1>Work manage</h1>
          <hr />
        </div>
        <div className="row">
          <div className={isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" :
            ""}>
            {isDisplayForm ? <TaskForm/> : ""}
          </div>
          <div className={isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" :
            "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
            <button type="button" className="btn btn-primary mr-5" onClick={this.onToggleForm}>
              <span className="fa fa-plus mr-5"></span>Add work
                </button>
            <Control onSearch={this.onSearch}
              onSort={this.onSort} />
            <div className="row mt-15">
              <TaskList/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isDisplayForm: state.isDisplayForm,
    taskEditing: state.taskEditing
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onToggleForm: () => {
      dispatch(actions.toggleForm())
    },
    onUpdate: (task) => {
      dispatch(actions.updateTask(task));
    },
    openForm: () => {
      dispatch(actions.openForm());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
