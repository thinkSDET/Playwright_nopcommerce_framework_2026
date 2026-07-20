import { TestDataGenerator } from "../../utils/TestDataGenerator";
import registerPageInputData from "../inputTestData/registerPage.json";
export class RegisterDataFactory {

    static validRegistration() {

        return {

            ...registerPageInputData.validRegistrationDetails,

            emailAddress: TestDataGenerator.generateUniqueEmail(),

            telephoneNumber: TestDataGenerator.generateUniquePhoneNumber() 

        };

    }

}