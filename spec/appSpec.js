import { Main } from "../src/app.js";
describe("Main class should implments a berlin clock ", function(){
    const main = new Main();

    it("given 0 should return '0000' ", function() {
        const result = main.convertSimpleMinutesRow(0);
        expect(result).toBe("0000");
    });

    it("given 1 should return 'Y000' ", function() {
        const result = main.convertSimpleMinutesRow(1);
        expect(result).toBe("Y000");
    });
});