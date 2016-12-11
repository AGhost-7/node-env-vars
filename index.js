
var createModule = function(process) {
	return {
		boolean: function(key, defaultVal) {
			if(key in process.env) {
				var val = process.env[key]
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
			if(key in process.env) {
				return process.env[key]
			}
			return defaultVal
		},
		number: function(key, defaultVal) {
			if(key in process.env) {
				var val = process.env[key]
				return Number(val)
			}
			return defaultVal
		},
		integer: function(key, defaultVal) {
			if(key in process.env) {
				var val = process.env[key]
				return Math.floor(Number(val))
			}
			return defaultVal
		}
	}
}

module.exports = createModule(process)

module.exports.createModule = createModule

