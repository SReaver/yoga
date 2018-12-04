const student = require('../exam');

describe('Exam', () => {
    it(`Exam of ${student.firstName} ${student.secondName}`, () => {
        const {
            task: func
        } = student;

        /* Correct input */
        expect("Hello");
        expect(typeof (func())).toBe("string");
        expect(func()).toHaveLength(5);
    });
});