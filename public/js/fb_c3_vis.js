(function() {
  $.getJSON( '/fb_d3')
    .done(function( d ) {
      var yCounts = d.users.map(function(item){
        return item;
      });

      yCounts.unshift('Media Count');

      console.log(yCounts);

    var chart = c3.generate({
        data: {
           columns: [
                   yCounts
           ],
           type: 'bar'
        },
        bar: {
            width: {
            ratio: 0.5 // this makes bar width 50% of length between ticks
        }
        // or
        //width: 100 // this makes bar width 100px
         }
    });
    });
})();