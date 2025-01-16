export class Main {
    convertSimpleMinutesRow(minutes) {
        return "Y".repeat(minutes % 5).padEnd(4, "0");
    }

    convertFiveMinutesRow(minutes) {
        const fiveMinutes = Math.floor(minutes / 5);
        switch(fiveMinutes) {
            case 0: return "00000000000";
            case 1: return "Y0000000000";
            case 2: return "YY000000000";
            case 3: return "YYR00000000";
            case 4: return "YYRY0000000";
            case 5: return "YYRYO000000";
            case 6: return "YYRYYR00000";
            default: return "00000000000";
        }
    }
}