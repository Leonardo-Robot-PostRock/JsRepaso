const empleados = [
    {
        id: 1,
        nombre: 'Leonardo'
    },
    {
        id: 2,
        nombre: 'Victoria'
    },
    {
        id: 3,
        nombre: 'Anna'
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    },
];

const getEmpleado = (id) => {
    const empleado = empleados.find(e => e.id === id)?.nombre;

    return new Promise((resolve, reject) => {
        (empleado)
            ? resolve(empleado)
            : reject(`No existe el empleado con el id ${id}`);
    })

}

const getSalario = (id) => {
    const salario = salarios.find(s => s.id === id)?.salario

    return new Promise((resolve, reject) => {
        (salario)
            ? resolve(salario)
            : reject(`No existe el salario para el id ${id}`)

    })
}

const id = 3;

// getEmpleado(id)
//     .then(empleado => console.log(empleado))
//     .catch(err => console.log(err))

// getSalario(id)
//     .then(salario => console.log(salario))
//     .catch(err => console.log(err))

// PROMISE HELL -------------------------------------------------------

// getEmpleado(id)
//     .then(empleado => {
//         getSalario(id)
//             .then(salario => {
//                 console.log('El empleado:', empleado, ' tiene un salario de ', salario);
//             })
//             .catch(err => console.log(err))
//     })
//     .catch(err => console.log(err))

let nombre;

// Resolución a Promise hell

getEmpleado(id)
    .then(empleado => {
        nombre = empleado
        return getSalario(id)
    })
    .then(salario => console.log(`El empleado: `, nombre, ' tiene un salario de: ', salario))
    .catch(err => console.log(err))
