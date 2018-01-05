
Meteor.subscribe('ShiftEng');

Template.Home.onCreated(function(){
	this.autorun(() => {
// this.subscribe('OfficeShiftEng');
    Session.set('AccountID',Meteor.userId());



	});
});

Template.Home.events({
    'click #button':function (event) {
     event.preventDefault();
 FlowRouter.go('/mainView')

console.log('Lets check in')
 }
  });


Template.Home.events({
    'click #OfficeShifEng':function (event) {
     event.preventDefault();

     var Oct = document.getElementById("OctEng").value;
     var Mohandsen = document.getElementById("MohandsenEng").value;
     var Maadie = document.getElementById("MaadieEng").value;
console.log('click')

      ShiftEng.insert({
        OctShiftEng: Oct,
        MohandsenShiftEnd:Mohandsen,
        MaadieShiftEng: Maadie,


        userId:Meteor.userId()
      });

       return false;

}

  });
