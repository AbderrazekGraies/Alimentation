
  const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Big Mac', 'Pin au Chocolat', 'Patte Carbonara',],
      datasets: [{
        label: '',
        data: [400,250,1200],
        borderWidth: false,
        hoverOffset:20,
        backgroundColor: [
            "#FF5E5B",
            "#D8D8D8",
            "green",
            "#00CECB",
            "#FFED66",
          ],
      }]
    },
    options: {
        responsive:true,
        cutout:"90%",
        plugins:{
            legend:false,
        },
        layout:{
            padding:20,
        }
    }
  });


function sliderChangeHeight(val) {
    document.getElementById("outputHeight").innerHTML = val;
}


document.getElementById("height").value = 160;

function sliderChangeWeight(val) {
    document.getElementById("outputWeight").innerHTML = val;
}


document.getElementById("weight").value = 70;