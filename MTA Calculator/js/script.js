// Toll prices for each bridge, vehicle type, and payment method
const tollPrices = {
    bridge1: {
      car: {
        ezpass: 6.94,
        midtier: 9.11,
        tollbymail: 11.19,
      },
      motorcycle: {
        ezpass: 3.02,
        midtier: 3.89,
        tollbymail: 4.71,
      },
      truck: {
        "2-axle": {
          ezpass: 12.55,
          midtier: 17.55,
          tollbymail: 22.39,
        },
        "3-axle": {
          ezpass: 20.56,
          midtier: 28.84,
          tollbymail: 36.86,
        },
        "4-axle": {
          ezpass: 26.29,
          midtier: 36.35,
          tollbymail: 46.08,
        },
        "5-axle": {
          ezpass: 34.27,
          midtier: 47.62,
          tollbymail: 60.56,
        },
        "6-axle": {
          ezpass: 39.98,
          midtier: 55.13,
          tollbymail: 69.77,
        },
  
      },
    },
    bridge2: {
      car: {
        ezpass: 6.94,
        midtier: 9.11,
        tollbymail: 11.19,
      },
      motorcycle: {
        ezpass: 3.02,
        midtier: 3.89,
        tollbymail: 4.71,
      },
      truck: {
        "2-axle": {
          ezpass: 12.55,
          midtier: 17.55,
          tollbymail: 22.39,
        },
        "3-axle": {
          ezpass: 20.56,
          midtier: 28.84,
          tollbymail: 36.86,
        },
        "4-axle": {
          ezpass: 26.29,
          midtier: 36.35,
          tollbymail: 46.08,
        },
        "5-axle": {
          ezpass: 34.27,
          midtier: 47.62,
          tollbymail: 60.56,
        },
        "6-axle": {
          ezpass: 39.98,
          midtier: 55.13,
          tollbymail: 69.77,
        },
  
      },
    },
    bridge3: {
      car: {
        ezpass: 6.94,
        midtier: 9.11,
        tollbymail: 11.19,
      },
      motorcycle: {
        ezpass: 3.02,
        midtier: 3.89,
        tollbymail: 4.71,
      },
      truck: {
        "2-axle": {
          ezpass: 12.55,
          midtier: 17.55,
          tollbymail: 22.39,
        },
        "3-axle": {
          ezpass: 20.56,
          midtier: 28.84,
          tollbymail: 36.86,
        },
        "4-axle": {
          ezpass: 26.29,
          midtier: 36.35,
          tollbymail: 46.08,
        },
        "5-axle": {
          ezpass: 34.27,
          midtier: 47.62,
          tollbymail: 60.56,
        },
        "6-axle": {
          ezpass: 39.98,
          midtier: 55.13,
          tollbymail: 69.77,
        },
  
      },
    },
  
    bridge4: {
      car: {
        ezpass: 6.94,
        midtier: 9.11,
        tollbymail: 11.19,
      },
      motorcycle: {
        ezpass: 3.02,
        midtier: 3.89,
        tollbymail: 4.71,
      },
      truck: {
        "2-axle": {
          ezpass: 12.55,
          midtier: 17.55,
          tollbymail: 22.39,
        },
        "3-axle": {
          ezpass: 20.56,
          midtier: 28.84,
          tollbymail: 36.86,
        },
        "4-axle": {
          ezpass: 26.29,
          midtier: 36.35,
          tollbymail: 46.08,
        },
        "5-axle": {
          ezpass: 34.27,
          midtier: 47.62,
          tollbymail: 60.56,
        },
        "6-axle": {
          ezpass: 39.98,
          midtier: 55.13,
          tollbymail: 69.77,
        },
  
      },
    },
    bridge5: {
      car: {
        ezpass: 6.94,
        midtier: 9.11,
        tollbymail: 11.19,
      },
      motorcycle: {
        ezpass: 3.02,
        midtier: 3.89,
        tollbymail: 4.71,
      },
      truck: {
        "2-axle": {
          ezpass: 12.55,
          midtier: 17.55,
          tollbymail: 22.39,
        },
        "3-axle": {
          ezpass: 20.56,
          midtier: 28.84,
          tollbymail: 36.86,
        },
        "4-axle": {
          ezpass: 26.29,
          midtier: 36.35,
          tollbymail: 46.08,
        },
        "5-axle": {
          ezpass: 34.27,
          midtier: 47.62,
          tollbymail: 60.56,
        },
        "6-axle": {
          ezpass: 39.98,
          midtier: 55.13,
          tollbymail: 69.77,
        },
  
      },
    },
    bridge6: {
      car: {
        ezpass: 6.94,
        midtier: 9.11,
        tollbymail: 11.19,
        statenisland: 2.75,
  
      },
      motorcycle: {
        ezpass: 3.02,
        midtier: 3.89,
        tollbymail: 4.71,
      },
      truck: {
        "2-axle": {
          ezpass: 12.55,
          midtier: 17.55,
          tollbymail: 22.39,
        },
        "3-axle": {
          ezpass: 20.56,
          midtier: 28.84,
          tollbymail: 36.86,
        },
        "4-axle": {
          ezpass: 26.29,
          midtier: 36.35,
          tollbymail: 46.08,
        },
        "5-axle": {
          ezpass: 34.27,
          midtier: 47.62,
          tollbymail: 60.56,
        },
        "6-axle": {
          ezpass: 39.98,
          midtier: 55.13,
          tollbymail: 69.77,
        },
  
      },
    },
    bridge7: {
      car: {
        ezpass: 3.18,
        midtier: 5.04,
        tollbymail: 8.25,
      },
      motorcycle: {
        ezpass: 2.17,
        midtier: 3.46,
        tollbymail: 4.71,
      },
      truck: {
        "2-axle": {
          ezpass: 0.00,
          midtier: 0.00,
          tollbymail: 0.00,
        },
        "3-axle": {
          ezpass: 0.00,
          midtier: 0.00,
          tollbymail: 0.00,
        },
        "4-axle": {
          ezpass: 0.00,
          midtier: 0.00,
          tollbymail: 0.00,
        },
        "5-axle": {
          ezpass: 0.00,
          midtier: 0.00,
          tollbymail: 0.00,
        },
        "6-axle": {
          ezpass: 0.00,
          midtier: 0.00,
          tollbymail: 0.00,
        },
  
      },
    },
    bridge8: {
      car: {
        ezpass: 2.60,
        midtier: 4.11,
        tollbymail: 5.60,
        rockawayResident: 1.70,
      },
      motorcycle: {
        ezpass: 2.17,
        midtier: 3.46,
        tollbymail: 4.71,
      },
      truck: {
        "2-axle": {
          ezpass: 6.28,
          midtier: 8.77,
          tollbymail: 11.19,
        },
        "3-axle": {
          ezpass: 10.28,
          midtier: 14.42,
          tollbymail: 18.44,
        },
        "4-axle": {
          ezpass: 13.14,
          midtier: 18.17,
          tollbymail: 23.03,
        },
        "5-axle": {
          ezpass: 17.14,
          midtier: 23.82,
          tollbymail: 30.28,
        },
        "6-axle": {
          ezpass: 20.0,
          midtier: 27.57,
          tollbymail: 34.89,
        },
  
      },
    },
    bridge9: {
      car: {
        ezpass: 2.60,
        midtier: 4.11,
        tollbymail: 5.60,
        rockawayResident: 1.70,
      },
      motorcycle: {
        ezpass: 2.17,
        midtier: 3.46,
        tollbymail: 4.71,
      },
      truck: {
        "2-axle": {
          ezpass: 6.28,
          midtier: 8.77,
          tollbymail: 11.19,
        },
        "3-axle": {
          ezpass: 10.28,
          midtier: 14.42,
          tollbymail: 18.44,
        },
        "4-axle": {
          ezpass: 13.14,
          midtier: 18.17,
          tollbymail: 23.03,
        },
        "5-axle": {
          ezpass: 17.14,
          midtier: 23.82,
          tollbymail: 30.28,
        },
        "6-axle": {
          ezpass: 20.0,
          midtier: 27.57,
          tollbymail: 34.89,
        },
  
      },
    },
  };
  
  function calculateTotalCost() {
    const selectedVehicleType = document.querySelector('input[name="vehicle-type"]:checked');
    
  
    let totalEzPassCost = 0;
    let totalMidTierCost = 0;
    let totalTollByMailCost = 0;
    let totalStatenIsland = 0;
    let totalRockawayResident = 0;
  
    if (selectedVehicleType) {
      const selectedVehicleValue = selectedVehicleType.value;
      // Loop through the selected bridges
      for (const bridgeId in tollPrices) {
        if (document.getElementById(bridgeId).checked) {
          //selected vehicle type: truck
          if (selectedVehicleValue === 'truck') {
            const selectedAxles = document.querySelector('#truck-axles').value;
            const vehiclePrices = tollPrices[bridgeId].truck[selectedAxles];
            if (vehiclePrices) {
              totalEzPassCost += vehiclePrices.ezpass || 0;
              totalMidTierCost += vehiclePrices.midtier || 0;
              totalTollByMailCost += vehiclePrices.tollbymail || 0;
            }
          } else {
            const vehiclePrices = tollPrices[bridgeId][selectedVehicleValue];
            if (vehiclePrices) {
              totalEzPassCost += vehiclePrices.ezpass || 0;
              totalMidTierCost += vehiclePrices.midtier || 0;
              totalTollByMailCost += vehiclePrices.tollbymail || 0;
              totalStatenIsland += vehiclePrices.statenisland || 0;
              totalRockawayResident += vehiclePrices.rockawayResident || 0;
            }
          }
        }
      }
  
      // Display toll prices for each vehicle type
      document.getElementById("ezpassCost").textContent = totalEzPassCost.toFixed(2);
      document.getElementById("midtierCost").textContent = totalMidTierCost.toFixed(2);
      document.getElementById("tollbymailCost").textContent = totalTollByMailCost.toFixed(2);
      document.getElementById("statenislandCost").textContent = totalStatenIsland.toFixed(2);
      document.getElementById("rockawayresidentCost").textContent = totalRockawayResident.toFixed(2);
    } 
    
    // else {
    //   alert("Please choose a vehicle type.");
    // }
  
    // at least one checkbox is checked
    var selectedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    if (selectedCheckboxes.length === 0 && !selectedVehicleType ) {
        alert("Please choose a vehicle type and at least one toll facility.");
        return; 
    }
    else if(selectedCheckboxes.length === 0){
      alert("Please choose at least one toll facility.");
      return;
    }
    else if(!selectedVehicleType){
      alert("Please choose a vehicle type")
    }
  }
  
  function makeBoldCheckbox() {
    const tollFacilityCheckboxes = document.querySelectorAll('.toll-facility-checkbox');
  
    tollFacilityCheckboxes.forEach(function (checkbox) {
      const label = checkbox.parentElement;
  
      if (checkbox.checked) {
        label.style.fontWeight = "bold";
      } else {
        label.style.fontWeight = "normal";
      }
    });
  }
  makeBoldCheckbox();
  
  // function truckIsClicked(truck){
  //   const truckAxlesDropdown = document.getElementById("truck-axles");
  //   const carChecked = document.getElementById("car");
  //   const motorcycleChecked = document.getElementById("motorcycle");
  
  //   if(truck.checked){
  //     truckAxlesDropdown.style.display = "block"
  //   }
  //   else if(motorcycleChecked.checked || carChecked.checked){
  //     truckAxlesDropdown.style.display = "none";
  //   }
  //   else{
  //     // Hide the truck axles dropdown by default
  //     truckAxlesDropdown.style.display = "none";
  //   }
    
    
  // }
  
  function toggleTruckNotAllowedText(checkbox) {
    const truckNotAllowedText = document.getElementById("truckNotAllowedText");
    if (checkbox.checked) {
      truckNotAllowedText.style.display = "inline"; 
    } else {
      truckNotAllowedText.style.display = "none"; // Hide the text 
    }
  }
  
  function clearAll() {
    // Loop through the toll facility checkboxes and uncheck them
    const tollFacilityCheckboxes = document.querySelectorAll('input[type="checkbox"]');
    tollFacilityCheckboxes.forEach(function (checkbox) {
        checkbox.checked = false;
    });
  
    // Hide the "Trucks are not Allowed" text 
    const truckNotAllowedText = document.getElementById("truckNotAllowedText");
    truckNotAllowedText.style.display = "none";
  
    // Clear button: the toll prices
    document.getElementById("ezpassCost").textContent = "0.00";
    document.getElementById("midtierCost").textContent = "0.00";
    document.getElementById("tollbymailCost").textContent = "0.00";
    document.getElementById("statenislandCost").textContent = "0.00";
    document.getElementById("rockawayresidentCost").textContent = "0.00";
  }
  
  