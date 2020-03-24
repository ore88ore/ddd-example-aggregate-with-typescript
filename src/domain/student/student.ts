import {StudentId} from "./StudentId";

export class Student {
    private _studentId: StudentId;
    private _studentName: string;

    constructor(studentName: string) {
        this._studentId = new StudentId();
        this._studentName = studentName;
    }

}