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

const getEmpleado = (id, callback) => {
    const empleado = empleados.find(e => e.id === id)?.nombre;// ? => null check operator - .nombre regresa sólo nombre
    if (empleado) {
        //Mandar null como primer argumento en caso de que no exista un error
        callback(null, empleado);
    } else {
        callback(`Empleado con id ${id} no existe`);
    }
}

// const getEmpleado = (id) => {
//     const empleado = empleados.find(e => e.id === id)
//     if (empleado)
//         return empleado;
//     else
//         return `Empleado con id ${id} no existe`;
// }

const getSalario = (id, callback) => {
    const salario = salarios.find(s => s.id === id)?.salario;// ? => null check operator - .salario regresa sólo salarios
    salario ? callback(null, salario) : callback(`No existe salario para el id ${id}`);
}

//Llamada de las funciones

// empleados ---------------------------------------------

const id = 2;

getEmpleado(id, (err, empleado) => {
    //En caso de ser null no entrará a la condición dado que null === false
    if (err) {
        console.log('ERROR!');
        return console.log(err);
    }

    console.log('Empleado existe');
    console.log(empleado);

    // salarios ---------------------------------------------------

    getSalario(id, (err, salario) => {
        if (err) {
            return console.log(err);
        }

        console.log('El empleado:', empleado, ' tiene un salario de: ', salario)
    })
})
