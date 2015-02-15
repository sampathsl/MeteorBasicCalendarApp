CalEvents = new Meteor.Collection('calendarEvents');
Session.setDefault('editingCalendarEvent',null);
Session.setDefault('showEditEvent',false);

Router.route('/', function () {
    this.render('homepage');
});

Router.route('/homepage', function () {
    this.render('homepage');
});

Router.route('/calendar', function () {
    this.render('calendar');
});

Template.calendar.helpers({
    options: function(){
        return {
            defaultView : 'agendaWeek'
        }
    }
});

