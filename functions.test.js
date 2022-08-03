const value1 = require("./FormValidation");
test("Name is Valid",() =>{
    expect(value1.isRequired("Spoorthy")).toBeTruthy();
})
describe("Length of value", () =>{
    test("Charcter length not between 3 to 25 characters ", () =>{
        let str = "sp"
        expect(value1.isBetween(str.length, 3 , 25)).toBeFalsy()
    })
    test("Charcter length between 3 and 25 characters", () =>{
        let str1 ="spoorthy"
        expect(value1.isBetween(str1.length, 3, 25)).toBeTruthy()
    })
    
})
describe("Email Verification", () =>{
    test("If @ symbol is not present", () =>{
        expect(value1.isEmailValid("spoorthy.com")).toBeFalsy()
    })
    test("If . is  not prsent", () =>{
        expect(value1.isEmailValid("spoorthy@com")).toBeFalsy()
    })
    test("If letters are not present before and after @ and . ", () =>{
        expect(value1.isEmailValid("s@.")).toBeFalsy()
    })
    test("Valid Email id", () =>{
        expect(value1.isEmailValid("spoorthy@gmail.com")).toBeTruthy()
    })
})
describe("Password Verification", () =>{
    test("Password doesnot contain 1 Upper, 1 Lower, 1 Special and atleast 8 charcter length", () =>{
        expect(value1.isPasswordSecure("spoorthy")).toBeFalsy()
    })
    test("Password is Valid", () =>{
        expect(value1.isPasswordSecure("Spoorthy@nzb")).toBeTruthy()
    })
   
    
})



