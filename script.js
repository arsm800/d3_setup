var svg = d3.select("body").append("svg");

svg.attr("width", 500)
  .attr("height", 50);

var dataset = [5, 10, 15, 20, 25];

var circles = svg.selectAll("circle")
                .data(dataset)
                .enter()
                .append("circle");

circles.attr("cx", function(d, i) {
  return (i * 50) + 25;
})
  .attr("cy", h/2)
  .attr("r", function(d) {
    return d;
  });
