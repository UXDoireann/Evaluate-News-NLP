import{handleSubmit}from".../src/client/js/formHandler.js";
import { TestScheduler } from "jest";

describe("Testing the submit functionality", ()=>{
    test("Testing the handleSubmit() function",()=>{
        expect(handleSubmit(formText)).toBe(true);
    })
})