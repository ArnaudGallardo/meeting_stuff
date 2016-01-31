FlowRouter.route("/", {
  name: "index",
  action: function() {
    BlazeLayout.render("index");
  }
});

FlowRouter.route("/room/:roomId", {
  name: "room",
  action: function(params, queryParams) {
    BlazeLayout.render("room", params);
  }
});
