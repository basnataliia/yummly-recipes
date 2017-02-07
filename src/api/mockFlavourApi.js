const flavours = [
  {
    id: 'bitter-1',
    name: 'bitter'
  },
  {
    id: 'meaty-1',
    name: 'meaty'
  },
  {
    id: 'piquant-1',
    name: 'piquant'
  },
  {
    id: 'salty-1',
    name: 'salty'
  },
  {
    id: 'sour-1',
    name: 'sour'
  },
  {
    id: 'sweet-1',
    name: 'sweet'
  }
];

//This would be performed on the server in a real app. Just stubbing in.

// const getRandomInt = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// };

// let randomNumber = getRandomInt(1000, 10000);

// const generateId = (flavour) => {
//   return flavour.name.toLowerCase() + '-' + randomNumber;
// };

class FlavourApi {
  static getAllFlavours() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], flavours));
      }, 2);
    });
  }

  // static saveAuthor(author) {
	// author = Object.assign({}, author); // to avoid manipulating object passed in.
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       // Simulate server-side validation
  //       const minAuthorNameLength = 3;
  //       if (author.firstName.length < minAuthorNameLength) {
  //         reject(`First Name must be at least ${minAuthorNameLength} characters.`);
  //       }
  //
  //       if (author.lastName.length < minAuthorNameLength) {
  //         reject(`Last Name must be at least ${minAuthorNameLength} characters.`);
  //       }
  //
  //       if (author.id) {
  //         const existingAuthorIndex = authors.findIndex(a => a.id == author.id);
  //         authors.splice(existingAuthorIndex, 1, author);
  //       } else {
  //         //Just simulating creation here.
  //         //The server would generate ids for new authors in a real app.
  //         //Cloning so copy returned is passed by value rather than by reference.
  //         author.id = generateId(author);
  //         authors.push(author);
  //       }
  //
  //       resolve(author);
  //     }, delay);
  //   });
  // }

  // static deleteAuthor(authorId) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       const indexOfAuthorToDelete = authors.findIndex(author => {
  //         author.id == authorId;
  //       });
  //       authors.splice(indexOfAuthorToDelete, 1);
  //       resolve();
  //     }, delay);
  //   });
  // }
}

export default FlavourApi;
