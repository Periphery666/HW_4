describe('HomeWork_4 tasks List', () => {
    describe('init', () => {
        const testData = [
            {
                vec: [1],
                expected: "[ 1 ]"
            },
            {
                vec: [1, 2],
                expected: "[ 1, 2 ]"
            },
            {
                vec: [1, 2, 3],
                expected: "[ 1, 2, 3 ]"
            },
            {
                vec: [1, 2, 3, 4, 5, 6, 7],
                expected: "[ 1, 2, 3, 4, 5, 6, 7 ]"
            },
            {
                vec: [],
                expected: "[  ]"
            },
            {
                vec: null,
                expected: "[  ]"
            },
            {
                vec: undefined,
                expected: "[ undefined ]"
            },

        ];

        testData.forEach(data => {
            const {vec, expected} = data;
            let list = new AList();
            list.init(vec);

            it(`should return ${expected} when a = ${list} `, () => {
                assert.deepEqual(list.toString(), expected.toString());
            });
        });
    });

    describe('init + push ', () => {
        const testData = [
            {
                vec: [1, 2],
                number: 1,
                expected: 3,
            },
            {
                vec: [1, 2, 3],
                number: 5,
                expected: 4,
            },
            {
                vec: [1, 2, 3, 4, 5],
                number: 5,
                expected: 6,
            },
            {
                vec: [1, 2, 3, 4, 5, 6, 7],
                number: 5,
                expected: 8,
            },
            {
                vec: [1, 2, 3, 4, 5, 6, 7],
                number: null,
                expected: 7,
            },
            {
                vec: [1, 2, 3, 4, 5, 6, 7],
                number: undefined,
                expected: 8,
            },
        ];

        testData.forEach(data => {
            const {vec, number, expected} = data;
            let list = new AList();
            list.init(vec);
            let actual = list.push(number);

            it(`should return ${expected} when a = ${number}`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('push ', () => {

        const testData = [

            {
                number: null,
                expected: 0,
            },
            {
                number: undefined,
                expected: 1,

            },
            {
                number: 16,
                expected: 1,
            },

        ];


        testData.forEach(data => {
            const {number, expected} = data;

            let list = new AList();
            let actual = list.push(number);

            it(`should return ${expected} when a = ${number}`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('double push ', () => {

        const testData = [
            {
                number: 5,
                expected: 2,
            },
            {
                number: null,
                expected: 0,
            },
            {
                number: undefined,
                expected: 2,
            },
        ];

        testData.forEach(data => {
            const {number, expected} = data;
            let list = new AList();
            list.push(number);
            let actual = list.push(number);

            it(`should return ${expected} when a = ${number}`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('pop + init', () => {
        const testData = [
            {
                vec: [1],
                expected: 1,
            },
            {
                vec: [1, 2],
                expected: 2,
            },
            {
                vec: [1, 2, 3],
                expected: 3,
            },
            {
                vec: [1, 2, 3, 4, 5, 6, 7],
                expected: 7,
            },
            {
                vec: [undefined],
                expected: undefined,
            },
            {
                vec: [null, null],
                expected: null,
            },
        ];

        testData.forEach(data => {
            const {vec, expected} = data;
            let list = new AList();
            list.init(vec);
            let actual = list.pop();

            it(`should return ${expected} when a = ${actual} `, () => {
                assert.deepEqual(actual, expected);
            });
        });
    });

    describe('shift + init', () => {
        const testData = [
            {
                vec: [1],
                expected: 1,
            },
            {
                vec: [1, 2],
                expected: 1,
            },
            {
                vec: [1, 2, 3],
                expected: 1,
            },
            {
                vec: [1, 2, 3, 4, 5, 6],
                expected: 1,
            },
            {
                vec: [undefined, 1],
                expected: undefined,
            },
            {
                vec: [null, 2],
                expected: null,
            },
            {
                vec: [undefined, 1],
                expected: undefined,
            },
        ];

        testData.forEach(data => {
            const {vec, expected} = data;
            let list = new AList();
            list.init(vec);

            const actual = list.shift();

            it(`should return  ${expected}  when a = ${actual}`, () => {
                assert.strictEqual(actual, expected);
            });
        })

    });

    describe('shift + init', () => {
        const testData = [
            {
                vec: [1],
                expected: 1,
            },
            {
                vec: [1, 2],
                expected: 1,
            },
            {
                vec: [1, 2, 3],
                expected: 1,
            },
            {
                vec: [1, 2, 3, 4, 5, 6],
                expected: 1,
            },
            {
                vec: [undefined, 1],
                expected: undefined,
            },
            {
                vec: [null, 2],
                expected: null,
            },
            {
                vec: [undefined, 1],
                expected: undefined,
            },
        ];

        testData.forEach(data => {
            const {vec, expected} = data;
            let list = new AList();
            list.init(vec);

            const actual = list.shift();

            it(`should return  ${expected}  when a = ${actual}`, () => {
                assert.strictEqual(actual, expected);
            });
        })

    });

    describe('shift + init', () => {
        const testData = [
            {
                vec: [1],
                expected: 1,
            },
            {
                vec: [1, 2],
                expected: 1,
            },
            {
                vec: [1, 2, 3],
                expected: 1,
            },
            {
                vec: [1, 2, 3, 4, 5, 6],
                expected: 1,
            },
            {
                vec: [undefined, 1],
                expected: undefined,
            },
            {
                vec: [null, 2],
                expected: null,
            },
            {
                vec: [undefined, 1],
                expected: undefined,
            },
        ];

        testData.forEach(data => {
            const {vec, expected} = data;
            let list = new AList();
            list.init(vec);

            const actual = list.shift();

            it(`should return  ${expected}  when a = ${actual}`, () => {
                assert.strictEqual(actual, expected);
            });
        })
    });

    describe('shift + init', () => {
        const testData = [
            {
                vec: [1],
                expected: 1,
            },
            {
                vec: [1, 2],
                expected: 1,
            },
            {
                vec: [1, 2, 3],
                expected: 1,
            },
            {
                vec: [1, 2, 3, 4, 5, 6],
                expected: 1,
            },
            {
                vec: [undefined, 1],
                expected: undefined,
            },
            {
                vec: [null, 2],
                expected: null,
            },
            {
                vec: [undefined, 1],
                expected: undefined,
            },
        ];

        testData.forEach(data => {
            const {vec, expected} = data;
            let list = new AList();
            list.init(vec);

            const actual = list.shift();

            it(`should return  ${expected}  when a = ${actual}`, () => {
                assert.strictEqual(actual, expected);
            });
        })

    });

    describe('unshift + init', () => {
        const testData = [
            {
                vec: [1],
                number: 2,
                expected: 2,
            },
            {
                vec: [1, 2],
                number: 3,
                expected: 3,
            },
            {
                vec: [1, 2, 3],
                number: 3,
                expected: 4,
            },
            {
                vec: [1, 2, 3, 4, 5, 6],
                number: 3,
                expected: 7,
            },
            {
                vec: [1, 2, 3],
                number: undefined,
                expected: 4,
            },
            {
                vec: null,
                number: 2,
                expected: 1,
            },
        ];

        testData.forEach(data => {
            const {vec, number, expected} = data;
            let list = new AList();
            list.init(vec);

            const actual = list.unshift(number);

            it(`should return  ${expected}  when a = ${actual}`, () => {
                assert.strictEqual(actual, expected);
            });
        })
    });

    describe('unshift + init', () => {
        const testData = [
            {
                vec: [1],
                number: 2,
                expected: 2,
            },
            {
                vec: [1, 2],
                number: 3,
                expected: 3,
            },
            {
                vec: [1, 2, 3],
                number: 3,
                expected: 4,
            },
            {
                vec: [1, 2, 3, 4, 5, 6],
                number: 3,
                expected: 7,
            },
            {
                vec: [1, 2, 3],
                number: undefined,
                expected: 4,
            },
            {
                vec: null,
                number: 2,
                expected: 1,
            },
        ];

        testData.forEach(data => {
            const {vec, number, expected} = data;
            let list = new AList();
            list.init(vec);

            const actual = list.unshift(number);

            it(`should return  ${expected}  when a = ${actual}`, () => {
                assert.strictEqual(actual, expected);
            });
        })
    });

    describe('sort + init', () => {
        const testData = [
            {
                vec: [1],
                sort: (first, second) => {
                    return first - second;
                },
                expected: [1],
            },
            {
                vec: [2, 3],
                sort: (first, second) => {
                    return first - second;
                },
                expected: [2, 3],
            },
            {
                vec: [1, 15, 3],
                sort: (first, second) => {
                    return first - second;
                },
                expected: [1, 3, 15],
            },
            {
                vec: [1, 22, 13, 4, 53, 16],
                sort: (first, second) => {
                    return first - second;
                },
                expected: [1, 4, 13, 16, 22, 53],
            },
            {
                vec: [1, 15, 3],
                sort: null,
                expected: [1, 15, 3],
            },
            {
                vec: [1, 22, 13, 4, 53, 16],
                sort: undefined,
                expected: [1, 22, 13, 4, 53, 16],
            },
        ];

        testData.forEach(data => {
            const {vec, sort, expected} = data;
            let list = new AList();
            list.init(vec);

            list.sort(sort);

            it(`should return  ${expected}  when a = ${list.vec}`, () => {
                assert.deepEqual(list.vec, expected);
            });
        });
    });

    describe('splice + init', () => {
        const testData = [
            {
                vec: [1],
                start: 0,
                count: 1,
                expected: [1],
            },
            {
                vec: [1, 2],
                start: 0,
                count: 1,
                expected: [1],
            },
            {
                vec: [1, 2, 3],
                start: 1,
                count: 2,
                expected: [2, 3],
            },
            {
                vec: [1, 2, 3, 4],
                start: 0,
                count: 2,
                expected: [1, 2],
            },
            {
                vec: [1, 2, 3, 4],
                start: 1,
                count: 0,
                expected: [],
            },
            {
                vec: [1, 2, 3, 4],
                start: -15,
                count: 0,
                expected: [],
            },
            {
                vec: [1, 2, 3, 4],
                start: 1,
                count: 15,
                expected: [],
            },
            {
                vec: [1, 2, 3, 4],
                start: undefined,
                count: 15,
                expected: [],
            },
            {
                vec: [1, 2, 3, 4],
                start: 1,
                count: undefined,
                expected: [],
            },
        ];

        testData.forEach(data => {
            const {vec, start, count, expected} = data;
            let list = new AList();
            list.init(vec);

            let actual = list.splice(start, count);

            it(`should return  ${expected}  when a = ${actual}`, () => {
                assert.deepEqual(actual, expected);
            });
        });
    });

    describe('splice + init + add', () => {
        const testData = [
            {
                vec: [1],
                start: 0,
                count: 1,
                expected: [1],
                addVec: [1, 5, 6, 7,],
                expectedVec: "[ 1, 5, 6, 7 ]",
            },
            {
                vec: [1, 2],
                start: 0,
                count: 1,
                expected: [1],
                addVec: [5, 6, 7],
                expectedVec: "[ 5, 6, 7, 2 ]",
            },
            {
                vec: [1, 2, 3],
                start: 1,
                count: 2,
                expected: [2, 3],
                addVec: [5, 6, 7],
                expectedVec: "[ 1, 5, 6, 7 ]",
            },
            {
                vec: [1, 2, 3, 4],
                start: 0,
                count: 2,
                expected: [1, 2],
                addVec: [5, 6, 7],
                expectedVec: "[ 5, 6, 7, 3, 4 ]",
            },
            {
                vec: [1, 2, 3, 4],
                start: 1,
                count: 0,
                expected: [],
                addVec: [5, 6, 7],
                expectedVec: "[ 1, 5, 6, 7, 2, 3, 4 ]",
            },
            {
                vec: [1, 2, 3, 4],
                start: null,
                count: null,
                expected: [],
                addVec: null,
                expectedVec: "[ 1, 2, 3, 4 ]",
            },
            {
                vec: [1, 2, 3, 4],
                start: 3,
                count: 1,
                expected: [],
                addVec: undefined,
                expectedVec: "[ 1, 2, 3 ]",
            },

        ];

        testData.forEach(data => {
            const {vec, start, count, expected, addVec, expectedVec} = data;
            let list = new AList();
            list.init(vec);

            let actual = list.splice(start, count, addVec);

            it(`should return  ${list.toString()}  when a = ${expectedVec}`, () => {
                assert.deepEqual(list.toString(), expectedVec);
            });
        });
    });

    describe('splice + init', () => {
        const testData = [
            {
                vec: [1],
                start: 0,
                count: 1,
                expected: [1],
            },
            {
                vec: [1, 2],
                start: 0,
                count: 1,
                expected: [1],
            },
            {
                vec: [1, 2, 3],
                start: 1,
                count: 2,
                expected: [2, 3],
            },
            {
                vec: [1, 2, 3, 4],
                start: 0,
                count: 2,
                expected: [1, 2],
            },
            {
                vec: [1, 2, 3, 4],
                start: 1,
                count: 0,
                expected: [],
            },
            {
                vec: [1, 2, 3, 4],
                start: -15,
                count: 0,
                expected: [],
            },
            {
                vec: [1, 2, 3, 4],
                start: 1,
                count: 15,
                expected: [],

            },
            {
                vec: [1, 2, 3, 4],
                start: undefined,
                count: 15,
                expected: [],
            },
            {
                vec: [1, 2, 3, 4],
                start: 1,
                count: undefined,
                expected: [],
            },
        ];

        testData.forEach(data => {
            const {vec, start, count, expected} = data;
            let list = new AList();
            list.init(vec);

            let actual = list.splice(start, count);

            it(`should return  ${expected}  when a = ${actual}`, () => {
                assert.deepEqual(actual, expected);
            });
        });
    });

    describe('splice + init + add', () => {
        const testData = [
            {
                vec: [1],
                start: 0,
                count: 1,
                expected: [1],
                addVec: [1, 5, 6, 7,],
                expectedVec: "[ 1, 5, 6, 7 ]",
            },
            {
                vec: [1, 2],
                start: 0,
                count: 1,
                expected: [1],
                addVec: [5, 6, 7],
                expectedVec: "[ 5, 6, 7, 2 ]",
            },
            {
                vec: [1, 2, 3],
                start: 1,
                count: 2,
                expected: [2, 3],
                addVec: [5, 6, 7],
                expectedVec: "[ 1, 5, 6, 7 ]",
            },
            {
                vec: [1, 2, 3, 4],
                start: 0,
                count: 2,
                expected: [1, 2],
                addVec: [5, 6, 7],
                expectedVec: "[ 5, 6, 7, 3, 4 ]",
            },
            {
                vec: [1, 2, 3, 4],
                start: 1,
                count: 0,
                expected: [],
                addVec: [5, 6, 7],
                expectedVec: "[ 1, 5, 6, 7, 2, 3, 4 ]",
            },
            {
                vec: [1, 2, 3, 4],
                start: null,
                count: null,
                expected: [],
                addVec: null,
                expectedVec: "[ 1, 2, 3, 4 ]",
            },
            {
                vec: [1, 2, 3, 4],
                start: 3,
                count: 1,
                expected: [],
                addVec: undefined,
                expectedVec: "[ 1, 2, 3 ]",
            },

        ];

        testData.forEach(data => {
            const {vec, start, count, expected, addVec, expectedVec} = data;
            let list = new AList();
            list.init(vec);

            let actual = list.splice(start, count, addVec);

            it(`should return  ${list.toString()}  when a = ${expectedVec}`, () => {
                assert.deepEqual(list.toString(), expectedVec);
            });
        });
    });

    describe('slice + init', () => {

        const testData = [
            {
                start: 0,
                count: 1,
                expected: [1],

            },

            {
                start: 0,
                count: 1,
                expected: [1],
            },

            {
                start: 1,
                count: 2,
                expected: [2, 3],
            },

            {
                start: 0,
                count: 2,
                expected: [1, 2],
            },

            {
                start: 1,
                count: 0,
                expected: [],
            },

        ];

        testData.forEach(data => {

            const {start, count, expected} = data;
            let list = new AList();
            list.init([1, 2, 3]);

            let actual = list.splice(start, count);

            it(`should return  ${expected}  when a = ${actual}`, () => {
                assert.deepEqual(actual, expected);
            });
        });
    });

    describe('slice + init', () => {
        const testData = [
            {
                start: 0,
                count: 1,
                expected: [1],
            },
            {
                start: 1,
                count: 2,
                expected: [2],
            },
            {
                start: 0,
                count: 2,
                expected: [1, 2],
            },
            {
                start: 0,
                count: 3,
                expected: [1, 2, 3],
            },
            {
                start: 1,
                count: 0,
                expected: [],
            },
            {
                start: null,
                count: null,
                expected: [],
            },
            {
                start: undefined,
                count: undefined,
                expected: [],
            },
        ];

        testData.forEach(data => {
            const {start, count, expected} = data;
            let list = new AList();
            list.init([1, 2, 3]);
            let actual = list.slice(start, count);

            it(`should return  ${expected}  when a = ${actual}`, () => {
                assert.deepEqual(actual, expected);
            });
        });
    });

    describe('Set +init', () => {
        const testData = [
            {
                vec: [1],
                index: 0,
                expected: 1,
                addNum: 2,
                expectedVec: "[ 2 ]",
            },
            {
                vec: [1, 2],
                index: 1,
                expected: 2,
                addNum: 3,
                expectedVec: "[ 1, 3 ]",

            },
            {
                vec: [1, 2, 3],
                index: 1,
                expected: 2,
                addNum: 7,
                expectedVec: "[ 1, 7, 3 ]",

            },
            {
                vec: [1, 2, 3, 4],
                index: 2,
                expected: 3,
                addNum: 10,
                expectedVec: "[ 1, 2, 10, 4 ]",

            },
        ];

        testData.forEach(data => {
            const {vec, index, expected, addNum, expectedVec} = data;
            let list = new AList();
            list.init(vec);

            let actual = list.set(index, addNum);

            it(`should return  ${actual}  when a = ${expected}`, () => {
                assert.deepEqual(list.toString(), expectedVec);
            });
        });
    });

    describe('Get + init', () => {

        const testData = [
            {
                vec: [1],
                index: 0,
                expected: 1,
                addNum: 2,
                expectedVec: "[ 2 ]",
            },

            {
                vec: [1, 2],
                index: 1,
                expected: 2,
                addNum: 3,
                expectedVec: "[ 1, 3 ]",

            },

            {
                vec: [1, 2, 3],
                index: 1,
                expected: 2,
                addNum: 7,
                expectedVec: "[ 1, 7, 3 ]",

            },

            {
                vec: [1, 2, 3, 4],
                index: 2,
                expected: 3,
                addNum: 10,
                expectedVec: "[ 1, 2, 10, 4 ]",

            },
        ];

        testData.forEach(data => {

            const {vec, index, expected, addNum, expectedVec} = data;
            let list = new AList();
            list.init(vec);

            let actual = list.set(index, addNum);

            it(`should return  ${actual}  when a = ${expected}`, () => {
                assert.deepEqual(list.toString(), expectedVec);
            });
        });
    });

    describe('push', () => {

        const testData = [

            {
                number: null,
                expected: 0,
            },
            {
                number: undefined,
                expected: 1,

            },
            {
                number: 16,
                expected: 1,
            },

        ];


        testData.forEach(data => {
            const {number, expected} = data;

            let list = new AList();
            let actual = list.push(number);

            it(`should return ${expected} when a = ${number}`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('double push', () => {

        const testData = [
            {
                number: 5,
                expected: 2,
            },
            {
                number: null,
                expected: 0,
            },
            {
                number: undefined,
                expected: 2,
            },
        ];

        testData.forEach(data => {
            const {number, expected} = data;
            let list = new AList();
            list.push(number);
            let actual = list.push(number);

            it(`should return ${expected} when a = ${number}`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('pop + init', () => {
        const testData = [
            {
                vec: [1],
                expected: 1,
            },
            {
                vec: [1, 2],
                expected: 2,
            },
            {
                vec: [1, 2, 3],
                expected: 3,
            },
            {
                vec: [1, 2, 3, 4, 5, 6, 7],
                expected: 7,
            },
            {
                vec: [undefined],
                expected: undefined,
            },
            {
                vec: [null, null],
                expected: null,
            },
        ];

        testData.forEach(data => {
            const {vec, expected} = data;
            let list = new AList();
            list.init(vec);
            let actual = list.pop();

            it(`should return ${expected} when a = ${actual} `, () => {
                assert.deepEqual(actual, expected);
            });
        });
    });

    describe('sort + init', () => {
        const testData = [
            {
                vec: [1],
                sort: (first, second) => {
                    return first - second;
                },
                expected: [1],
            },
            {
                vec: [2, 3],
                sort: (first, second) => {
                    return first - second;
                },
                expected: [2, 3],
            },
            {
                vec: [1, 15, 3],
                sort: (first, second) => {
                    return first - second;
                },
                expected: [1, 3, 15],
            },
            {
                vec: [1, 22, 13, 4, 53, 16],
                sort: (first, second) => {
                    return first - second;
                },
                expected: [1, 4, 13, 16, 22, 53],
            },
            {
                vec: [1, 15, 3],
                sort: null,
                expected: [1, 15, 3],
            },
            {
                vec: [1, 22, 13, 4, 53, 16],
                sort: undefined,
                expected: [1, 22, 13, 4, 53, 16],
            },
        ];

        testData.forEach(data => {
            const {vec, sort, expected} = data;
            let list = new AList();
            list.init(vec);

            list.sort(sort);

            it(`should return  ${expected}  when a = ${list.vec}`, () => {
                assert.deepEqual(list.vec, expected);
            });
        });
    });

    describe('Set + init', () => {

        const testData = [
            {
                vec: [1],
                index: 0,
                expected: 1,
                addNum: 2,
                expectedVec: "[ 2 ]",
            },
            {
                vec: [1, 2],
                index: 1,
                expected: 2,
                addNum: 3,
                expectedVec: "[ 1, 3 ]",
            },
            {
                vec: [1, 2, 3],
                index: 1,
                expected: 2,
                addNum: 7,
                expectedVec: "[ 1, 7, 3 ]",
            },
            {
                vec: [1, 2, 3, 4],
                index: 2,
                expected: 3,
                addNum: 10,
                expectedVec: "[ 1, 2, 10, 4 ]",
            },
            {
                vec: [1, 2, 3, 4],
                index: 2,
                expected: null,
                addNum: null,
                expectedVec: "[ 1, 2, 3, 4 ]",
            },
            {
                vec: [1, 2, 3, 4],
                index: 2,
                expected: 3,
                addNum: undefined,
                expectedVec: "[ 1, 2, undefined, 4 ]",
            },
        ];

        testData.forEach(data => {

            const {vec, index, expected, addNum, expectedVec} = data;
            let list = new AList();
            list.init(vec);

            let actual = list.set(index, addNum);

            it(`should return  ${actual}  when a = ${expected}`, () => {
                assert.deepEqual(list.toString(), expectedVec);
            });
        });
    });

    describe('Get + init', () => {
        const testData = [
            {
                vec: [1],
                index: 0,
                expected: 1,
            },
            {
                vec: [1, 2],
                index: 1,
                expected: 2,
            },
            {
                vec: [1, 2, 3],
                index: 1,
                expected: 2,
            },
            {
                vec: [1, 2, 3, 4],
                index: 2,
                expected: 3,
            },
            {
                vec: [1, 2, 3, 4],
                index: -2,
                expected: undefined,
            },
            {
                vec: [1, 2, 3, 4],
                index: 15,
                expected: undefined,
            },
        ];

        testData.forEach(data => {
            const {vec, index, expected} = data;
            let list = new AList();
            list.init(vec);

            let actual = list.get(index);

            it(`should return  ${actual}  when a = ${expected}`, () => {
                assert.deepEqual(actual, expected);
            });
        });
    });

});


describe('HomeWork_4 tasks DListFunc', () => {
    describe('init', () => {
        const testData = [
            {
                vec: [1],
                expected: "[ 1 ]"
            },
            {
                vec: [1, 2],
                expected: "[ 1, 2 ]"
            },
            {
                vec: [1, 2, 3],
                expected: "[ 1, 2, 3 ]"
            },
            {
                vec: [1, 2, 3, 4, 5, 6, 7],
                expected: "[ 1, 2, 3, 4, 5, 6, 7 ]"
            },
            {
                vec: [],
                expected: "[  ]"
            },
            {
                vec: null,
                expected: "[  ]"
            },
            {
                vec: undefined,
                expected: "[  ]"
            },

        ];

        testData.forEach(data => {
            const {vec, expected} = data;
            let list = new DListFunc();
            list.init(vec);

            it(`should return ${expected} when a = ${list.toString()} `, () => {
                assert.deepEqual(list.toString(), expected);
            });
        });
    });

    describe('push ', () => {
        const testData = [
            {
                number: 2,
                expected: 1,
            },
            {
                number: 2,
                expected: 1,
            },
            {
                number: 16,
                expected: 1,
            },
            {
                number: null,
                expected: 0,
            },
            {
                vec: undefined,
                expected: 1
            },
        ];

        testData.forEach(data => {
            const {number, expected} = data;

            let list = new DListFunc();
            let actual = list.push(number);

            it(`should return ${expected} when a = ${number}`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('double push ', () => {

        const testData = [
            {
                number: 5,
                expected: 2,
            },
            {
                number: null,
                expected: 0,
            },
            {
                number: undefined,
                expected: 2,
            },
        ];

        testData.forEach(data => {
            const {number, expected} = data;
            let list = new DListFunc();
            list.push(number);
            let actual = list.push(number);

            it(`should return ${expected} when a = ${number}`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('init + push ', () => {
        const testData = [
            {
                vec: [1, 2],
                number: 1,
                expected: 3,
            },
            {
                vec: [1, 2, 3],
                number: 5,
                expected: 4,
            },
            {
                vec: [1, 2, 3, 4, 5],
                number: 5,
                expected: 6,
            },
            {
                vec: [1, 2, 3, 4, 5, 6, 7],
                number: 5,
                expected: 8,
            },
            {
                vec: [1, 2, 3, 4, 5, 6, 7],
                number: null,
                expected: 7,
            },
            {
                vec: [1, 2, 3, 4, 5, 6, 7],
                number: undefined,
                expected: 8,
            },
        ];

        testData.forEach(data => {
            const {vec, number, expected} = data;
            let list = new DListFunc();
            list.init(vec);
            let actual = list.push(number);

            it(`should return ${expected} when a = ${number}`, () => {
                assert.strictEqual(actual, expected);
            });
        });
    });

    describe('pop + init', () => {
        const testData = [
            {
                vec: [1],
                expected: 1,
            },
            {
                vec: [1, 2],
                expected: 2,
            },
            {
                vec: [1, 2, 3],
                expected: 3,
            },
            {
                vec: [1, 2, 3, 4, 5, 6, 7],
                expected: 7,
            },
            {
                vec: [undefined],
                expected: undefined,
            },
            {
                vec: [null, null],
                expected: undefined,
            },
        ];

        testData.forEach(data => {
            const {vec, expected} = data;
            let list = new DListFunc();
            list.init(vec);
            let actual = list.pop();

            it(`should return ${expected} when a = ${actual} `, () => {
                assert.deepEqual(actual, expected);
            });
        });
    });

    describe('shift + init', () => {
        const testData = [
            {
                vec: [1],
                expected: 1,
            },
            {
                vec: [1, 2],
                expected: 1,
            },
            {
                vec: [1, 2, 3],
                expected: 1,
            },
            {
                vec: [1, 2, 3, 4, 5, 6],
                expected: 1,
            },
            {
                vec: [undefined, 1],
                expected: undefined,
            },
            {
                vec: [null, 2],
                expected: undefined,
            },
            {
                vec: [undefined, 1],
                expected: undefined,
            },
        ];

        testData.forEach(data => {
            const {vec, expected} = data;
            let list = new DListFunc();
            list.init(vec);

            const actual = list.shift();

            it(`should return  ${expected}  when a = ${actual}`, () => {
                assert.strictEqual(actual, expected);
            });
        })
    });

    describe('shift + init', () => {
        const testData = [
            {
                vec: [1],
                expected: 1,
            },
            {
                vec: [1, 2],
                expected: 1,
            },
            {
                vec: [1, 2, 3],
                expected: 1,
            },
            {
                vec: [1, 2, 3, 4, 5, 6],
                expected: 1,
            },
            {
                vec: [undefined, 1],
                expected: undefined,
            },
            {
                vec: [null, 2],
                expected: undefined,
            },
            {
                vec: [undefined, 1],
                expected: undefined,
            },
        ];

        testData.forEach(data => {
            const {vec, expected} = data;
            let list = new DListFunc();
            list.init(vec);

            const actual = list.shift();

            it(`should return  ${expected}  when a = ${actual}`, () => {
                assert.strictEqual(actual, expected);
            });
        })

    });

    describe('unshift + init', () => {
        const testData = [
            {
                vec: [1],
                number: 2,
                expected: 2,
            },
            {
                vec: [1, 2],
                number: 3,
                expected: 3,
            },
            {
                vec: [1, 2, 3],
                number: 3,
                expected: 4,
            },
            {
                vec: [1, 2, 3, 4, 5, 6],
                number: 3,
                expected: 7,
            },
            {
                vec: [1, 2, 3],
                number: undefined,
                expected: 4,
            },
        ];

        testData.forEach(data => {
            const {vec, number, expected} = data;
            let list = new DListFunc();
            list.init(vec);

            const actual = list.unshift(number);

            it(`should return  ${expected}  when a = ${actual}`, () => {
                assert.strictEqual(actual, expected);
            });
        })
    });

    describe('sort + init', () => {
        const testData = [
            {
                vec: [1],
                sort: (first, second) => {
                    return first - second;
                },
                expected: [1],
            },
            {
                vec: [2, 3],
                sort: (first, second) => {
                    return first - second;
                },
                expected: [2, 3],
            },
            {
                vec: [1, 15, 3],
                sort: (first, second) => {
                    return first - second;
                },
                expected: [1, 3, 15],
            },
            {
                vec: [1, 22, 13, 4, 53, 16],
                sort: (first, second) => {
                    return first - second;
                },
                expected: [1, 4, 13, 16, 22, 53],
            },
            {
                vec: [1, 15, 3],
                sort: null,
                expected: [1, 3, 15],
            },
            {
                vec: [1, 22, 13, 4, 53, 16],
                sort: undefined,
                expected: [1, 4, 13, 16, 22, 53],
            },
        ];

        testData.forEach(data => {
            const {vec, sort, expected} = data;
            let list = new DListFunc();
            list.init(vec);

            list.sort();

            it(`should return  ${expected}  when a = ${list.getVector()}`, () => {
                assert.deepEqual(list.getVector(), expected);
            });
        });
    });

    describe('slice + init', () => {
        const testData = [
            {
                start: 0,
                count: 1,
                expected: [1],
            },
            {
                start: 1,
                count: 2,
                expected: [2],
            },
            {
                start: 0,
                count: 2,
                expected: [1, 2],
            },
            {
                start: 0,
                count: 3,
                expected: [1, 2, 3],
            },
            {
                start: 1,
                count: 0,
                expected: [],
            },
            {
                start: 2,
                count: 2,
                expected: [],
            },
            {
                start: null,
                count: null,
                expected: [],
            },
            {
                start: undefined,
                count: undefined,
                expected: [],
            },
        ];

        testData.forEach(data => {
            const {start, count, expected} = data;
            let list = new DListFunc();
            list.init([1, 2, 3]);
            let actual = list.slice(start, count);

            it(`should return  ${expected}  when a = ${actual}`, () => {
                assert.deepEqual(actual, expected);
            });
        });
    });

    describe('splice + init', () => {
        const testData = [
            {
                vec: [1],
                start: 0,
                count: 1,
                expected: [1],
            },
            {
                vec: [1, 2],
                start: 0,
                count: 1,
                expected: [1],
            },
            {
                vec: [1, 2, 3],
                start: 1,
                count: 2,
                expected: [2, 3],
            },
            {
                vec: [1, 2, 3, 4],
                start: 0,
                count: 2,
                expected: [1, 2],
                expectedVec: [3, 4],
            },
            {
                vec: [1, 2, 3, 4],
                start: 1,
                count: 0,
                expected: [],
            },
            {
                vec: [1, 2, 3, 4],
                start: -15,
                count: 0,
                expected: [],
            },
            {
                vec: [1, 2, 3, 4],
                start: 1,
                count: 15,
                expected: [],
            },
            {
                vec: [1, 2, 3, 4],
                start: undefined,
                count: 15,
                expected: [],
            },
            {
                vec: [1, 2, 3, 4],
                start: 1,
                count: undefined,
                expected: [],
            },
        ];

        testData.forEach(data => {
            const {vec, start, count, expected, expectedVec} = data;
            let list = new DListFunc();
            list.init(vec);

            let actual = list.splice(start, count);
            console.log(actual);
            console.log(list.root);
            it(`should return  ${expected}  when actual = ${actual}`, () => {
                assert.deepEqual(actual, expected);
            });
        });
    });

    describe('Set + init', () => {

        const testData = [
            {
                vec: [1],
                index: 0,
                expected: 1,
                addNum: 2,
                expectedVec: "[ 2 ]",
            },
            {
                vec: [1, 2],
                index: 1,
                expected: 2,
                addNum: 3,
                expectedVec: "[ 1, 3 ]",
            },
            {
                vec: [1, 2, 3],
                index: 1,
                expected: 2,
                addNum: 7,
                expectedVec: "[ 1, 7, 3 ]",
            },
            {
                vec: [1, 2, 3, 4],
                index: 2,
                expected: 3,
                addNum: 10,
                expectedVec: "[ 1, 2, 10, 4 ]",
            },
            {
                vec: [1, 2, 3, 4],
                index: 2,
                expected: null,
                addNum: null,
                expectedVec: "[ 1, 2, null, 4 ]",
            },
            {
                vec: [1, 2, 3, 4],
                index: 2,
                expected: 3,
                addNum: undefined,
                expectedVec: "[ 1, 2, undefined, 4 ]",
            },
        ];

        testData.forEach(data => {

            const {vec, index, expected, addNum, expectedVec} = data;
            let list = new DListFunc();
            list.init(vec);

            let actual = list.set(index, addNum);

            it(`should return  ${list.getArray().toString()}  when a = ${expectedVec.toString()}`, () => {
                assert.deepEqual(list.toString(), expectedVec);
            });
        });
    });

    describe('Get + init', () => {
        const testData = [
            {
                vec: [1],
                index: 0,
                expected: 1,
            },
            {
                vec: [1, 2],
                index: 1,
                expected: 2,
            },
            {
                vec: [1, 2, 3],
                index: 1,
                expected: 2,
            },
            {
                vec: [1, 2, 3, 4],
                index: 2,
                expected: 3,
            },
            {
                vec: [1, 2, 3, 4],
                index: -2,
                expected: undefined,
            },
            {
                vec: [1, 2, 3, 4],
                index: 15,
                expected: undefined,
            },
        ];

        testData.forEach(data => {
            const {vec, index, expected} = data;
            let list = new DListFunc();
            list.init(vec);

            let actual = list.get(index);

            it(`should return  ${actual}  when a = ${expected}`, () => {
                assert.deepEqual(actual, expected);
            });
        });
    });

});
