"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var queue_1 = require("./../../app/queue/queue");
describe('Test for queue ', function () {
    beforeAll(function (done) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            // TODO: some operation before test started
            done();
            return [2 /*return*/];
        });
    }); });
    test('Scenario: add element at fist position', function (done) { return __awaiter(void 0, void 0, void 0, function () {
        var queue, data, result;
        return __generator(this, function (_a) {
            queue = new queue_1.Queue();
            data = new Object({ name: 'new test', address: 'pune' });
            result = queue.add(data);
            console.log('data: ', result['name']);
            expect(queue.size()).toEqual(1);
            done();
            return [2 /*return*/];
        });
    }); });
    test('Scenario: get first element from queue', function (done) { return __awaiter(void 0, void 0, void 0, function () {
        var queue;
        return __generator(this, function (_a) {
            queue = new queue_1.Queue();
            queue.add(10);
            queue.add(20);
            queue.add(30);
            expect(queue.size()).toEqual(3);
            expect(queue.first()).toEqual(30);
            done();
            return [2 /*return*/];
        });
    }); });
    test('Scenario: get last element from queue', function (done) { return __awaiter(void 0, void 0, void 0, function () {
        var queue;
        return __generator(this, function (_a) {
            queue = new queue_1.Queue();
            queue.add(10);
            queue.add(20);
            queue.add(30);
            expect(queue.size()).toEqual(3);
            expect(queue.last()).toEqual(10);
            done();
            return [2 /*return*/];
        });
    }); });
    test('Scenario: remove element from queue', function (done) { return __awaiter(void 0, void 0, void 0, function () {
        var queue;
        return __generator(this, function (_a) {
            queue = new queue_1.Queue();
            queue.add(10);
            queue.add(20);
            queue.add(30);
            expect(queue.size()).toEqual(3);
            queue.remove();
            expect(queue.size()).toEqual(2);
            done();
            return [2 /*return*/];
        });
    }); });
});
