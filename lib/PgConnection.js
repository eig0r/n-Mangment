


import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);








PgConnection = new Mongo.Collection('pgConnection');
PgConnection.allow({
   insert: function(userId, doc){
      return !!userId;
},
remove: function(userId, doc){
   return !!userId;
},
update: function(userId, doc){
   return !!userId;
}

});
