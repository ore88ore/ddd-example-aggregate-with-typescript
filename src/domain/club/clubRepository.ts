import {ClubId} from "./clubId";
import {Club} from "./club";

export interface ClubRepository {
    findById(clubId: ClubId): Club;
    save(club: Club): void;
}