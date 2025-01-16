export class Main {
    convertSimpleMinutesRow(minutes) {
        if (minutes === 0) return "0000";
        if (minutes === 1) return "Y000";
        return "YY00";
    }
}