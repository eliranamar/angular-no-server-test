app.factory('namesFactory', function () {
  var names = [{
      first: "Moshe",
      last: "Solomon",
      age:28
    },
    {
      first: "Brandon",
      last: "Blandsoe",
      age:79
    },
    {
      first: "Hadas",
      last: "Shamir",
      age:20
    },
    {
      first: "Rami",
      last: "Travelsi",
      age:13
    }
  ];
  return {
    names: names
  };
});
