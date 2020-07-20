function pow(a, b) {
    let result = 1;
    for (let i = 0; i < b; i++) {
        result *= a;
    }
    return result;
}

// mocha.setup('bdd');
var assert = require('assert');
describe("pow", function() {
    it("raises 2 to 3 power", function() {
        assert.equal(pow(2, 3), 8);
    });

        it("raises 6 to 8 power", function() {
        assert.equal(pow(6, 8), 1679616);
    });

        it("raises 2 to 8 power", function() {
        assert.equal(pow(2, 8), 256);
    });

        it("raises 2 to 9 power", function() {
        assert.equal(pow(2, 9), 512);
    });

        it("raises 2 to 10 power", function() {
        assert.equal(pow(2, 10), 1024);
    });
})
