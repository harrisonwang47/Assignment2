(function() {
  $.getJSON( '/fb_d3')
    .done(function( d ) {
      var yCounts = d.users.map(function(item){
        return item;
      });

      console.log(yCounts);
	  var fill = d3.scale.category20();

	  d3.layout.cloud().size([300, 300])
	      .words(yCounts.map(function(d) {
	        return {text: d, size: 10 + Math.random() * 50};
	      }))
	      .rotate(function() { return ~~(Math.random() * 2) * 90; })
	      .font("Impact")
	      .fontSize(function(d) { return d.size; })
	      .on("end", draw)
	      .start();

	  function draw(words) {
	    d3.select("body").append("svg")
	        .attr("width", 300)
	        .attr("height", 300)
	      .append("g")
	        .attr("transform", "translate(150,150)")
	      .selectAll("text")
	        .data(words)
	      .enter().append("text")
	        .style("font-size", function(d) { return d.size + "px"; })
	        .style("font-family", "Impact")
	        .style("fill", function(d, i) { return fill(i); })
	        .attr("text-anchor", "middle")
	        .attr("transform", function(d) {
	          return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
	        })
	        .text(function(d) { return d.text; });
	  }

    });
})();


