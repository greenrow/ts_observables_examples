var EventObservable = /** @class */ (function () {
    function EventObservable() {
        this.observers = [];
    }
    EventObservable.prototype.subscribe = function (subscriber) {
        this.observers.push(subscriber);
    };
    EventObservable.prototype.unsubscribe = function (subscriber) {
        this.observers = this.observers.filter(function (subscriber) { return subscriber !== subscriber; });
    };
    EventObservable.prototype.broadcast = function (data) {
        this.observers.forEach(function (subscriber) { return subscriber.next(data); });
    };
    return EventObservable;
}());
var observer = new EventObservable();
// first subscriber
observer.subscribe({ next: function (data) { console.log('data', data); } });
// ..n subscriber
observer.subscribe({ next: function (data) { console.log('data1', data); } });
// Observable pull data to subscriber
setTimeout(function () {
    observer.broadcast('async data');
});
