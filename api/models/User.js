/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
module.exports = {
	attributes: {
	    name: {
	        type: 'string',
	    },
	    email: {
	        type: 'string',
	        required: true,
	        unique: true
	    },
	    password: {
	        type: 'string',
	        required: true
	    },
	    // override default toJSON
	    toJSON: function() {
	        var obj = this.toObject();
	        delete obj.password;
	        return obj;
	    },

	    comments: {
	      collection: 'comment',
	      via: 'owner'
	    }
	}
};

