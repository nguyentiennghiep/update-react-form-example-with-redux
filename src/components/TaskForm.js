import React, { Component } from 'react';

class TaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            status: false
        };
    }

    componentWillMount() {
        if (this.props.task) {
            this.setState({
                id: this.props.task.id,
                name: this.props.task.name,
                status: this.props.task.status
            });
        }

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.task) {
            this.setState({
                id: nextProps.task.id,
                name: nextProps.task.name,
                status: nextProps.task.status
            });
        }
        else if(!nextProps.task)
        {
            this.setState({ id: '',
            name: '',
            status: false});
        }
    }

    onCloseForm = () => {
        this.props.onCloseForm();
    }

    onChange = (event) => {
        var name = event.target.name;

        var value = event.target.value;
        if (name === 'status') {
            value = event.target.value === 'true' ? true : false;
        }
        this.setState({ [name]: value });

    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.onClear();
        this.onCloseForm();
    }

    onClear = () => {
        this.setState({
            name: '',
            status: false
        });
    }
    render() {
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">{this.state.id ? 'Update Work' : 'Add work'}<span className="fa fa-times-circle fr closeButton"
                        onClick={this.onCloseForm}
                    ></span></h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Name :</label>
                            <input type="text" className="form-control"
                                name="name"
                                value={this.state.name}
                                onChange={this.onChange} />
                        </div>
                        <label>Status :</label>
                        <select className="form-control" required="required"
                            name="status"
                            value={this.state.status}
                            onChange={this.onChange}>
                            <option value={true}>Active</option>
                            <option value={false}>Deactive</option>
                        </select>
                        <br />
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning">Add</button>&nbsp;
                <button type="submit" className="btn btn-danger" onClick={this.onCloseForm}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default TaskForm;
