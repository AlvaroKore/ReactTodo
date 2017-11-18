var React = require('react');
var Todo = require('Todo');


var TodoList = React.createClass({


    render: function () {
         var renderTodos = () => {
           var {todos} = this.props;

           return todos.map((todo) => {
               return  (
                   <Todo key={todo.id} {...todo} onToggle={this.props.onToggle} />
               )
           })
       };

        return (
            <div>
                {renderTodos()}
            </div>
        );
    }
});

module.exports = TodoList;
