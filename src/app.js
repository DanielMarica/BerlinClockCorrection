export class Main {
    convertSimpleMinutesRow(minutes) {
        if (minutes === 0) return "0000";
        if (minutes === 1) return "Y000";
        if (minutes === 2) return "YY00";
        return "YYY0";
    }
}