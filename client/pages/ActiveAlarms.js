
Meteor.subscribe('SiteAccess');

Template.ActiveAlarms.helpers({
  SiteAlarm: function() {
    return AllAlarms.find({},{sort:{createdAt: -1}});
  }
});
