
var createModule = function(env, defaults) {
	if(!defaults || typeof defaults !== 'object') {
		defaults = {}
	}
	var functions = {
		boolean: function(key, defaultVal) {
			if(key in env) {
				var val = env[key]
				switch(val) {
					case '1':
					case 't':
					case 'true':
						return true
					case 'false':
					case '0':
					case 'f':
						return false
				}
				if(!isNaN(val)) {
					return Number(val) >= 1
				}
			}
			return defaultVal
		},
		string: function(key, defaultVal) {
			if(key in env) {
				return env[key]
			}
			return defaultVal
		},
		number: function(key, defaultVal) {
			if(key in env) {
				var val = env[key]
				return Number(val)
			}
			return defaultVal
		},
		integer: function(key, defaultVal) {
			if(key in env) {
				var val = env[key]
				return Math.floor(Number(val))
			}
			return defaultVal
		}
	}

	var module = {}
	for(var fnKey in functions) {
		module[fnKey] = (function(fn) {
			return function(key, defaultVal) {
				var mergedDefault = arguments.length === 2
					? defaultVal
					: defaults[key]
				return fn(key, mergedDefault)
			}
		})(functions[fnKey])
	}

	return module
}

module.exports = createModule(process.env, {})

module.exports.create = createModule

