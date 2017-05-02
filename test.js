var env = require('./')
var assert = require('assert')

describe('env', function() {

	it('boolean', function() {
		assert.equal(env.boolean('BOOL_NULL', false), false)
		assert.equal(env.boolean('BOOL_TRUE'), true)
		assert.equal(env.boolean('BOOL_FALSE'), false)
	})

	it('string', function() {
		assert.equal(env.string('STRING_HAI','BLEH'), 'hai')
		assert.equal(env.string('STRING_NULL', 'BLEH'), 'BLEH')
	})

	it('number', function() {
		assert.equal(env.number('NUMBER_VALID'), 10)
		assert(isNaN(env.number('NUMBER_INVALID')),
			'should be nan when invalid')
		assert.equal(env.number('NUMBER_NULL', 10), 10)
	})

	it('should allow global defaults', function() {
		var custom = env.create(process.env, {
			foo: 'bar'
		})
		assert.equal(custom.string('foo'), 'bar')
	})

	it('should allow to pull from different sources', function() {
		var custom = env.create({
			one: 2
		})
		assert.equal(custom.integer('one'), 2)
	})
})
