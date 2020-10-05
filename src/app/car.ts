

/*
    Billson@20201005_pm045206   : codes refer to https://books.google.com.my/books?id=IDtNDwAAQBAJ&pg=PA106&lpg=PA106&dq=Angular+showCar($event)&source=bl&ots=jWnDervoWA&sig=ACfU3U1nuTKx8TolEsJcjkaPub8kVR6fMQ&hl=en&sa=X&ved=2ahUKEwjpgY2Jhp3sAhWv8HMBHcJkBe0Q6AEwAnoECAcQAg#v=onepage&q=Angular%20showCar(%24event)&f=false

*/
export class Car {
    constructor(
        private _id: string,
        private _year: number, 
        private _make: string, 
        private _model: string,
        private _article: string){
    }

    public get id() : string {
        return this._id;
    }

    public get year() : number {
        return this._year;
    }

    public get make() : string {
        return this._make;
    }

    public get model() : string {
        return this._model;
    }

    public get article() : string {
        return this._article;
    }

}
