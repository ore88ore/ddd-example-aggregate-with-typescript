import {StudentId} from "./studentId";
import {Student} from "./student";

export interface StudentRepository {
    findById(studentId: StudentId): Student;
    save(student: Student): void;
}