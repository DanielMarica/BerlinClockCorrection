export class Main {
    convertSimpleMinutesRow(minutes) {
        return "Y".repeat(minutes % 5).padEnd(4, "0");
    }
}