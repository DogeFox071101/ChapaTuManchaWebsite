export default {
    "development": {
      "username": "user_ctm_backend",
      "password": "ctmctmctm2023",
      "database": "chapatumancha_db",
      "host": "127.0.0.1",
      "dialect": "postgres"
    },
    "test": {
      "username": "root",
      "password": null,
      "database": "database_test",
      "host": "127.0.0.1",
      "dialect": "mysql"
    },
    "production": {
      "use_env_variable": "DATABASE_URL",
      "dialect": "postgres",
      "dialectOptions": {
        "ssl": {
          "rejectUnauthorized": false
        }
      }
    }
  }