
  const ctx = document.getElementById('myChart');

  var Chart=new Chart(ctx, {
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
            "#000000",
            "#00CECB",
            "#FFED66",
            "purple",
            "pink",
            "yellow",
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




function addPlate(){

  //getting food and calories values
  var food=document.getElementById("food").value;
  var calorie=document.getElementById("calorie").value;


  //create container row and food divs
  if(food!="" && calorie!=""){
    var titlefoodDiv=document.createElement("div");
    titlefoodDiv.classList.add("titlefood");
    titlefoodDiv.innerHTML="<h3>"+food+"</h3>";

    var kgFoodDiv=document.createElement("div");
    kgFoodDiv.classList.add("kgFood");
    kgFoodDiv.innerHTML=calorie;

    var foodDiv=document.createElement("div");
    foodDiv.classList.add("food");
    foodDiv.appendChild(titlefoodDiv);
    foodDiv.appendChild(kgFoodDiv);

    var colDiv=document.createElement("div");
    colDiv.classList.add("col");
    colDiv.appendChild(foodDiv);

    var rowDiv=document.createElement("div");
    rowDiv.classList.add("row");
    rowDiv.appendChild(colDiv);

    var containerDiv=document.createElement("div");
    containerDiv.classList.add("container");
    containerDiv.appendChild(rowDiv);

    var ListDiv = document.getElementById("List");
    ListDiv.appendChild(containerDiv);

    //update the chart
    //add label
    Chart.data.labels.push(food);
    //add data
    Chart.data.datasets.forEach((dataset) => {
      dataset.data.push(calorie);
    });
    //finally update
    Chart.update();
  }

}