var margin = {
    top: 50,
    right: 70,
    bottom: 50,
    left: 50
  },
  width = 1100,
  height = 400;

//get Data
const _urlData = "data/climamundial.json";

d3.json(_urlData).then(datos => {
  console.log(datos);
 
  let svg = d3.select(".grafico")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom);
    //.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  
    const x = d3.scaleBand()
    .range([0, width-margin.right])
    .domain(datos.map( d => d.B.substring(0, 4)))
    .padding(0.2);

    let y = d3.scaleBand()
    .domain(d3.range(1, 13))
    .range([0, height]);
    
    const yAxis = d3.axisLeft(y)
		.tickFormat(d => moment(d, 'M').format('MMMM'));

  svg
  .append("g")
  .attr("class", "x axis")
  .attr("transform", "translate("+60+"," + margin.top + ")")
  //.attr("transform", "rotate(-90)")
  .call(d3.axisTop(x))
  .selectAll("text")
  .attr("transform", "rotate(90)")
  .attr("y", -9)
    .attr("x",-15);


  svg
  .append("g")
  .attr("class", "y axis")
  .attr("transform", "translate("+margin.right+"," + margin.top + ")")
  .call(yAxis);

  console.log("Temperatura min "+d3.min(datos, d=> +d.A));
  console.log("Temperatura max "+d3.max(datos, d=> +d.A));
  let color = d3.scaleDiverging(d3.interpolateRdBu)
  .domain([d3.min(datos, d=> +d.A),0, d3.max(datos, d=> +d.A)]);


  svg.selectAll('rect')
  .data(datos)
  .enter().append('rect')
  .attr("transform", "translate("+margin.right+"," + margin.top + ")")
    .attr('x', d => x(moment(d.B).year()))
    .attr('y', d => y(moment(d.B).month() + 1))
    .attr('width', x.bandwidth())
    .attr('height', y.bandwidth())
    .attr('fill', d => color(+d.A))
    .on("mouseover", function(d){
  d3.select(".info").remove();
 var x = d3.mouse(this)[0] - 10
 var y = d3.mouse(this)[1] - 10
 var fontSize = 20
 svg.append("text")
  
   .html(`<tspan x=${x} y=${y} dy=${fontSize+2} >
VT = ${d.A}
</tspan>`)
   .attr("font-size", fontSize)
   .attr("class", "info")
  
});
const legendRectSize =10,legendSpacing=2;
var legend = d3.select('svg')
    .append("g")
    .selectAll("g")
    .data(color.domain())
    .enter()
    .append('g')
      .attr('class', 'legend')
      .attr('transform', function(d, i) {
        var height = legendRectSize;
        var x = 2;
        var y = i * height;
        return 'translate(' + x + ',' + y + ')';
    });

    legend.append('rect')
    .attr('width', legendRectSize)
    .attr('height', legendRectSize)
    .style('fill', color)
    .style('stroke', color);

legend.append('text')
    .attr('x', legendRectSize + legendSpacing)
    .attr('y', legendRectSize - legendSpacing)
    .text(function(d) { return d; });
  
});
