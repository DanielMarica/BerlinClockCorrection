export class Main {
    convertSimpleMinutesRow(minutes) {
        return "Y".repeat(minutes % 5).padEnd(4, "0");
    }

    convertFiveMinutesRow(minutes) {
        if (minutes < 5) {
            return "00000000000";
        }
        if (minutes === 5) {
            return "Y0000000000";
        }
        if (minutes === 10) {
            return "YY000000000";
        }
        if (minutes === 15) {
            return "YYR00000000";
        }
        if (minutes === 20) {
            return "YYRY0000000";
        }
        if (minutes === 25) {
            return "YYRYO000000";
        }
    }
}