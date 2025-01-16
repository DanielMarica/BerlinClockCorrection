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

    it("given 2 should return 'YY00' ", function() {
        const result = main.convertSimpleMinutesRow(2);
        expect(result).toBe("YY00");
    });

    it("given 3 should return 'YYY0' ", function() {
        const result = main.convertSimpleMinutesRow(3);
        expect(result).toBe("YYY0");
    });

    it("given 4 should return 'YYYY' ", function() {
        const result = main.convertSimpleMinutesRow(4);
        expect(result).toBe("YYYY");
    });

    it("given 5 should return '0000' ", function() {
        const result = main.convertSimpleMinutesRow(5);
        expect(result).toBe("0000");
    });
    
});