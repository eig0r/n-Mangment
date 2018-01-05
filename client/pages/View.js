Meteor.subscribe('SiteAlarmAdd');
Meteor.subscribe('CairoOrange');
Meteor.subscribe('SiteAccess');
Meteor.subscribe('AllAlarms');
Meteor.subscribe('PgConnection');
Meteor.subscribe('CairoOrangeSharing');



Template.mainView.helpers({
  mdata: function() {
    return SiteAlarmAdd.find({},{sort:{createdAt: -1}});
  },
    limitamountvalue() {return Session.get('amountvaluetarget')
  },
      SearchSiteresult() {return Session.get('SearchSite')
    },
    SharingSitesH() {return Session.get('SharingSites')
},
    AccountDetailsF() {return Session.get('AccountDetails')
},
  Alarmncounter: function() {
    var today = new Date();
    return SiteAlarmAdd.find({}).count();
},
  AlarmncounterPending: function() {
    var today = new Date();
    return SiteAlarmAdd.find({Status:'Pending'}).count();
},
    Time() {return Session.get('Timer')
  },
  editing: function(){
  return Session.equals('commento', this._id);
}

});


Template.search2.events = {
  'keyup input#searchBox': function () {
    AutoCompletion.autocomplete({
      element: 'input#searchBox',       // DOM identifier for the element
      collection: ShiftEng,              // MeteorJS collection object
      field: 'OctShiftEng',                    // Document field name to search for
      limit: 5,
                      // Max number of elements to show
      sort: { name: 1 }});



  }

}





// Update Last Comment & Alarm Time Taken
Template.mainView.events({

	'click .Update': function(event){

       event.preventDefault();
    Session.set('_id',this._id);
    Session.set('Ocuurance',this.createdAt);
		var ID=Session.get('_id');
    var AlarmTime=Session.get('Ocuurance');
      var date = new Date();
      var AlarmTimeR = new Date(AlarmTime).getTime();
      var TimeNow = new Date().getTime();
      var hourDiff = TimeNow - AlarmTimeR; //in ms
      var secDiff = hourDiff / 1000; //in s
      var minDiff = hourDiff / 60 / 1000; //in minutes
      var hDiff = hourDiff / 3600 / 1000; //in hours
      var humanReadable = {};
      humanReadable.hours = Math.floor(hDiff);
      humanReadable.minutes = parseFloat(minDiff - 60 * humanReadable.hours).toFixed(0);
  var getlastcomment=Session.get('LastCV');
      SiteAlarmAdd.update({_id:ID},
       {$set:{AlarmSLA: humanReadable , LastUpdate:getlastcomment}});
       Session.set('LastCV','');
       document.getElementById("lastComment").value="";
}
});

Template.mainView.events({
'click .commentvalue': function(event){

     event.preventDefault();

    var testo2=  document.getElementById("lastComment").value;
  Session.set('LastCV',testo2);

}
});





// Insert New Alarm

Template.mainView.events({
  'submit .new-Site-Alarm':function (event) {
     event.preventDefault();
      var SiteID= event.target.SiteSearchId.value;
      var AlarmName= Session.get('FmActionF');
      var area= event.target.area.value;
      var office= event.target.office.value;


      var Status= 'not handled yet';
      var Access= 'NA';
      SiteAlarmAdd.insert({
        SiteID: SiteID,
        AlarmName: AlarmName,
        Area:area,
        Office:office,
        Status:Status,
        Access:Access,
        createdAt:new Date()
      });
       return false;
}
  });
// End


// Insert Access



Template.mainView.events({
  'click .AccessNeg':function (event) {
     event.preventDefault();
      var si= Session.get('SiteID');
      var AssignedNegotiatorName= document.getElementById("AssignedNegotiatorName").value;
      var Problemdescription= document.getElementById("Problemdescription").value;
      var RepeatedCase= document.getElementById("RepeatedCase").value;
      var solvingDuration= document.getElementById("solvingDuration").value;
      var NegotiatorFeedback= document.getElementById("NegotiatorFeedback").value;
      var Solved= document.getElementById("Solved").value;


      SiteAccess.insert({
        SiteID:si,
      //  AccessType: AccessType,
       AssignedNegotiatorName:AssignedNegotiatorName,
       Problemdescription:Problemdescription,
       RepeatedCase:RepeatedCase,
       solvingDuration:solvingDuration,
       NegotiatorFeedback:NegotiatorFeedback,
       Solved:Solved,
       AccessClearanceTime:AccessClearanceTime,
      //  Reason:Reason,

        createdAt:new Date()
      });

    //   return false;
       var ID=Session.get('_id');

       SiteAlarmAdd.update({_id:ID},
         {$set:{Access: 'Access' }});
}
  });


// End




Template.mainView.events({

'click .SearchSite':function (event) {
   event.preventDefault();

   var siteresult=document.getElementById("SiteSearchId").value;
    console.log(siteresult);
Session.set('SearchSite',CairoOrange.find( { SiteCode:siteresult} ).fetch());
Session.set('FmActionF','');

   }
    });








  Template.mainView.events({

  'click .Save':function (event) {
     event.preventDefault();
     Session.set('SiteID',this.SiteID);
      Session.set('AlarmName',this.AlarmName);
       var si= Session.get('SiteID');
        var an= Session.get('AlarmName');
          var ShiftEng = document.getElementById("searchBox").value;


         AllAlarms.insert({
           SiteID: si,
           AlarmName: an,
           ShiftEng:ShiftEng,

           createdAt:new Date()
         });

     }
      });

// PG Connected
      Template.mainView.events({

      'click .PgSave':function (event) {
         event.preventDefault();
         Session.set('_id',this._id);
         Session.set('SiteID',this.SiteID);
          Session.set('AlarmName',this.AlarmName);
          Session.set('Area',this.Area);
          Session.set('Office',this.Office);
           var si= Session.get('SiteID');
            var an= Session.get('AlarmName');
            var ar= Session.get('Area');
            var of= Session.get('Office');
            var ConnectedTime = document.getElementById("ConnectedTime").value;
            var disConnectedTime = document.getElementById("disConnectedTime").value;
            var ConnectionReason = document.getElementById("ConnectionReason").value;


             PgConnection.insert({
               SiteID: si,
               AlarmName: an,
               Area:ar,
               Office:of,
               ConnectedTime:ConnectedTime,
               disConnectedTime:disConnectedTime,
               ConnectionReason:ConnectionReason,
               createdAt:new Date()
             });

             AllAlarms.insert({
               SiteID: si,
               AlarmName: an,
               Area:ar,
               Office:of,
               PG:'Connected',
               createdAt:new Date()
             });

  // Update Site AlarmAdd with PG Connection Status (Connect)..
             var ID=Session.get('_id');
             SiteAlarmAdd.update({_id:ID},
               {$set:{PG: 'Connected' }});

         }
          });


// PG DisConnected

          Template.mainView.events({

          'click .PgSaveDisconnect':function (event) {
             event.preventDefault();
             Session.set('_id',this._id);
             Session.set('SiteID',this.SiteID);
              Session.set('AlarmName',this.AlarmName);
              Session.set('Area',this.Area);
              Session.set('Office',this.Office);
               var si= Session.get('SiteID');
                var an= Session.get('AlarmName');
                var ar= Session.get('Area');
                var of= Session.get('Office');


             Session.set('_id',this._id);
                var ID=Session.get('_id');

                AllAlarms.insert({
                  SiteID: si,
                  AlarmName: an,
                  Area:ar,
                  Office:of,
                  PG:'disConnected',
                  createdAt:new Date()
                });

                 SiteAlarmAdd.update({_id:ID},
                   {$set:{PG: 'disConnected' }});
             }
              });


Template.mainView.events({

'click .SaveStatus':function (event) {
   event.preventDefault();
   Session.set('SiteID',this.SiteID);

    Session.set('_id',this._id);
    Session.set('AlarmName',this.AlarmName);
     var si= Session.get('SiteID');
      var an= Session.get('AlarmName');


      var ID= Session.get('_id');
      var test3= Session.get('FmActionF');


       AllAlarms.insert({
         SiteID: si,
         AlarmName: an,
         Status:test3,
         createdAt:new Date()
       });
var ID= Session.get('_id');
var test3= Session.get('FmActionF');
       SiteAlarmAdd.update({_id:ID},
         {$set:{Status: test3 }});

   }
    });

    Template.mainView.events({
        'change select': function (e) {

            var FMaction =  $(e.target).val();
            Session.set('FmActionF',FMaction);


        }
    });



Template.mainView.events({

'click .Status':function (event) {
   event.preventDefault();
   Session.set('FmActionF',' ')



   }
    });



      Template.mainView.events({

      'click .Save2':function (event) {
         event.preventDefault();
         Session.set('SiteID',this.SiteID);
          Session.set('AlarmName',this.AlarmName);
           var si= Session.get('SiteID');
            var an= Session.get('AlarmName');
              var FMaction = Session.get('FMactionF');


             AllAlarms.insert({
               SiteID: si,
               AlarmName: an,

               Status:FMaction,

               createdAt:new Date()
             });

         }
          });



// Get Site Data From db.Sites


//Template.mainView.helpers({
  //  limitamountvalue() {return Session.get('amountvaluetarget')}
//});

Template.mainView.events({
    'click #Get': function(event){

     event.preventDefault();
 Session.set('SiteID',this.SiteID);
  Session.set('AlarmName',this.AlarmName);
   var si= Session.get('SiteID');
    var an= Session.get('AlarmName');


     Session.set('amountvaluetarget',CairoOrange.find( { SiteCode:si} ).fetch());






}
  });
// End



Template.mainView.events({
    'click #Access': function(event){

     event.preventDefault();
 Session.set('SiteID',this.SiteID);
   var si= Session.get('SiteID');
   var Account=Session.get('AccountID');

          Session.set('SharingSites',CairoOrangeSharing.find( { SiteCode:si} ).fetch());
            Session.set('AccountDetails',MangmentTeam.find( { account:Account} ).fetch());

}
  });
// End



  Template.mainView.rendered=function() {
  	$('#my-datepicker').datepicker();
  }
