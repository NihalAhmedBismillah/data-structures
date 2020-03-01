"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NPromise = /** @class */ (function () {
    function NPromise(fun) {
        var _this = this;
        this.success = new Function();
        fun(function (data) {
            _this.success(data);
            _this.final();
        }, function (error) {
            _this.error(error);
            _this.final();
        });
        return this;
    }
    NPromise.prototype.resolve = function (data) {
        this.success(data);
        this.final();
    };
    NPromise.prototype.reject = function (error) {
        //reject function
        this.error(error);
        this.final();
    };
    NPromise.prototype.then = function (thenable) {
        this.success = thenable;
        return this;
    };
    NPromise.prototype.catch = function (error) {
        this.error = error;
        return this;
    };
    NPromise.prototype.finally = function (final) {
        this.finally = final;
        return this;
    };
    return NPromise;
}());
exports.NPromise = NPromise;
new NPromise(function (res, rej) {
    setTimeout(function () {
        res(10);
    }, 1000);
}).then(function (data) {
    console.log('data', data);
}).catch(function (error) {
    console.log('error : ', error);
}).finally(function () {
    console.log('Done All');
});
function createStore(fn) {
    var state;
    return {
        getState: function () {
            state = fn(state, {});
            return state;
        },
        dispatch: function (action) {
            state = fn(state, action);
        }
    };
}
var reducer = function (state, _a) {
    if (state === void 0) { state = 0; }
    var type = _a.type, payload = _a.payload;
    switch (type) {
        case 'INCREMENT':
            return state + payload;
        case 'DECREMENT':
            return state - payload;
    }
    return state;
};
var store = createStore(reducer);
///////////////////////////////
console.log(store.getState());
store.dispatch({
    type: "INCREMENT",
    payload: 1
});
console.log(store.getState());
store.dispatch({
    type: "DECREMENT",
    payload: 1
});
console.log(store.getState());
