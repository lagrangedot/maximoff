function dataclass(constructor) {
    return constructor;
}

const maximoff = {
    define(field, model, environ) {
        return {
            port: 8080,
            host: "localhost",
            users: []
        };
    },
    maximoff(options) {
        return true;
    }
};

const User = dataclass(class {
    constructor(name, email, admin) {
        this.name = name;
        this.email = email;
        this.admin = admin;
    }
});

const Server = dataclass(class {
    constructor(port = 8080, host = "localhost", users = []) {
        this.port = port;
        this.host = host;
        this.users = users;
    }
});

const serverConfig = maximoff.define(
    'server',
    Server,
    {
        APP_PORT: 'port',
        APP_HOST: 'host'
    }
);

if (require.main === module) {
    maximoff.maximoff({
        envvar: 'APP_CONFIG',
        config_argument: '--config',
        options_map: { '--port': 'server.port' }
    });
    console.log("Port:", serverConfig.port);
}
