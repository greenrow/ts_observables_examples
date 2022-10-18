
interface ISubscriber {
    next: (data) => void,
    complete?: () => void,
    error?: (err) => void
}

class EventObservable {
    private observers: ISubscriber[] = [];
    constructor () {
    }

    subscribe (subscriber: ISubscriber) {
        this.observers.push(subscriber)
    }

    unsubscribe (subscriber: ISubscriber) {
        this.observers = this.observers.filter(subscriber => subscriber !== subscriber)
    }

    broadcast (data) {
        this.observers.forEach(subscriber => subscriber.next(data))
    }
}

const observervable = new EventObservable();
// first subscriber
observervable.subscribe(
    {next: (data) => {console.log('data', data)}}
    );

// ..n subscriber
observervable.subscribe(
    {next: (data) => {console.log('data1', data)}}
);


// Observable pull data to subscriber
setTimeout(()=> {
    observervable.broadcast('async data')
});