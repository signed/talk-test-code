class Production {
    constructor(private server: () => any) {
    }

    code(value: number): number {
        return value + this.server().server.response;
    }
}

function anyTaxRate() {
    return 2;
}

describe('the business reason behind this test case', () => {

    describe('arrange act assert', () => {
        it('the tax rate is the sum of the base tax and a variable market tax', () => {
            const server = jest.fn().mockReturnValue({ server: { response: 12 } });
            let result = new Production(server).code(7);
            expect(result).toEqual(19);
        });
    });

    describe('arrange assert act', () => {

        let variableTaxPart;

        beforeEach(() => {
            variableTaxPart = anyTaxRate();
        });

        it('the tax rate is the sum of the base tax and a variable market tax', () => {
            variablePartOfTheTaxIs(12);

            expect(totalTaxRateForBaseRate(7)).toEqual(19);
        });

        function variablePartOfTheTaxIs(value: number) {
            variableTaxPart = value;
        }

        function totalTaxRateForBaseRate(value: number) {
            const serverResponse = { server: { response: variableTaxPart } };
            const server = jest.fn().mockReturnValue(serverResponse);
            return new Production(server).code(value);
        }
    });
});