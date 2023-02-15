/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //DUALAN FARM GROWTH ANALYTICS
  // Setup Block
  const weight_dualan = <?php echo json_encode($weight_dualan); ?>;
    const data_dualan = {
      labels: ['March 2018', 'April 2018', 'May 2018', 'June 2018', 'July 2018'],
      datasets: [{
        label: ['Dualan Farm', 'Crab Growth', 'March-July 2018'],
        data: weight_dualan,
        borderWidth: 1
      }]
    };

  // Config Block
    const config_dualan = {
      type: 'line',
      data: data_dualan,
      plugins: [ChartDataLabels],
      options: {
        plugins: {
            datalabels: {
              padding: 10,
              align: '-60'
            },
            title: {
              display: true,
              text: 'Dualan Farm Growth Yield March 2018 to July 2018'
            },
            legend: {
              position: 'chartArea'
            },
        }
      },
    };

  // Render Block
    const growthdualanchart = new Chart(
      document.getElementById('growthdualanchart'),
      config_dualan
    );

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //DUALAN FARM serrata GROWTH ANALYTICS
  // Setup Block
  const $growth_dualan_serrata = <?php echo json_encode($growth_dualan_serrata); ?>;
  const $growth_dualan_olivacea = <?php echo json_encode($growth_dualan_olivacea); ?>;
  const $growth_dualan_tranquebarica = <?php echo json_encode($growth_dualan_tranquebarica); ?>;
    const data_weightgrowth_dualan = {
      labels: ['1st Month', '2nd Month', '3rd Month', '4th Month', '5th Month'],
      datasets: [{
        label: 'Serrata Crabs',
        data: $growth_dualan_serrata,
        borderWidth: 1
      },
      {
        label: 'Olivacea Crabs',
        data: $growth_dualan_olivacea,
        borderWidth: 1
      },
      {
        label: 'Tranquebarica Crabs',
        data: $growth_dualan_tranquebarica,
        borderWidth: 1
      }
    ]
    };

  // Config Block
    const config_weightgrowth_dualan = {
      type: 'line',
      data: data_weightgrowth_dualan,
      plugins: [ChartDataLabels],
      options: {
        plugins: {
            datalabels: {
              padding: 10,
              align: '-60'
            },
            title: {
              display: true,
              text: 'Dualan Farm All Crabs Growth Yield'
            },
            legend: {
              position: 'chartArea'
            },
        }
      },
    };

  // Render Block
    const weightgrowthdualanchart = new Chart(
      document.getElementById('weightgrowthdualanchart'),
      config_weightgrowth_dualan
    );  
 
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //GROWTH YIELD OF ALL CRABS ANALYTICS
  // Setup Block
  const $avgweightgrowth_dualan = <?php echo json_encode($avgweightgrowth_dualan); ?>;
  const $avgweightgrowth_merlan = <?php echo json_encode($avgweightgrowth_merlan); ?>;
  const $avgweightgrowth_lansangan = <?php echo json_encode($avgweightgrowth_lansangan); ?>;
    const data_allcrabs_growth = {
      labels: ['1st Month', '2nd Month', '3rd Month', '4th Month', '5th Month'],
      datasets: [{
        label: ['Merlan Farm All', 'Crabs Growth Yield'],
        data: $avgweightgrowth_merlan,
        borderWidth: 1
      },
      {
        label: ['Dualan Farm All', 'Crabs Growth Yield'],
        data: $avgweightgrowth_dualan,
        borderWidth: 1
      },
      {
        label: ['Lansangan Farm All', 'Crabs Growth Yield'],
        data: $avgweightgrowth_lansangan,
        borderWidth: 1
      }     
    ]
    };

  // Config Block
    const config_allcrabs_growth = {
      type: 'line',
      data: data_allcrabs_growth,
      options: {
        plugins: {
          title: {
            display: true,
            text: 'Growth Yield of All Crabs'
          },
          legend: {
            position: 'chartArea'
          }
        }
      },
    };

  // Render Block
    const growthallcrabs_growth = new Chart(
      document.getElementById('avgweightgrowthchart'),
      config_allcrabs_growth
    );  

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //AVG PRICE FOR ALL FARM ANALYTIC
  // Setup Block
  const $avgprice_merlan = <?php echo json_encode($avgprice_merlan); ?>;
  const $avgprice_dualan = <?php echo json_encode($avgprice_dualan); ?>;
  const $avgprice_lansangan = <?php echo json_encode($avgprice_lansangan); ?>;
    const data_avgprice = {
      labels: ['Olivacea', 'Serrata', 'Tranquebarica'],
      datasets: [{
        label: 'Merlan Farm',
        data: $avgprice_merlan,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 1
      }, {
        label: 'Dualan Farm',
        data: $avgprice_dualan,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgb(75, 192, 192))',
        borderWidth: 1
      }, {
        label: 'Lansangan Farm',
        data: $avgprice_lansangan,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235))',
        borderWidth: 1
      }]
    };
  
  // Config Block
  const config_avgprice = {
      type: 'bar',
      data: data_avgprice,
      plugins: [ChartDataLabels],
      options: {
        plugins: {
            title: {
              display: true,
              text: 'Average Price of All Crabs Per Farm'
            },
            legend: {
              position: 'right'
            },
        }
      },
    };
  
  // Render Block
  const avgpricechart = new Chart(
      document.getElementById('avgpricechart'),
      config_avgprice
    );    

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //AVG weight FOR ALL FARM ANALYTIC
  // Setup Block
  const $avgweight_merlan = <?php echo json_encode($avgweight_merlan); ?>;
  const $avgweight_dualan = <?php echo json_encode($avgweight_dualan); ?>;
  const $avgweight_lansangan = <?php echo json_encode($avgweight_lansangan); ?>;
    const data_avgweight = {
      labels: ['Olivacea', 'Serrata', 'Tranquebarica'],
      datasets: [{
        label: 'Merlan Farm',
        data: $avgweight_merlan,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        borderWidth: 1
      }, {
        label: 'Dualan Farm',
        data: $avgweight_dualan,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgb(75, 192, 192))',
        borderWidth: 1
      }, {
        label: 'Lansangan Farm',
        data: $avgweight_lansangan,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235))',
        borderWidth: 1
      }]
    };
  
  // Config Block
  const config_avgweight = {
      type: 'bar',
      data: data_avgweight,
      plugins: [ChartDataLabels],
      options: {
        plugins: {
            title: {
              display: true,
              text: 'Average Weight of All Crabs Per Farm'
            },
            legend: {
              position: 'right'
            },
        }
      },
    };
  
  // Render Block
  const avgweightchart = new Chart(
      document.getElementById('avgweightchart'),
      config_avgweight
    );  

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  // Total Crab per Crab type of Dualan Farm
  //Setup Block
  const $totalcrabtype_dualan = <?php echo json_encode($totalcrabtype_dualan); ?>;
  const data_totalcrabtype_dualan = {
    labels: [ 'Olivacea', 'Serrata','Tranquebarica' ],
    datasets: [{
      label: 'My First Dataset',
      data: $totalcrabtype_dualan,
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
    }]
  };

  // Config Block
  const config_totalcrabtype_dualan = {
  type: 'doughnut', 
  data: data_totalcrabtype_dualan,
  plugins: [ChartDataLabels],
  options: {
    plugins: {
            title: {
              display: true,
              text: 'Average Weight of All Crabs Per Farm'
            },
            legend: {
              position: 'right'
            },
        }
  }
  };

  // Render Block
  const totalcrabdualanchart = new Chart(
      document.getElementById('totalcrabdualanchart'),
      config_totalcrabtype_dualan
    );  

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
