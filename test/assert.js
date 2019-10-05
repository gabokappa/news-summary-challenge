var assert = {
    isTrue: function (assertionToCheck, nameOfFunc) {
        if (!assertionToCheck) {
            document.getElementById('test_errors')
                .insertAdjacentHTML('beforeend', `${nameOfFunc} has failed. <br/>`)
        }
    },
    isEqual: function(comparitor1, comparitor2) {
        if (comparitor1.length !== comparitor2.length) {
            throw new Error("Assertion failed: array are different lengths");
        }
        for (let i = 0; i < comparitor1.length ; i++) {
            if (comparitor1[i] !== comparitor2[i]) {
                throw new Error("Assertion failed: array elements are different");
            }
        }
    }
};
yhyhh