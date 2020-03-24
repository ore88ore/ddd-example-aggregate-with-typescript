import {ClubRepository} from "../domain/club/clubRepository";
import {ClubId} from "../domain/club/clubId";
import {StudentId} from "../domain/student/studentId";

export class ClubUseCase {
    private _clubRepository: ClubRepository;

    constructor(clubRepository: ClubRepository) {
        this._clubRepository = clubRepository;
    }

    public addStudent(clubId: ClubId, studentId: StudentId): void {
        let club = this._clubRepository.findById(clubId);
        club.addStudent(studentId);
        this._clubRepository.save(club);
    }

    public approveClub(clubId: ClubId): void {
        let club = this._clubRepository.findById(clubId);
        club.approve();
        this._clubRepository.save(club);
    }

    public removeStudent(clubId: ClubId, studentId: StudentId): void {
        let club = this._clubRepository.findById(clubId);
        club.removeStudent(studentId);
        this._clubRepository.save(club);
    }
}
