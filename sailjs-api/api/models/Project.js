/**
* Project.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    user:{
      model: 'user'
    },
    title: {
      type: 'string',
      required: true
    },
    date:{
      type: 'date',
      required: true
    },
    description: {
      type: 'string',
      required: true
    },
    languages: {
      type: 'array'
    },
    links : {
      collection: 'link',
      via: 'project'
    }
  }
};

