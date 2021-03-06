var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict');
var moment = require('moment');

describe ('Reducers',  () => {
    describe('searchTextReducer', () => {
        it('should set searchText', () => {
            var action = {
                type: 'SET_SEARCH_TEXT',
                searchText: 'DOG'
            };
            var res = reducers.searchTextReducer(df(''),df(action));

            expect(res).toEqual(action.searchText);
        });
        
    });
    describe ('showCompletedReducer', () => {
        it ('should toggle show completed', () => {
            var action = {
                type : 'TOGGLE_SHOW_COMPLETED'
            }
            var res = reducers.showCompletedReducer(df(false), df(action));
            expect(res).toEqual(true);

        });
    });
    describe('todosReducer', () => {
        it ('should add new todo', () => {
            var action = {
                type: 'ADD_TODO',
                text: 'Walk the dog'
            };
            var res = reducers.todosReducer(df([]), df(action));
            expect(res.length).toEqual(1);
            expect(res[0].text).toEqual(action.text);
        })
        it ('should toggle todo', () => {
            var action = {
                type: 'TOGGLE_TODO',
                id: 1
            }
            var todos = [{
                id :1,
                text: 'Learning redux',
                completed: true,
                createdAt:100,
                completedAt: 200
            }];
            var res = reducers.todosReducer(df(todos), df(action));
            expect(res[0].completed).toBe(false);
            expect(res[0].completedAt).toNotExist();
        })
    })
});