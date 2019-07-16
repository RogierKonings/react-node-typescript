"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var index_reducer_1 = require("../reducers/index.reducer");
function configureStore(initialState) {
    var store = redux_1.createStore(index_reducer_1.reducer, initialState);
    if (module.hot) {
        module.hot.accept('../reducers/index.reducer', function () {
            var nextReducer = require('../reducers/index.reducer').default;
            store.replaceReducer(nextReducer);
        });
    }
    console.log(store);
    return store;
}
exports.default = configureStore;
//# sourceMappingURL=store.config.js.map