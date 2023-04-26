const express = require('express');
const cors = require('cors');

const { users } = require('./database/users');
const { client } = require('./database/client');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/s', (req, res) => {
    res.status(200).send(sdf)
})

app.post('/login', async (req, res) => {
    try {
        const userLoginInfo = req.body;
        // const user = users.find(u => u.username === userLoginInfo.username);


        const userQuery = await client.query(`select * from users where email='${userLoginInfo.username}'`)
        const user = userQuery.rows[0] ? userQuery.rows[0] : null;

        if (user) {
            console.log('line 28', user.password, userLoginInfo)
            if (user.password == userLoginInfo.password) {
                res.status(200).json(user);
            } else {
                res.status(400).json({ message: 'Girdiğiniz kullanıcı bilgileri yanlıştır.' })
            }
        } else {
            res.status(404).json({ message: 'Kullanıcı bulunamadı' });
        }
    } catch (error) {
        console.log(error)
        await client.end();
    }
})

app.post('/signup', async (req, res) => {
    const signupInfo = req.body;

    const userQuery = await client.query(`select * from users where email='${signupInfo.email}'`)
    const user = userQuery.rows[0] ? userQuery.rows[0] : null;

    console.log(user) 
    if (user) {
        res.status(200).json({ message: 'Zaten kayıtlı ve dingilmiş.' })
    } else {
        await client.query(`insert into users("firstName", "lastName", email, password) values ('${signupInfo.firstName}', '${signupInfo.lastName}', '${signupInfo.email}', '${signupInfo.password}')`);
        res.status(204).send('Kayıt Başarılı')
    }



})

app.listen(3000, async () => {
    console.log('server is running on 3000');

    console.log(users)
})