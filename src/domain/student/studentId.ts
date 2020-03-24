import {v4 as uuid} from "uuid";

export class StudentId {
    private _value: string;

    constructor() {
        this._value = uuid();
    }

    public stringValue(): string {
        return this._value;
    }
}