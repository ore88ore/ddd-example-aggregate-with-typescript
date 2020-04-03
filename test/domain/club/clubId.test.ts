import {ClubId} from "../../../src/domain/club/clubId";

describe("ClubIdTest", () => {
    test("stringValue", () => {
        const clubId = new ClubId();
        expect(clubId.stringValue()).not.toEqual("");
    });
});