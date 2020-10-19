module.exports = {
  type: "postgres",
  host: "localhost",
  port: "5432",
  username: "",
  password: "",
  database: "happy",
  migrations: ["./src/shared/infra/typeorm/migrations/*.ts"],
  entities: ["./src/modules/**/infra/typeorm/entities/*.ts"],
  cli: {
    migrationsDir: "./src/shared/infra/typeorm/migrations",
  },
};
