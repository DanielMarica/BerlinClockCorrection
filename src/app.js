export class Main {
    convertSimpleMinutesRow(minutes) {
        return "Y".repeat(minutes % 5).padEnd(4, "0");
    }

    convertFiveMinutesRow(minutes) {
        if (minutes === 0 || minutes === 1) {
            return "00000000000";
        }
    }
}