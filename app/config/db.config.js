module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "mysql@12345",
    DB: "testdb",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 3000,
        idle: 10000
    }
}