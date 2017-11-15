var expect = require('expect') ;
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jquery');

var AddTodo = require('AddTodo');

describe('AddTodo', () => {
    it('should exist', () => {
        expect(AddTodo).toExist();
    });

    it('should call onAddTodo if valid todoText entered', () => {
         var spy = expect.createSpy();
         var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
         var $el = $(ReactDOM.findDOMNode(addTodo));
         var todoText = 'un todo';
         addTodo.refs.todoText.value  = todoText;
         TestUtils.Simulate.submit($el.find('form')[0]);

         expect(spy).toHaveBeenCalledWith(todoText);

    }) ;
    it('should  NOT call onAddTodo if not todoText entered', () => {
        var spy = expect.createSpy();
        var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.todoText.value = '' ;
        TestUtils.Simulate.submit($el.find('form')[0]);


         expect(spy).toNotHaveBeenCalled();

    }) ;


});
