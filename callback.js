// setTimeout(() => {
//     console.log('Hola mundo');
// }, 1000);

const getUserById = (id, callback) => {
    const user = {
        id,
        name: 'Leonardo'
    }

    setTimeout(() => {
        callback(user);
    }, 1500);
}

getUserById(10, (user) => {
    console.log(user.name.toUpperCase)
    console.log(user.id)
});

// Desestructuración

// getUserById(10, ({ id, name }) => {
//     console.log(name.toUpperCase())
//     console.log(id)
// });