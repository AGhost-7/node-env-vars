# env-vars
Dead simple environment variable parser.

```
var env = require('env-vars')
var pgPassword = env.string('PGPASS')
var pgPort = env.integer('PGPORT', 5552)
```

## API

- `string(key[, defaultValue])`: Returns a string for the given key. Fallsback to the
optional default value if the environment variable is not defined.
- `boolean(key[, defaultValue])`: Returns a boolean environment variable for the given key.
- `number(key[, defaultValue])`: Returns a number environment variable for the given key.
- `integer(key[, defaultValue])`: Returns an integer environment variable for the given key.

