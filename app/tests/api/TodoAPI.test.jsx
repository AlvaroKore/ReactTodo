var expect = require('expect');
var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
    beforeEach(() => {
        localStorage.removeItem('todos');
    });

    it('should exist', () => {
        expect(TodoAPI).toExist();
    });

    describe('setTodos' , () => {
        it('should set valid todos array', () => {
            var todos = [{
                id:23,
                text: 'test all',
                completed: false
            }];
            TodoAPI.setTodos(todos);

            var actualTodos = JSON.parse(localStorage.getItem('todos'));
            expect(actualTodos).toEqual(todos);
        });

        it('should not set invalid todos array', () => {
            var badTodos = {a: 'b'};
            TodoAPI.setTodos(badTodos);
            expect(localStorage.getItem('todos')).toBe(null);
        });
    });

    describe('getTodos', () => {
        it('should return empty array for bad localStorage data', () => {
            var actualTodos = TodoAPI.getTodos();
            expect(actualTodos).toEqual([]);
        });

        it('should return todos in valid array in localStorage', () => {
            var todos = [{
                id:23,
                text: 'test all',
                completed: false
            }];
            localStorage.setItem('todos',JSON.stringify(todos));
            var actualTodos = TodoAPI.getTodos();
            expect(actualTodos).toEqual(todos);
        });


    });

    describe('filterTodos', () => {
        var todos = [
            {
                id: 1,
                text: 'some text',
                completed: true
            },
            {
                id: 2,
                text: 'some other text',
                completed: false
            },
            {
                id:3 ,
                text: 'some text here',
                completed: true
            }
        ];
        it('should return all items is showCompleted is true', () => {
            var filterTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filterTodos.length).toBe(3);
        });

        it('should return all not completed todos', () => {
            var filterTodos = TodoAPI.filterTodos(todos, false, '');
            expect(filterTodos.length).toBe(1);
        });

        it('should sort by completed status', () => {
            var filterTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filterTodos[0].completed).toBe(false);
        });

        it('should return all when searchText is empty', () => {
            var filterTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filterTodos.length).toBe(3);
        });

        it('should return all when searchText is empty', () => {
            var filterTodos = TodoAPI.filterTodos(todos, true, 'here');
            expect(filterTodos.length).toBe(1);
        });
    });
});
