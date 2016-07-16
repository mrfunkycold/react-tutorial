import MultiThreadReducer, {MultiThreadAction, ActionTypes} from '../reducers/MultiThreadReducer.ts';
import {ActionTypes as TActionTypes} from '../reducers/ThreadReducer.ts';

export function execute() {
  var timestamp = 1468613933179;
  var _oldDateNow = Date.now;

  Date.now = function () {
    return timestamp++;
  }

  function expect(before: any, after: any, msg?: string) {
    return console.assert(JSON.stringify(before) === JSON.stringify(after), `${JSON.stringify(before)} === ${JSON.stringify(after)}`, msg);
  }

  expect(MultiThreadReducer(undefined, {} as MultiThreadAction), {}, 'init');

  expect(MultiThreadReducer({}, {type: ActionTypes.CREATE_THREAD, 
                          person: 'jose', 
                          text: 'first thread'}), 
         {0: [{ id: 0, person: 'jose', text: 'first thread', timestamp: 1468613933179 }]}, 
         "Create a thread");
  
  expect(MultiThreadReducer({0: [{ id: 0, person: 'jose', text: 'first thread', timestamp: 1468613933179 }]}, 
                          {type: ActionTypes.CREATE_THREAD, 
                          person: 'pj', 
                          text: 'second thread'}), 
         {0: [{ id: 0, person: 'jose', text: 'first thread', timestamp: 1468613933179 }],
          1: [{ id: 1, person: 'pj', text: 'second thread', timestamp: 1468613933180 }]}, 
         "Create a second thread");
  
  expect(MultiThreadReducer({0: [{ id: 0, person: 'jose', text: 'first thread', timestamp: 1468613933179 }]},
                          {
                            type: TActionTypes.ADD_POST,
                            person: 'pj',
                            text: 'reply to first thread',
                            thread_id: 0
                          }),
                          {0: [{ id: 0, person: 'jose', text: 'first thread', timestamp: 1468613933179 }]},
                          "Reply to a thread")
  
  Date.now = _oldDateNow;
}