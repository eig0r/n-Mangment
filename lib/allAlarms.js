


import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);








AllAlarms = new Mongo.Collection('allAlarms');
AllAlarms.allow({
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
