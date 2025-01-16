export class Main {
    convertSimpleMinutesRow(minutes) {
        const singleMinutes = minutes % 5;
        if (singleMinutes === 0) return "0000";
        if (singleMinutes === 1) return "Y000";
        if (singleMinutes === 2) return "YY00";
        if (singleMinutes === 3) return "YYY0";
        return "YYYY";
    }
}