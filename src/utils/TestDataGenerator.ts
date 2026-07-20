export class TestDataGenerator {

    static generateUniqueEmail(): string {
        return `thinksdet${Date.now()}@gmail.com`;
    }

    static generateUniquePhoneNumber(): string {
    return `9${Math.floor(100000000 + Math.random() * 900000000)}`;
}

}