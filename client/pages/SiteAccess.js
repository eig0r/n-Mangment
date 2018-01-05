
Meteor.subscribe('SiteAccess');

Template.SiteAccess.helpers({
  AccessCoroprate: function() {
    return SiteAccess.find({},{sort:{createdAt: -1}});
  },
  AccessET: function() {
    return SiteAccess.find({},{sort:{createdAt: -1}});
  },
  AccessVF: function() {
    return SiteAccess.find({},{sort:{createdAt: -1}});
  },
  AccessNegotiator: function() {
    return SiteAccess.find({},{sort:{createdAt: -1}});
  }
});
