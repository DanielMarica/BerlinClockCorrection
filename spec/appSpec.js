import { Main } from "../src/app.js";
describe("Main class should implments a berlin clock ", function(){
    const main = new Main();
    
    describe("Simple minutes row", function() {
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

        it("given 6 should return 'Y000' ", function() {
            const result = main.convertSimpleMinutesRow(6);
            expect(result).toBe("Y000");
        });

        it("given 7 should return 'YY00' ", function() {
            const result = main.convertSimpleMinutesRow(7);
            expect(result).toBe("YY00");
        });

        it("given 8 should return 'YYY0' ", function() {
            const result = main.convertSimpleMinutesRow(8);
            expect(result).toBe("YYY0");
        });

        it("given 9 should return 'YYYY' ", function() {
            const result = main.convertSimpleMinutesRow(9);
            expect(result).toBe("YYYY");
        });

        it("given 10 should return '0000' ", function() {
            const result = main.convertSimpleMinutesRow(10);
            expect(result).toBe("0000");
        });

        it("given 21 should return 'Y000' ", function() {
            const result = main.convertSimpleMinutesRow(21);
            expect(result).toBe("Y000");
        });

        it("given 42 should return 'YY00' ", function() {
            const result = main.convertSimpleMinutesRow(42);
            expect(result).toBe("YY00");
        });
    });

    describe("Five minutes row", function() {
        it("given 0 minutes should return '00000000000'", function() {
            const result = main.convertFiveMinutesRow(0);
            expect(result).toBe("00000000000");
        });

        it("given 1 minutes should return '00000000000'", function() {
            const result = main.convertFiveMinutesRow(1);
            expect(result).toBe("00000000000");
        });

        it("given 5 minutes should return 'Y0000000000'", function() {
            const result = main.convertFiveMinutesRow(5);
            expect(result).toBe("Y0000000000");
        });

        it("given 10 minutes should return 'YY000000000'", function() {            const result = main.convertFiveMinutesRow(10);
            expect(result).toBe("YY000000000");
        });

        it("given 15 minutes should return 'YYR00000000'", function() {
            const result = main.convertFiveMinutesRow(15);
            expect(result).toBe("YYR00000000");
        });

        it("given 20 minutes should return 'YYRY0000000'", function() {
            const result = main.convertFiveMinutesRow(20);
            expect(result).toBe("YYRY0000000");
        });

        it("given 25 minutes should return 'YYRYO000000'", function() {
            const result = main.convertFiveMinutesRow(25);
            expect(result).toBe("YYRYO000000");
        });

        it("given 30 minutes should return 'YYRYYR00000'", function() {
            const result = main.convertFiveMinutesRow(30);
            expect(result).toBe("YYRYYR00000");
        });
        
    });

    describe("Single hours row", function() {
        it("given 0 hours should return '0000'", function() {
            const result = main.convertSingleHoursRow(0);
            expect(result).toBe("0000");
        });

        it("given 1 hours should return 'R000'", function() {
            const result = main.convertSingleHoursRow(1);
            expect(result).toBe("R000");
        });

        it("given 3 hours should return 'RRR0'", function() {
            const result = main.convertSingleHoursRow(3);
            expect(result).toBe("RRR0");
        });
    });
});