
Meteor.subscribe('SiteAccess');

Template.PgConnection.helpers({
  PgConnection: function() {
    return PgConnection.find({},{sort:{createdAt: -1}});
  }
});
