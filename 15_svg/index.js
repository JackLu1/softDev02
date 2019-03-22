var data = [['CentralAfricanRepublic', '700', '6.90'], ['Malawi', '1200', '20.40'], ['Niger', '1200', '0.30'], ['Liberia', '1300', '2.80'], ['Mozambique', '1300', '24.50'], ['Comoros', '1600', '6.50'], ['Eritrea', '1600', '5.80'], ['Madagascar', '1600', '1.80'], ['SierraLeone', '1600', '15.00'], ['Togo', '1700', '6.90'], ['Haiti', '1800', '40.60'], ['BurkinaFaso', '1900', '77.00'], ['Afghanistan', '2000', '23.90'], ['Kiribati', '2000', '30.60'], ['Rwanda', '2100', '2.70'], ['Ethiopia', '2200', '17.50'], ['Guinea', '2200', '2.70'], ['Mali', '2200', '7.90'], ['Benin', '2300', '1.00'], ['Zimbabwe', '2300', '11.30'], ['Uganda', '2400', '9.40'], ['Yemen', '2500', '27.00'], ['Nepal', '2700', '3.00'], ['Vanuatu', '2700', '1.70'], ['Syria', '2900', '50.00'], ['SaoTomeandPrincipe', '3200', '12.20'], ['Tajikistan', '3200', '2.40'], ['Tanzania', '3200', '10.30'], ['Lesotho', '3300', '28.10'], ['Kenya', '3500', '40.00'], ['Senegal', '3500', '48.00'], ['Djibouti', '3600', '40.00'], ['MarshallIslands', '3600', '36.00'], ['Cameroon', '3700', '4.30'], ['Kyrgyzstan', '3700', '7.10'], ['PapuaNewGuinea', '3700', '2.50'], ['WallisandFutuna', '3800', '8.80'], ["Coted'Ivoire", '3900', '9.40'], ['Cambodia', '4000', '0.30'], ['Zambia', '4000', '15.00'], ['Bangladesh', '4200', '4.40'], ['Sudan', '4300', '19.60'], ['WestBank', '4300', '27.90'], ['Mauritania', '4500', '10.20'], ['Ghana', '4700', '11.90'], ['Pakistan', '5400', '6.00'], ['Honduras', '5600', '5.60'], ['Samoa', '5700', '5.20'], ['Niue', '5800', '12.00'], ['Nicaragua', '5900', '6.40'], ['Nigeria', '5900', '16.50'], ['Tonga', '5900', '1.10'], ['Timor-Leste', '6000', '4.40'], ['Burma', '6300', '4.00'], ['Moldova', '6700', '4.10'], ['Angola', '6800', '6.60'], ['Uzbekistan', '6900', '5.00'], ['Vietnam', '6900', '2.20'], ['CaboVerde', '7000', '9.00'], ['India', '7200', '8.50'], ['Laos', '7400', '0.70'], ['Bolivia', '7600', '4.00'], ['ElSalvador', '8000', '7.00'], ['Guyana', '8100', '11.10'], ['Guatemala', '8200', '2.30'], ['Belize', '8300', '9.00'], ['Philippines', '8400', '5.70'], ['Morocco', '8600', '10.20'], ['Ukraine', '8800', '9.20'], ['Bhutan', '9000', '3.20'], ['Jamaica', '9200', '12.20'], ['Jordan', '9200', '18.30'], ['Armenia', '9500', '18.90'], ['Libya', '9600', '30.00'], ['Fiji', '9800', '4.50'], ['Eswatini', '10100', '28.00'], ['Georgia', '10700', '11.80'], ['Kosovo', '10900', '30.50'], ['Dominica', '11000', '23.00'], ['AmericanSamoa', '11200', '29.80'], ['Namibia', '11200', '34.00'], ['Ecuador', '11500', '4.60'], ['SaintVincentandtheGrenadines', '11500', '18.80'], ['Tunisia', '11900', '15.50'], ['Anguilla', '12200', '8.00'], ['Cuba', '12300', '2.60'], ['Nauru', '12300', '23.00'], ['Indonesia', '12400', '5.40'], ['Albania', '12500', '13.80'], ['Venezuela', '12500', '27.10'], ['Egypt', '12700', '12.20'], ['BosniaandHerzegovina', '12800', '20.50'], ['Paraguay', '12800', '5.70'], ['SriLanka', '12900', '4.40'], ['Mongolia', '13000', '8.00'], ['Peru', '13500', '6.90'], ['SouthAfrica', '13600', '27.50'], ['Colombia', '14400', '9.30'], ['SaintLucia', '14400', '20.00'], ['Palau', '14700', '1.70'], ['Macedonia', '14900', '22.40'], ['Suriname', '14900', '8.90'], ['Curacao', '15000', '13.00'], ['Grenada', '15100', '24.00'], ['Serbia', '15100', '14.10'], ['Algeria', '15200', '11.70'], ['Brazil', '15600', '12.80'], ['China', '16700', '3.90'], ['CookIslands', '16700', '13.10'], ['Iraq', '16700', '16.00'], ['CostaRica', '16900', '8.10'], ['Botswana', '17000', '20.00'], ['DominicanRepublic', '17000', '5.10'], ['FrenchPolynesia', '17000', '21.80'], ['Azerbaijan', '17500', '5.00'], ['Montenegro', '17800', '16.10'], ['Thailand', '17900', '0.70'], ['Gabon', '18100', '28.00'], ['Turkmenistan', '18200', '11.00'], ['Barbados', '18600', '10.10'], ['Belarus', '18900', '0.80'], ['Maldives', '19200', '2.90'], ['Lebanon', '19600', '9.70'], ['Mexico', '19900', '3.40'], ['Iran', '20100', '11.80'], ['Argentina', '20900', '8.40'], ['Bulgaria', '21800', '6.20'], ['Mauritius', '22300', '7.10'], ['Uruguay', '22400', '7.60'], ['NorthernMarianaIslands', '24500', '11.20'], ['Chile', '24600', '6.70'], ['Romania', '24600', '4.90'], ['Croatia', '24700', '12.40'], ['Panama', '25400', '6.00'], ['Kazakhstan', '26300', '5.00'], ['AntiguaandBarbuda', '26400', '11.00'], ['Turkey', '27000', '10.90'], ['Latvia', '27700', '8.70'], ['Greece', '27800', '21.50'], ['Russia', '27900', '5.20'], ['SaintKittsandNevis', '28200', '4.50'], ['Malaysia', '29100', '3.40'], ['TurksandCaicosIslands', '29100', '10.00'], ['Seychelles', '29300', '3.00'], ['Hungary', '29600', '4.20'], ['Poland', '29600', '4.90'], ['Portugal', '30500', '8.90'], ['NewCaledonia', '31100', '14.70'], ['TrinidadandTobago', '31300', '4.90'], ['Estonia', '31700', '5.80'], ['Lithuania', '32400', '7.10'], ['Slovakia', '33100', '8.10'], ['Montserrat', '34000', '5.60'], ['BritishVirginIslands', '34200', '2.90'], ['Slovenia', '34500', '6.60'], ['Czechia', '35500', '2.90'], ['Guam', '35600', '4.50'], ['Israel', '36400', '4.20'], ['VirginIslands', '37000', '10.40'], ['Cyprus', '37200', '11.10'], ['EquatorialGuinea', '37400', '8.60'], ['Aruba', '37500', '7.70'], ['Italy', '38200', '11.30'], ['Spain', '38400', '17.20'], ['NewZealand', '39000', '4.70'], ['PuertoRico', '39400', '10.80'], ['FaroeIslands', '40000', '2.20'], ['Greenland', '41800', '9.10'], ['Malta', '41900', '4.60'], ['Japan', '42900', '2.90'], ['CaymanIslands', '43800', '4.00'], ['France', '44100', '9.40'], ['UnitedKingdom', '44300', '4.40'], ['Finland', '44500', '8.50'], ['SaintPierreandMiquelon', '46200', '8.70'], ['Belgium', '46600', '7.10'], ['Canada', '48400', '6.30'], ['Bahrain', '49000', '3.60'], ['Andorra', '49900', '3.70'], ['Austria', '50000', '5.50'], ['Denmark', '50100', '5.70'], ['Australia', '50400', '5.60'], ['Taiwan', '50500', '3.80'], ['Germany', '50800', '3.80'], ['Sweden', '51200', '6.70'], ['Iceland', '52200', '2.80'], ['Guernsey', '52500', '1.20'], ['Netherlands', '53900', '4.90'], ['SaudiArabia', '54500', '6.00'], ['Jersey', '56600', '4.00'], ['SanMarino', '59000', '8.10'], ['UnitedStates', '59800', '4.40'], ['HongKong', '61500', '3.10'], ['Gibraltar', '61700', '1.00'], ['Switzerland', '62100', '3.20'], ['Kuwait', '65800', '1.10'], ['SintMaarten', '66800', '12.00'], ['UnitedArabEmirates', '68600', '1.60'], ['FalklandIslands(IslasMalvinas)', '70800', '1.00'], ['Norway', '72100', '4.20'], ['Ireland', '73200', '6.70'], ['Brunei', '78900', '6.90'], ['IsleofMan', '84600', '1.10'], ['Singapore', '94100', '2.20'], ['Bermuda', '99400', '7.00'], ['Luxembourg', '105100', '5.80'], ['Macau', '110000', '2.00'], ['Monaco', '115700', '2.00'], ['Qatar', '124100', '8.90'], ['Liechtenstein', '139100', '2.40']]
// vim fold zf + {movement key}

d3.select("body").append("text").text("https://www.cia.gov/library/publications/the-world-factbook/docs/notesanddefs.html")
// var c = document.createElementNS("http://www.w3.org/2000/svg", "line")

var width = 500,
    height = 500

var x = d3.scaleLinear()
    .domain(data[0][1], data[data.length-1][1])
    .range(0, width)

var y = d3.scaleLinear()
    .domain(data[0][2], data[data.length-1][2])
    .range(0, height)

var chart = d3.select('.chart')
    .attr('width', width)
    .attr('height', height)

var graph = chart.selectAll("g")
    .data(data)
    .enter().append("g")
    .attr("transform", function(d, i) { return "translate(0," + i * height + ")"; });

console.log(graph)
graph.append("rect")
    .attr("width", x)
    .attr("height", height - 1);

graph.append("text")
    .attr("x", function(d) { return x(d) - 3; })
    .attr("y", height / 2)
    .attr("dy", ".35em")
    .text(function(d) { return d; });

//console.log(chart)

