import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Movie from '../domain/Movie';

const cart = new Cart();

test('New cart should be empty', () => {
    expect(cart.items.length).toBe(0);
});

test('A Book of objects adds to the cart completely', () => {
    cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
    
    expect(cart.items[0]).toEqual(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
});

test('A MusicAlbum of objects adds to the cart completely', () => {
    cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
    
    expect(cart.items[1]).toEqual(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
});

test('A Movie of objects adds to the cart completely', () => {
    cart.add(new Movie(1009, 'The Avengers', 700, 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137));
    
    expect(cart.items[2]).toEqual(new Movie(1009, 'The Avengers', 700, 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боевик', 'фэнтези', 'приключения'], 137));
});

test('Sum without discount is 3900', () => {
    expect(cart.sumWithoutDiscount()).toBe(3600);
});

test('Sum with discount 10% is 3510', () => {
    expect(cart.sumWithDiscount(10)).toBe(3240);
});

test('Deleting an element is successful', () => {
    const correctCart = [
        {
          id: 1001,
          name: 'War and Piece',
          author: 'Leo Tolstoy',
          price: 2000,
          pages: 1225
        },
        {
          id: 1009,
          name: 'The Avengers',
          price: 700,
          year: 2012,
          country: 'США',
          slogan: 'Avengers Assemble!',
          genre: [ 'фантастика', 'боевик', 'фэнтези', 'приключения' ],
          minutes: 137
        }
    ];
    cart.delete(1008);
    
    expect(cart.items).toEqual(correctCart);
});