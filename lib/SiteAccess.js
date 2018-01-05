


import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);








SiteAccess = new Mongo.Collection('siteAccess');
SiteAccess.allow({
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
