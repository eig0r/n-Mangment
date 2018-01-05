


import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);








MangmentTeam = new Mongo.Collection('mangmentTeam');
MangmentTeam.allow({
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
