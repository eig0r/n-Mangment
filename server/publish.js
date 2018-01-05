
Meteor.publish('SiteAlarmAdd', function(){
	 if(Roles.userIsInRole(this.userId, 'admin')) {
   return SiteAlarmAdd.find();
}
  });



	Meteor.publish('CairoOrange', function(){
		 if(Roles.userIsInRole(this.userId, 'admin')) {
	   return CairoOrange.find();
	}
	  });


Meteor.publish('SiteAccess', function(){
	 if(Roles.userIsInRole(this.userId, 'admin')) {
	 return SiteAccess.find();
}
	});

	Meteor.publish('PgConnection', function(){
		 if(Roles.userIsInRole(this.userId, 'admin')) {
		 return PgConnection.find();
	}
		});

		Meteor.publish('ShiftEng', function(){
			 if(Roles.userIsInRole(this.userId, 'admin')) {
			 return ShiftEng.find();
		}
			});




Meteor.publish('MangmentTeam', function(){
	 if(Roles.userIsInRole(this.userId, 'admin')) {
	 return MangmentTeam.find();
}
	});

Meteor.publish('AllAlarms', function(){
	 if(Roles.userIsInRole(this.userId, 'admin')) {
	 return AllAlarms.find();
}
	});

	Meteor.publish('CairoOrangeSharing', function(){
		 if(Roles.userIsInRole(this.userId, 'admin')) {
		 return CairoOrangeSharing.find();
	}
		});
