function infoOwnProperty(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`Key: ${key}, value: ${obj[key]}`);
        }
    }
}

const user = {
    username: 'Alex',
    age: 30,
    password: 'password'
}

const admin = Object.create(user);
admin.login = 'some login';
admin.active = true;

infoOwnProperty(admin);