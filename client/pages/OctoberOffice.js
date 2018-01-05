Meteor.subscribe('SiteAlarmAdd');
Meteor.subscribe('CairoOrange');
Meteor.subscribe('SiteAccess');
Meteor.subscribe('AllAlarms');
Template.mainView.helpers({
  mdata: function() {
    return SiteAlarmAdd.find({},{sort:{createdAt: -1}});
  },
  limitamountvalue() {return Session.get('amountvaluetarget')}
});



// Insert New Alarm

Template.OctoberOffice.events({
  'submit .new-Site-Alarm':function (event) {
     event.preventDefault();
      var SiteID= event.target.SiteID.value;
      var AlarmName= event.target.AlarmName.value;
      var date= event.target.date.value;
      var Status= 'not handled yet';
      var Access= 'NA';
      SiteAlarmAdd.insert({
        SiteID: SiteID,
        AlarmName: AlarmName,
        date: date,
        Status:Status,
        Access:Access,
        createdAt:new Date()
      });
       return false;
}
  });
// End


// Insert Access



Template.OctoberOffice.events({
  'click .Access':function (event) {
     event.preventDefault();
      var si= Session.get('SiteID');
      var AccessType= document.getElementById("AccessType").value;


      SiteAccess.insert({
        SiteID:si,
        AccessType: AccessType,

        createdAt:new Date()
      });
       return false;
}
  });
// End

Template.OctoberOffice.events({

'click .St1':function (event) {
   event.preventDefault();
    var Status= document.getElementById("Status").value;
    console.log(Status);
   Status.value = "New value";
     return false;
}
  });




// Get Site Data From db.Sites


//Template.mainView.helpers({
  //  limitamountvalue() {return Session.get('amountvaluetarget')}
//});

Template.OctoberOffice.events({
    'click #Get': function(event){

     event.preventDefault();
 Session.set('SiteID',this.SiteID);
  Session.set('AlarmName',this.AlarmName);
   var si= Session.get('SiteID');
    var an= Session.get('AlarmName');


     Session.set('amountvaluetarget',CairoOrange.find( { SiteCode:si} ).fetch());


     AllAlarms.insert({
       SiteID: si,
       AlarmName: an,

       createdAt:new Date()
     });

}
  });
// End



Template.OctoberOffice.events({
    'click #Access': function(event){

     event.preventDefault();
 Session.set('SiteID',this.SiteID);
   var si= Session.get('SiteID');
     console.log(si)

     Session.set('amountvaluetarget',CairoOrange.find( { SiteCode:si} ).fetch());

}
  });
// End



  Template.OctoberOffice.rendered=function() {
  	$('#my-datepicker').datepicker();
  }
