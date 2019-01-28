document.getElementById("todayDate").innerHTML = new Date().toLocaleDateString();



var ctx1 = document.getElementById("myChart1");
var myChart1 = new Chart(ctx1, {
    type: 'line',
    data: {
        labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"],
        datasets: [{
            label: "Běh",
            fill: true,
            lineTension: 0.1,
            backgroundColor: [
                'rgba(255, 99, 132, 0.3)',
            ],
            borderColor: [
                'rgba(255,99,132,1)',
            ],
            borderWidth: 1,
            data: [1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1],

        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    maxTicksLimit: 1
                }
            }]
        },
        title: {
            display: false,
            text: "Plnění habitů"
        }
    }
});

var ctx2 = document.getElementById("myChart2");
var myChart2 = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"],
        datasets: [{

            label: "Spánek",
            fill: true,
            lineTension: 0.1,
            backgroundColor: [
                'rgba(255, 159, 64, 0.3)',
            ],
            borderColor: [
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
            data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1],
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    maxTicksLimit: 1
                }
            }]
        },
        title: {
            display: false,
            text: "Plnění habitů"
        }
    }
});


var ctx3 = document.getElementById("myChart3");
var myChart3 = new Chart(ctx3, {
    type: 'line',
    data: {
        labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"],
        datasets: [{
            label: "Pitný režim",
            fill: true,
            lineTension: 0.1,
            backgroundColor: [
                'rgba(54, 162, 235, 0.3)',
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1,
            data: [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    maxTicksLimit: 1
                }
            }]
        },
        title: {
            display: false,
            text: "Plnění habitů"
        }
    }
});


/*
backgroundColor: [
    'rgba(255, 99, 132, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(255, 159, 64, 0.2)'
],
    borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)' 
        */

/* var ctx1 = document.getElementById("myChart1");
var myChart = new Chart(ctx1, {
    type: 'line',
    data: {
        labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"],
        datasets: [{
            label: "Běh",
            fill: true,
            lineTension: 0.1,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(255,99,132,1)',
            ],
            borderWidth: 1,
            data: [1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1],

        }, {

            label: "Pitný režim",
            fill: true,
            lineTension: 0.1,
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1,
            data: [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
        }, {

            label: "Spánek",
            fill: true,
            lineTension: 0.1,
            backgroundColor: [
                'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1,
            data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1],
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        title: {
            display: true,
            text: "Plnění habitů"
        }
    }
});
*/




