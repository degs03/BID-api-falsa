const express = require("express");
const app = express();
const port = 8000;

const { faker } = require('@faker-js/faker');

app.use( express.json() );//Nos traduce a JSON
app.use( express.urlencoded({ extended: true }) );//para los caracteres especiales


class users {
    _id = faker.datatype.uuid();
    firstName = faker.name.firstName();
    lastName = faker.name.lastName();
    phNumber = faker.phone.number();
    email = faker.internet.email();
    password = faker.internet.password();
}
class company {
    _id = faker.datatype.uuid();
    name = faker.company.name();
    address = {
        street: faker.address.street(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country()
    }
}

app.get("/api/companies/new", (req, res) => {
res.json({ company: new company() });
})

app.get("/api/users/new", (req, res) => {
res.json({ users: new users() });
})

app.get("/api/users/companies", (req, res) => {
res.json({ users: new users(), company: new company() });
})

/*
// podemos preestablecer algunos usuarios
// más adelante almacenaremos los usuarios en una base de datos
const users = [
    { firstName: "Reimu",  lastName: "Hakurei"    },
    { firstName: "Marisa", lastName: "Kirisame"   },
    { firstName: "Sanae",  lastName: "Kochiya"    },
    { firstName: "Sakuya", lastName: "Izayoi"     },
    { firstName: "Momiji", lastName: "Inubashiri" }
];


//OBTENER USUARIO
app.get("/api/users", (req, res) => {
    res.json( users );
});

// GUARDAR USUARIO
app.post("/api/users", (req, res) => { // POST recibe el firstName el lastName y se agrega a la lista de usuarios
    console.log(req.body);
    users.push(req.body);
    res.json( { status: "ok" } );
});


//BUSCAMOS CON EL INDICE
app.get("/api/users/:id", (req, res) => { //utilizamos y obtenemos el parametro
    console.log(req.params.id);//aqui llega la informacion del parametro de arriba
    res.json( users[req.params.id] );
});


//ACTUALIZAR DATOS
app.put("/api/users/:id", (req, res) => {
    const id = req.params.id;
    users[id] = req.body;
    res.json( { status: "ok" } );
});


//ELIMINAR USUARIO
app.delete("/api/users/:id", (req, res) => {
    const id = req.params.id;
    users.splice(id, 1);
    res.json( { status: "ok" } );
});


*/
// esto tiene que estar debajo de los otros bloques de código
app.listen( port, () => console.log(`Listening on port: ${port}`) );
