let LinkedList = require('../src/linked-list');

describe('LinkedList', () => {

    let linkedList;

    beforeEach(() => {
        linkedList = new LinkedList();
    });

    describe('insert', () => {
        it('should return a string of the list in order', () => {
            let mario = {name: 'Mario', number: '801-456-7890'};
            let luigi = {name: 'Luigi', number: '801-456-6787'};
            let bowser = {name: 'Bowser', number: '801-456-2342'};
            let toad = {name: 'Toad', number: '801-456-7890'};
            let peach = {name: 'Peach', number: '801-456-6787'};
            let daisy = {name: 'Daisy', number: '801-456-2342'};
            linkedList.insert(mario);
            linkedList.insert(luigi);
            linkedList.insert(bowser);
            linkedList.insert(toad);
            linkedList.insert(peach);
            linkedList.insert(daisy);
            expect(linkedList.toString()).toEqual('[Bowser] -> [Daisy] -> [Luigi] -> [Mario] -> [Peach] -> [Toad] ->' +
                ' null');
        });
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