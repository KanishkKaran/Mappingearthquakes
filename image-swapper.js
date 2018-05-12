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

d3.select("#blocks-step-one")
.on('stepin', function(){
  d3.select("#mountains")
  .attr("src", "images/Delhiupshot.jpg")
})

d3.select("#blocks-step-two")
.on('stepin', function(){
  d3.select("#mountains")
  .attr("src", "images/RajasthanUpshot.jpg")
})

d3.select("#blocks-step-three")
.on('stepin', function(){
  d3.select("#mountains")
  .attr("src", "images/blocks-red-yellow.gif")
})


})()
