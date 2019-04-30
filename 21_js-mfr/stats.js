//Jack Lu
//SoftDev2 pd8
//K21 -- Onions, Bell Peppers, and Celery, Oh My!
//2019-04-29


// % _ of _
// median _ of _ 
// number of _
// number of _ with _ and _

body = d3.select('body');
d3.json('./data.json').then(function(data){
    
    /* PERCENT OF ASIAN KIDS IN SCHOOLS */
    var percent_asian = data.map( function(n){
        return parseFloat(n['asian_per']);
    } );
    sum = percent_asian.reduce( function(a,b){
        return a + b;
    } );
    mean = sum / percent_asian.length;
    body.append('p').text('Average percentage of Asian enrollment = ' + mean);

    /* NUMBER OF SCHOOLS WITH MORE THAN 25% SPECIAL ED KIDS */
    var percent_sped = data.map( function(n){
        return parseFloat(n['sped_percent']);
    } );
    var filtered = percent_sped.filter( function(n){
        return (n > 25.0);
    } );
    body.append('p')
        .text('Number of schools with more than 25% special ed enrollment = ' + filtered.length);


    /* NUMBER OF SCHOOLS WITH ELL PERCENT > 10 AND WHITE PERCENT > 50 */
    var white_and_ell = data.map( function(n){
        return [ parseFloat(n['ell_percent']), parseFloat(n['white_per']) ];
    } )
    console.log(white_and_ell);
    var ell_filtered = white_and_ell.filter( function(n){
        return (n[0] > 10 && n[1] > 50);
    } )
    body.append('p')
        .text('Number of schools with more than 10% ELL and more than 50% white = ' 
            + filtered.length);

});
