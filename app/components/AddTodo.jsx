var React = require('react');

var AddTodo = React.createClass({
    onSubmitForm: function (e) {
        e.preventDefault();
        var todoText = this.refs.todoText.value;
        if (todoText.length > 0) {
            this.refs.todoText.value = '';
            this.props.onAddTodo(todoText);
        } else {
            this.refs.todoText.focus();
        }
    },
    render: function () {
        return (
            <div>
                <form onSubmit = {this.onSubmitForm}>
                    <input type="text" ref="todoText" placeholder="Enter Todo"/>
                    <button className="button expanded">Add Todo</button>
                </form>
            </div>
        );
    }
});

module.exports = AddTodo;
