


import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);








CairoOrange = new Mongo.Collection('CairoOrange');
CairoOrange.allow({
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
