import {Club} from "../../../src/domain/club/club";
import {StudentId} from "../../../src/domain/student/studentId";
import {DomainException} from "../../../src/domain/domainException";

describe("ClubTest addStudent", () => {
    test("addStudent", () => {
        const club = new Club("TestClub");
        const studentId = new StudentId();

        club.addStudent(studentId);

        expect(club.studentIds.length).toEqual(1);
        expect(club.studentIds[0].stringValue()).toEqual(studentId.stringValue());
    });

    test("addStudent_error", () => {
        const club = new Club("TestClub");
        const studentId = new StudentId();

        club.addStudent(studentId);

        expect(() => {club.addStudent(studentId)}).toThrowError(DomainException);
        expect(() => {club.addStudent(studentId)}).toThrowError("登録済みの生徒です");
    });
});

describe("ClubTest removeStudent", () => {
    test("removeStudent", () => {
        const club = new Club("TestClub");
        const studentId = new StudentId();

        club.addStudent(studentId);
        club.removeStudent(studentId);

        expect(club.studentIds.length).toEqual(0);
    });
});