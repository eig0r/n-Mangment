


import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);








ShiftEng = new Mongo.Collection('ShiftEng');
ShiftEng.allow({
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
