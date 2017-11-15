var React = require('react');
var TodoList = require('TodoList');

var TodoApp = React.createClass({
    getInitialState: function () {
        return  {
            todos: [
                {
                    id:1,
                    text: 'Walk the dot'
                },
                {
                    id:2,
                    text: 'Clean the yard'
                },
                {
                    id:3,
                    text: 'Learn React'
                },
                {
                    id:4,
                    text: 'Learn pwa'
                }
            ]
        }
    },
    render: function () {
        var {todos} = this.state;

        return (
            <div>
                <TodoList todos = {todos}/>
            </div>
        );

    }
});

module.exports = TodoApp;
