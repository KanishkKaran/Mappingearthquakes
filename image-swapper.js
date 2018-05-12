(function() {

d3.select("#step-one")
.on('stepin', function(){
  d3.select("#globe")
  .attr("src", "images/img2.gif")
  })

d3.select("#step-two")
.on('stepin', function(){
  d3.select("#globe")
  .attr("src", "images/img1.png")
})

d3.select("#step-three")
.on('stepin', function(){
  d3.select("#globe")
  .attr("src", "images/frame_002_delay-0.06s.gif")
})

d3.select("#blocks-step-one")
.on('stepin', function(){
  d3.select("#blocks")
  .attr("src", "images/blocks-nothing.gif")
})

d3.select("#blocks-step-two")
.on('stepin', function(){
  d3.select("#blocks")
  .attr("src", "images/blocks-red.gif")
})

d3.select("#blocks-step-three")
.on('stepin', function(){
  d3.select("#blocks")
  .attr("src", "images/blocks-red-yellow.gif")
})

d3.select("#blocks-step-four")
.on('stepin', function(){
  d3.select("#blocks")
  .attr("src", "images/blocks-all.gif")
})

})()
