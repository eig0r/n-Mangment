


import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);








CairoOrangeSharing = new Mongo.Collection('CairoOrangeSharing');
CairoOrangeSharing.allow({
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
