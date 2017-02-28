var x = 0
var x2 = 0
var sample = 0
var perlin = Perlin();

function refresh() {

    // modified perlin noise walk through Mike Bostock's
    // "less angry rainbow"

		var color = d3.scale.cubehelix()
        .domain([0, .5, 1])
        .range([
          d3.hsl(-100, 0.75, 0.35),
          d3.hsl(  80, 1.50, 0.80),
          d3.hsl( 260, 0.75, 0.35)
        ])

    var update = (Math.random()-0.5)*0.001
    var sample = x2 * 0.001 + perlin.get1d(7 * x / 8000 + update * 1)
    x2 = sample

    if (sample < 0) {
			sample = sample + 1
		}
		sample = sample % 1

    x = x + 1

    var d3Color = d3.rgb(color(sample))

    $("body").css({
         background: d3Color.darker(0.5).toString()
     });

    $(".sociallink").css({


    })

    setTimeout(refresh, 40)

};

refresh();
