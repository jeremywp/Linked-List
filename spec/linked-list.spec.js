let LinkedList = require('../src/linked-list');

describe('LinkedList', () => {

    let linkedList;

    beforeEach(() => {
        linkedList = new LinkedList();
    });

    describe('insert', () => {
        it('should insert data correctly', () => {
            let mario = {name: 'Mario', number: '801-4566-7890'};
            linkedList.insert(mario);
            expect(linkedList.contains('Mario')).toEqual(mario);
        });
        it('should insert two data elements correctly', () => {
            let mario = {name: 'Mario', number: '801-456-7890'};
            let luigi = {name: 'Luigi', number: '801-456-6787'};
            linkedList.insert(mario);
            linkedList.insert(luigi);
            expect(linkedList.contains('Mario')).toEqual(mario);
            expect(linkedList.contains('Luigi')).toEqual(luigi);
        })
    });
    describe('cntains', () => {
        it('should find an element at the front of the list correctly', () => {
            let mario = {name: 'Mario', number: '801-456-7890'};
            let luigi = {name: 'Luigi', number: '801-456-6787'};
            linkedList.insert(mario);
            linkedList.insert(luigi);
            expect(linkedList.contains('Mario')).toEqual(mario);
        });
        it('should find an element at the end of the list correctly', () => {
            let mario = {name: 'Mario', number: '801-456-7890'};
            let luigi = {name: 'Luigi', number: '801-456-6787'};
            let bowser = {name: 'Bowser', number: '801-456-2342'};
            linkedList.insert(mario);
            linkedList.insert(luigi);
            linkedList.insert(bowser);
            expect(linkedList.contains('Bowser')).toEqual(bowser);
        })
    });
    describe('remove', () => {
        it('should remove data at the end of the list correctly', () => {
            let mario = {name: 'Mario', number: '801-456-7890'};
            let luigi = {name: 'Luigi', number: '801-456-6787'};
            linkedList.insert(mario);
            linkedList.insert(luigi);
            linkedList.remove('Mario');
            expect(linkedList.contains('Mario')).toBeFalsy();
            expect(linkedList.contains('Luigi')).toBeTruthy();
        });
        it('should remove data a the front of the list correctly', () => {
            let mario = {name: 'Mario', number: '801-456-7890'};
            let luigi = {name: 'Luigi', number: '801-456-6787'};
            let bowser = {name: 'Bowser', number: '801-456-2342'};
            linkedList.insert(mario);
            linkedList.insert(luigi);
            linkedList.insert(bowser);
            linkedList.remove('Bowser');
            expect(linkedList.contains('Bowser')).toBeFalsy();
            expect(linkedList.contains('Luigi')).toBeTruthy();
            expect(linkedList.contains('Mario')).toBeTruthy();
        })
    });
    describe('size', () => {
        it('should change the size of the list correctly', () => {
            let mario = {name: 'Mario', number: '801-456-7890'};
            let luigi = {name: 'Luigi', number: '801-456-6787'};
            let bowser = {name: 'Bowser', number: '801-456-2342'};
            linkedList.insert(mario);
            linkedList.insert(luigi);
            linkedList.insert(bowser);
            expect(linkedList.size).toEqual(3);
            linkedList.remove('Luigi');
            expect(linkedList.size).toEqual(2);
        });
        it('should check list size correctly when list is empty', () => {
            expect(linkedList.size).toEqual(0);
        });
    });
    describe('toString', () => {
        it('should return a string of the list correctly', () => {
            let mario = {name: 'Mario', number: '801-456-7890'};
            let luigi = {name: 'Luigi', number: '801-456-6787'};
            let bowser = {name: 'Bowser', number: '801-456-2342'};
            linkedList.insert(mario);
            linkedList.insert(luigi);
            linkedList.insert(bowser);
            expect(linkedList.toString()).toEqual('[Mario] -> [Luigi] -> [Bowser] -> null');
            linkedList.remove('Luigi');
            expect(linkedList.toString()).toEqual('[Mario] -> [Bowser] -> null')
        });
    });
});

describe('toString', () => {
    it('should return a string of the tree correctly', () => {
        let link = {name: 'Link', number: '801-456-7890'};
        let zelda = {name: 'Zelda', number: '801-456-6787'};
        let ganon = {name: 'Ganon', number: '801-456-2342'};
        binarySearchTree.insert(link);
        binarySearchTree.insert(zelda);
        binarySearchTree.insert(ganon);
        expect(binarySearchTree.toString()).toEqual('[Link] -> [Zelda] -> [Ganon] -> null');
        binarySearchTree.remove('Ganon');
        expect(binarySearchTree.toString()).toEqual('[Link] -> [Zelda] -> null')
    });
});