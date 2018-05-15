function click_action_logout() {
  document.location = '/account/logout';
}
document.addEventListener('DOMContentLoaded', function(e) {
  var click_action_logout_els = document.getElementsByClassName('click-action-logout');
  for(var i=0; i < click_action_logout_els.length; i++) {
    var element = click_action_logout_els[i];
    element.addEventListener('click', click_action_logout);
  };
});
