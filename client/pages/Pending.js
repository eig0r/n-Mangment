
Meteor.subscribe('SiteAccess');

Template.Pending.helpers({
  Pending: function() {
    return SiteAlarmAdd.find({Status:'Pending'},{sort:{createdAt: -1}});
  }
});
