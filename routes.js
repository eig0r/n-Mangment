// Home Page
FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render("MainLayout", {main: "Home"});
    }
});

FlowRouter.route('/mainView', {
    name: 'mainView',
    action() {
        BlazeLayout.render("HomeLayout", {main: "mainView"});
    }
});

FlowRouter.route('/PgConnection', {
    name: 'PgConnection',
    action() {
        BlazeLayout.render("HomeLayout", {main: "PgConnection"});
    }
});

FlowRouter.route('/SiteAccess', {
    name: 'siteAccess',
    action() {
        BlazeLayout.render("HomeLayout", {main: "SiteAccess"});
    }
});

FlowRouter.route('/Pending', {
    name: 'pending',
    action() {
        BlazeLayout.render("HomeLayout", {main: "Pending"});
    }
});

FlowRouter.route('/ExceedSLA', {
    name: 'exceedSLA',
    action() {
        BlazeLayout.render("HomeLayout", {main: "ExceedSLA"});
    }
});

FlowRouter.route('/ActiveAlarms', {
    name: 'activeAlarms',
    action() {
        BlazeLayout.render("HomeLayout", {main: "ActiveAlarms"});
    }
});

FlowRouter.route('/OctoberOffice', {
    name: 'octoberOffice',
    action() {
        BlazeLayout.render("HomeLayout", {main: "OctoberOffice"});
    }
});

FlowRouter.route('/MohandsenOffice', {
    name: 'mohandsenOffice',
    action() {
        BlazeLayout.render("HomeLayout", {main: "MohandsenOffice"});
    }
});

FlowRouter.route('/GisSuezOffice', {
    name: 'gisSuezOffice',
    action() {
        BlazeLayout.render("HomeLayout", {main: "GisSuezOffice"});
    }
});

FlowRouter.route('/ShoubraOffice', {
    name: 'shoubraOffice',
    action() {
        BlazeLayout.render("HomeLayout", {main: "ShoubraOffice"});
    }
});

FlowRouter.route('/MaadieOffice', {
    name: 'maadieOffice',
    action() {
        BlazeLayout.render("HomeLayout", {main: "MaadieOffice"});
    }
});

FlowRouter.route('/NasrCityOffice', {
    name: 'nasrCityOffice',
    action() {
        BlazeLayout.render("HomeLayout", {main: "NasrCityOffice"});
    }
});

FlowRouter.route('/SendMail', {
    name: 'SendMail',
    action() {
        BlazeLayout.render("HomeLayout", {main: "SendMail"});
    }
});

FlowRouter.route('/Setting', {
    name: 'setting',
    action() {
        BlazeLayout.render("HomeLayout", {main: "Setting"});
    }
});
