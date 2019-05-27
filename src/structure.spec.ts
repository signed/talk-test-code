class Production {
    constructor(private server: () => any) {
    }

    totalTaxWithBaseTax(value: number): number {
        return value + this.server().server.response;
    }
}

function anyTaxRate() {
    return 2;
}

describe('the business reason behind this test case', () => {

    describe('arrange act assert', () => {
        //tag::arrange-act-assert[]
        it('the tax rate is the sum of the base tax and a variable market tax', () => {
            const server = jest.fn().mockReturnValue({ server: { response: 12 } });
            let production = new Production(server);

            let result = production.totalTaxWithBaseTax(7);

            expect(result).toEqual(19);
        });
        //end::arrange-act-assert[]
    });

    describe('arrange assert act', () => {

        let marketTax;
        let baseTax;

        beforeEach(() => {
            marketTax = anyTaxRate();
            baseTax = anyTaxRate();
        });

        //tag::collect-act-assert[]
        it('the tax rate is the sum of the base tax and a variable market tax', () => {
            baseTaxIs(7);
            marketTaxIs(12);

            expect(totalTaxRate()).toEqual(19);
        });
        //end::collect-act-assert[]

        function marketTaxIs(value: number) {
            marketTax = value;
        }

        function baseTaxIs(value: number) {
            baseTax = value;
        }

        function totalTaxRate() {
            const serverResponse = { server: { response: marketTax } };
            const server = jest.fn().mockReturnValue(serverResponse);
            return new Production(server).totalTaxWithBaseTax(baseTax);
        }
    });
});