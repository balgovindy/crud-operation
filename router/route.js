const express = require('express');
const { v4 } = require('uuid');

const router = express.Router();

let employee = [];

router.get('/', (req, res) => {
    res.send(employee);
});

router.post('/', (req, res) => {
    const user = req.body;
    const userWithId = { ...user, id: v4() }
    employee.push(userWithId);
    res.send(`User with id ${id} added`)
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const foundEmployee = employee.find(user => user.id === id);
    res.send(foundEmployee);
    res.send(`User with id ${id} found`)
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    employee = employee.filter(user => user.id !== id);

    res.send(`User with id ${id} deleted`);

});


router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const props = req.body;
    const userNeedTobeUpdated = employee.find(user => user.id === id);
    Object.keys(userNeedTobeUpdated).forEach(key=>{
        if(props[key]) userNeedTobeUpdated[key] = props[key];
    });
    res.send(`User with id ${id} updated`);
})

module.exports.router = router;