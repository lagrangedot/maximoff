# Maximoff - JavaScript Class Factory for Data Classes

## Introduction
Maximoff is a simple JavaScript class factory function that allows you to define and create data classes. Data classes are classes that contain only data and are typically used for storing and managing data objects.

## Usage
1. **Define Data Classes:** Use the `dataclass` function to define data classes. Pass a constructor function as a parameter, which is used to initialize the properties of data objects.
2. **Create Objects:** Use the defined data classes to create data objects.
3. **Set Object Properties:** You can directly set the property values of data objects.

## Example
```javascript
// Define the User data class
const User = dataclass(class {
    constructor(name, email, admin) {
        this.name = name;
        this.email = email;
        this.admin = admin;
    }
});

// Create User objects
const user1 = new User('John Doe', 'john@example.com', false);
const user2 = new User('Jane Smith', 'jane@example.com', true);

// Output the property values of User objects
console.log(user1.name); // Output: John Doe
console.log(user2.email); // Output: jane@example.com

Advanced Usage
You can combine with other functionalities to create more complex data structures, such as configuring server objects:
// Define the Server data class
const Server = dataclass(class {
    constructor(port = 8080, host = "localhost", users = []) {
        this.port = port;
        this.host = host;
        this.users = users;
    }
});

// Define server configuration
const serverConfig = maximoff.define(
    'server',
    Server,
    {
        APP_PORT: 'port',
        APP_HOST: 'host'
    }
);

// Output the port number of server configuration
console.log("Port:", serverConfig.port);


## Notes
- Data classes contain only data properties, not methods.
- Default parameters can be added in data classes for ease of property setting during object creation.
- You can combine with other functionalities such as environment variables, configuration parameters, etc., to create more flexible data class objects.
