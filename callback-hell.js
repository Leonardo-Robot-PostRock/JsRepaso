const empleados = [
    {
        id: 1,
        name: 'Leonardo'
    },
    {
        id: 2,
        name: 'Victoria'
    },
    {
        id: 3,
        name: 'Anna'
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
    const empleado = empleados.find(e => e.id === id)
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

getEmpleado(1, (err, employee) => {
    //En caso de ser null no entrará a la condición dado que null === false
    if (err) {
        console.log('ERROR!');
        return console.log(err);
    }

    console.log('Empleado existe');
    console.log(employee);
})