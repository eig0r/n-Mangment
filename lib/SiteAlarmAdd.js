


import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);








SiteAlarmAdd = new Mongo.Collection('siteAlarmAdd');
SiteAlarmAdd.allow({
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
