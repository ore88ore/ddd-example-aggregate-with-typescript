import {ClubId} from "./clubId";
import {ClubStatus} from "./clubStatus";
import {DomainException} from "../domainException";
import {StudentId} from "../student/StudentId";

export class Club {
    private _clubId: ClubId;
    private _name: string;
    private _clubStatus: ClubStatus;
    private _studentIds: StudentId[];

    private readonly MINIMUM_APPROVE_STUDENT_NUMBER: number = 5;

    constructor(name: string) {
        this._clubId = new ClubId();
        this._name = name;
        this._clubStatus = ClubStatus.NOT_APPROVED;
        this._studentIds = [];
    }

    get clubId(): ClubId {
        return this._clubId;
    }

    get name(): string {
        return this._name;
    }

    get clubStatus(): ClubStatus {
        return this._clubStatus;
    }

    get studentIds(): StudentId[] {
        return this._studentIds;
    }

    public addStudent(studentId: StudentId): void {
        if (this._studentIds.includes(studentId)) {
            throw new DomainException("登録済みの生徒です");
        }
        this._studentIds.push(studentId);
    }

    public approve(): void {
        if (this._studentIds.length < this.MINIMUM_APPROVE_STUDENT_NUMBER) {
            throw new DomainException("生徒数が５人未満です");
        }
        this._clubStatus = ClubStatus.APPROVED;
    }

    public removeStudent(studentId: StudentId): void {
        this._studentIds = this._studentIds.filter((_studentId: StudentId) => _studentId !== studentId);
        if (this._studentIds.length < this.MINIMUM_APPROVE_STUDENT_NUMBER) {
            this._clubStatus = ClubStatus.NOT_APPROVED;
        }
    }
}