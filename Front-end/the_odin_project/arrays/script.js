const comments = [
    {text: 'Love this', id: 523423},
    {text: 'Super good', id: 823423},
    {text: 'You are the best', id: 2039842},
    {text: 'Ramen is my fav food ever', id: 123523},
    {text: 'Nice Nice Nice', id: 542328},
];

const people = [
    {name: 'Wes', year: 1988},
    {name: 'Kait', year: 1986},
    {name: 'Irv', year: 1970},
    {name: 'Lux', year: 2015},
    {name: 'Lily', year: 2018}
];

const isAdult = people.some(person => {
    const currentYear = new Date().getFullYear();
    return (currentYear - person.year) >= 19;
}
);
console.log({isAdult});

const randomObject = {
    name: 'John',
    age: 30,
    city: 'New York',
    "obnoxious property": function() {
        console.log('This is an obnoxious property');
    }
}

function Book(title, author, pages, read=false) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? 'read' : 'not read yet'}`;
    }
}
// We can define properties and functions common among all objects on the 
// prototype to save memory. Defining every property and function takes up a 
// lot of memory, especially if you have a lot of common properties and 
// functions, and a lot of created objects! Defining them on a centralized, 
// shared object which the objects have access to, thus saves memory.
Book.prototype.getSummary = function() {
    return `${this.title} by ${this.author}`;
}

const book1 = new Book('The Hobbit', 'J.R.R. Tolkein', 295, false);
console.log(book1.info());
console.log(book1.getSummary());

const book2 = new Book('Game of Thrones', 'George R.R. Martin', 694, true);
console.log(book2.info());
console.log(book2.getSummary());

console.log('Book1 value of ' + book1.valueOf());
console.log('Book2 value of ' + book2.valueOf());

randomObject["obnoxious property"]();

//

let animal = {
    eats: true,
    walk() {
        console.log("Animal walking");
    }
};
let rabbit = {
    _name: "khargosh",
    jumps: true,

    set name(value) {
        this._name = value;
    },

    get name() {
        return this._name;
    }

};

Object.setPrototypeOf(rabbit, animal);

console.log(Object.getPrototypeOf(rabbit));

rabbit.walk(); // Animal walking

// setter and getter methods
rabbit.name = 'small mammal';
console.log(rabbit.name); // small mammal


// Searching algorithm
let head = {
    glasses: 1
};

let table = {
    pen: 3
};

let bed = {
    sheet: 1,
    pillow: 2
};

let pockets = {
    money: 2000
};

// pockets -> bed -> table -> head
Object.setPrototypeOf(pockets, bed);
Object.setPrototypeOf(bed, table);
Object.setPrototypeOf(table, head);

console.log(pockets.pen); // 3
console.log(pockets.glasses); // 1
console.log(head.glasses);

//
let hamster = {
    stomach: [],

    eat(food) {
        // this.stomach.push(food) does a lookup and gets the same reference
        this.stomach = [food];
    }
};

let speedy = {
    __proto__: hamster
};

let lazy = {
    __proto__: hamster
};

// This one found the food
speedy.eat("apple");
console.log( speedy.stomach ); // apple

// This one also has it, why? fix please.
console.log( lazy.stomach ); // apple


// this keyword
let counter = {
    count: 0,
    next: function() {
        return ++this.count;
    }
};

console.log(counter.next()); // 1
console.log(counter.next()); // 2
console.log(counter.next()); // 3

let car = {
    brand: 'Honda',
    getBrand: function() {
        return this.brand;
    }
};

console.log(car.getBrand()); // Honda