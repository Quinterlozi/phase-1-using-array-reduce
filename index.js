

// Code your solution here
const batteryBatches = [ 
    { battery: 5 }, 
    { battery: 12 },
    { battery: 7 }, 
    { battery: 7 }
  ];
  
  const totalBatteries = batteryBatches.reduce(function(total, batch) {
    return total + batch.battery;
  }, 0);
  