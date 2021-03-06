function getCountry(){
    var country1=document.getElementById("country").value;

$.post("/confirm", {country:country1}, function getter(data, status){
    var obj = JSON.parse(data)
    var x1=Object.keys(obj.confirmed)
    var y1=Object.values(obj.confirmed)
    var trace1 = {
        x: x1,
        y: y1,
        type: 'scatter',
        name: 'Confirmed Cases',
        line: {
            color: "#00AACC",
            width: 3,
            shape: 'spline'
        }
    };
    var data = [trace1];
    let layout = {
        title: "Confirmed",
    };
    let config = { 
        responsive: true,
        displaylogo: false,
    };
    Plotly.newPlot('myDiv1', data, layout, config);
});
$.post("/daily_confirmed", {country:country1}, function getter(data, status){
    var obj = JSON.parse(data)
    var x2=Object.keys(obj.daily_confirm)
    var y2=Object.values(obj.daily_confirm)
    var trace2 = {
        x: x2,
        y: y2,
        type: 'scatter',
        name: 'Daily Confirmed Cases',
        line: {
            color: "#162275",
            width: 3,
            shape: 'spline'
        }
    };
    if(country1=="World"){
        var x21=Object.keys(obj.pred)
        var y21=Object.values(obj.pred)
        var trace21 = {
            x: x21,
            y: y21,
            type: 'scatter',
            mode: 'lines',
            name: 'Predicted Trend',
            line: {
                color: "#aa501a",
                width: 3,
                shape: 'spline'
            }
        };
        var data = [trace2, trace21]
    }
    else
    var data = [trace2];
    let layout = {
        title: "Daily Confirmed",
        showlegend: true,
        legend: {
            x: 0,
            y: 1
        }
    };
    let config = { 
        responsive: true,
        displaylogo: false,
    };
    Plotly.newPlot('myDiv2', data, layout, config);
});
$.post("/deaths", {country:country1}, function getter(data, status){
    var obj = JSON.parse(data)
    var x3=Object.keys(obj.deaths)
    var y3=Object.values(obj.deaths)
    var trace3 = {
        x: x3,
        y: y3,
        type: 'scatter',
        name: 'Deaths',
        line: {
            color: "#AB0000",
            width: 3,
            shape: 'spline'
        }
    };
    var data = [trace3];
    let layout = {
        title: "Deaths",
    };
    let config = { 
        responsive: true,
        displaylogo: false,
    };
    Plotly.newPlot('myDiv3', data, layout, config);
});
$.post("/recovered", {country:country1}, function getter(data, status){
    var obj = JSON.parse(data)
    var x4=Object.keys(obj.recovered)
    var y4=Object.values(obj.recovered)
    var trace4 = {
        x: x4,
        y: y4,
        type: 'scatter',
        name: 'Recovered',
        line: {
            color: "#006400",
            width: 3,
            shape: 'spline'
        }
    };
    var data = [trace4];
    let layout = {
        title: "Recovered",
    };
    let config = { 
        responsive: true,
        displaylogo: false,
    };
    Plotly.newPlot('myDiv4', data, layout, config);
});
}