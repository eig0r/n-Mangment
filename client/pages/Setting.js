Meteor.subscribe('MangmentTeam');

Template.Setting.events({
  'click #AddUser':function (event) {
     event.preventDefault();
     var name = document.getElementById("name").value;
     var account = document.getElementById("account").value;
     var nationalID = document.getElementById("nationalID").value;
     var mobile = document.getElementById("mobile").value;

      MangmentTeam.insert({
        name: name,
        account:account,
        nationalID: nationalID,
        mobile:mobile,

        userId:Meteor.userId()
      });

       return false;

}

  });
