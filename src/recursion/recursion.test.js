const {
	flattenArray,
	fileExplorer,
	permutate,
	subsets,
} = require('./recursion');

describe('flattenArray', () => {
	it('returns a flattened array from nested set of arrays', () => {
		const nestedArr = [1, 2, [3, 4], [5, [6, [7, 8, [9]]]], 10];

		expect(flattenArray(nestedArr)).toEqual([
			1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
		]);
	});
});

describe('fileExplorer', () => {
	const fileObj = {
		myPics: {
			vacationPics: {
				vacation: 'vacation.jpg',
				vacation2: 'vacation.jpg2',
				vacation3: 'vacation.jpg3',
			},
			kidsPics: {
				joey: {
					joeyKidPic: 'joey',
				},
				brittany: {
					brittanyKidPic: 'brittany',
				},
				sarah: {
					sarahKidPic: 'sarah',
				},
			},
		},
		workFiles: {
			myBusinessDocs: {
				taxDocs: {
					2017: '2017tax',
					2018: '2018tax',
					2019: '2019tax',
				},
			},
		},
	};
	it('finds the values in a deeply nested object', () => {
		expect(fileExplorer(fileObj, '2017')).toEqual('2017tax');
		expect(fileExplorer(fileObj, 'brittanyKidPic')).toEqual('brittany');
		expect(fileExplorer(fileObj, 'joeyKidPic')).toEqual('joey');
		expect(fileExplorer(fileObj, 'not_found')).toEqual(false);
	});
});

describe('permutate', () => {
	it('returns all possible permutations in a nested array', () => {
		expect(permutate(['a', 'b', 'c']).sort()).toEqual(
			[
				['c', 'a', 'b'],
				['b', 'a', 'c'],
				['c', 'b', 'a'],
				['a', 'b', 'c'],
				['b', 'c', 'a'],
				['a', 'c', 'b'],
			].sort()
		);

		const output = [
			['d', 'a', 'b', 'c'],
			['c', 'a', 'b', 'd'],
			['d', 'a', 'c', 'b'],
			['b', 'a', 'c', 'd'],
			['c', 'a', 'd', 'b'],
			['b', 'a', 'd', 'c'],
			['d', 'b', 'a', 'c'],
			['c', 'b', 'a', 'd'],
			['d', 'b', 'c', 'a'],
			['a', 'b', 'c', 'd'],
			['c', 'b', 'd', 'a'],
			['a', 'b', 'd', 'c'],
			['d', 'c', 'a', 'b'],
			['b', 'c', 'a', 'd'],
			['d', 'c', 'b', 'a'],
			['a', 'c', 'b', 'd'],
			['b', 'c', 'd', 'a'],
			['a', 'c', 'd', 'b'],
			['c', 'd', 'a', 'b'],
			['b', 'd', 'a', 'c'],
			['c', 'd', 'b', 'a'],
			['a', 'd', 'b', 'c'],
			['b', 'd', 'c', 'a'],
			['a', 'd', 'c', 'b'],
		];

		expect(permutate(['a', 'b', 'c', 'd']).sort()).toEqual(output.sort());
	});
});

describe('subsets', () => {
    it('returns all possible subsets in a nested array', () => {
        expect(subsets([1, 2, 3])).toEqual(
            [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
        );
    });
});