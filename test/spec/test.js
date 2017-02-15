
import  carsService  from '../../app/scripts/cars-data-service';


describe("CarsService", function() {
  
  describe("when getting rental core data under property 'VehRentalCore'", function() {
    let rentalCore;

    beforeEach(function() {
      rentalCore = {
        pickUpDateTime: "Mon, 22 Sep 14, 11:00",
        returnDateTime: "Mon, 6 Oct 14, 11:00",
        pickUpLocationName: "Las Vegas - Airport",
        returnLocationName: "Las Vegas - Airport"
      };
    });

    it("should be able to get it from cars json object", function() {
      expect(carsService.rentalCore()).toEqual(rentalCore);
    });
  });

  describe("when getting all available vehicles under 'VehVendorAvails'", function() {
    let availableVehicles;

    beforeEach(function() {
      availableVehicles = {"cars":[{"vehicle":{"id":"ALAMO1","vendorName":"ALAMO","airConditionInd":"Yes","transmissionType":"Automatic","fuelType":"Petrol","driveType":"Unspecified","passengerQuantity":"5+","baggageQuantity":"3","doorCount":"5","vehMakeModelName":"Toyota Rav4 or similar","pictureUrl":"https://cdn.cartrawler.com/otaimages/toyota/rav_4_nologo.jpg"},"totalCharge":{"rateTotalAmount":"878.98","currencyCode":"CAD"}},{"vehicle":{"id":"ALAMO2","vendorName":"ALAMO","airConditionInd":"Yes","transmissionType":"Automatic","fuelType":"Petrol","driveType":"Unspecified","passengerQuantity":"5","baggageQuantity":"4","doorCount":"4","vehMakeModelName":"Chrysler 300 or similar","pictureUrl":"https://cdn.cartrawler.com/otaimages/chrysler/300_nologo.jpg"},"totalCharge":{"rateTotalAmount":"851.03","currencyCode":"CAD"}},{"vehicle":{"id":"AVIS1","vendorName":"AVIS","airConditionInd":"Yes","transmissionType":"Automatic","fuelType":"Petrol","driveType":"Unspecified","passengerQuantity":"5","baggageQuantity":"4","doorCount":"4","vehMakeModelName":"Chevrolet Impala or similar","pictureUrl":"https://cdn.cartrawler.com/otaimages/chevrolet/impala_nologo.jpg"},"totalCharge":{"rateTotalAmount":"836.25","currencyCode":"CAD"}},{"vehicle":{"id":"AVIS2","vendorName":"AVIS","airConditionInd":"Yes","transmissionType":"Automatic","fuelType":"Petrol","driveType":"Unspecified","passengerQuantity":"5","baggageQuantity":"4","doorCount":"3","vehMakeModelName":"Chevrolet Impala or similar","pictureUrl":"https://cdn.cartrawler.com/otaimages/chevrolet/impala_nologo.jpg"},"totalCharge":{"rateTotalAmount":"836.25","currencyCode":"CAD"}},{"vehicle":{"id":"AVIS3","vendorName":"AVIS","airConditionInd":"Yes","transmissionType":"Automatic","fuelType":"Petrol","driveType":"Unspecified","passengerQuantity":"5+","baggageQuantity":"3","doorCount":"5","vehMakeModelName":"Ford Escape or similar","pictureUrl":"https://cdn.cartrawler.com/otaimages/ford/escape_nologo.jpg"},"totalCharge":{"rateTotalAmount":"928.29","currencyCode":"CAD"}},{"vehicle":{"id":"AVIS4","vendorName":"AVIS","airConditionInd":"Yes","transmissionType":"Automatic","fuelType":"Petrol","driveType":"Unspecified","passengerQuantity":"5","baggageQuantity":"5","doorCount":"4","vehMakeModelName":"Cadillac CTS or similar","pictureUrl":"https://cdn.cartrawler.com/otaimages/cadillac/cts_sedan_nologo.jpg"},"totalCharge":{"rateTotalAmount":"1118.83","currencyCode":"CAD"}},{"vehicle":{"id":"AVIS5","vendorName":"AVIS","airConditionInd":"Yes","transmissionType":"Automatic","fuelType":"Petrol","driveType":"Unspecified","passengerQuantity":"5","baggageQuantity":"5","doorCount":"4","vehMakeModelName":"Chrysler 300 or similar","pictureUrl":"https://cdn.cartrawler.com/otaimages/chrysler/300_nologo.jpg"},"totalCharge":{"rateTotalAmount":"1071.92","currencyCode":"CAD"}},{"vehicle":{"id":"HERTZ1","vendorName":"HERTZ","airConditionInd":"Yes","transmissionType":"Automatic","fuelType":"Petrol","driveType":"Unspecified","passengerQuantity":"5","baggageQuantity":"4","doorCount":"3","vehMakeModelName":"Toyota Corolla or similar","pictureUrl":"https://cdn.cartrawler.com/otaimages/toyota/corolla_nologo.jpg"},"totalCharge":{"rateTotalAmount":"752.31","currencyCode":"CAD"}},{"vehicle":{"id":"HERTZ2","vendorName":"HERTZ","airConditionInd":"Yes","transmissionType":"Automatic","fuelType":"Petrol","driveType":"Unspecified","passengerQuantity":"5","baggageQuantity":"2","doorCount":"2","vehMakeModelName":"Kia Rio or similar","pictureUrl":"https://cdn.cartrawler.com/otaimages/kia/rio_nologo.jpg"},"totalCharge":{"rateTotalAmount":"731.47","currencyCode":"CAD"}},{"vehicle":{"id":"HERTZ3","vendorName":"HERTZ","airConditionInd":"Yes","transmissionType":"Automatic","fuelType":"Petrol","driveType":"Unspecified","passengerQuantity":"5","baggageQuantity":"2","doorCount":"5","vehMakeModelName":"Ford Focus or similar","pictureUrl":"https://cdn.cartrawler.com/otaimages/ford/focus_sedan_nologo.jpg"},"totalCharge":{"rateTotalAmount":"731.49","currencyCode":"CAD"}}]};
    });

    it("should be able to get it from cars json object ", function() {
      expect(carsService.getAvailableVehicles()).toEqual(availableVehicles);
    });
  })

  describe("when getting vendor's vehicles", function() {
    let vendorsVehicles, vendorName, vendorsVehiclesSupplied;

    beforeEach(function() {
      vendorsVehicles = [{"vehicle":{"id":"ALAMO1","vendorName":"ALAMO","airConditionInd":"Yes","transmissionType":"Automatic","fuelType":"Petrol","driveType":"Unspecified","passengerQuantity":"5+","baggageQuantity":"3","doorCount":"5","vehMakeModelName":"Toyota Rav4 or similar","pictureUrl":"https://cdn.cartrawler.com/otaimages/toyota/rav_4_nologo.jpg"},"totalCharge":{"rateTotalAmount":"878.98","currencyCode":"CAD"}},{"vehicle":{"id":"ALAMO2","vendorName":"ALAMO","airConditionInd":"Yes","transmissionType":"Automatic","fuelType":"Petrol","driveType":"Unspecified","passengerQuantity":"5","baggageQuantity":"4","doorCount":"4","vehMakeModelName":"Chrysler 300 or similar","pictureUrl":"https://cdn.cartrawler.com/otaimages/chrysler/300_nologo.jpg"},"totalCharge":{"rateTotalAmount":"851.03","currencyCode":"CAD"}}];
      vendorName = "ALAMO";
      vendorsVehiclesSupplied = [
            {
              '@Status': 'Available',
              'Vehicle': {
                '@AirConditionInd': 'true',
                '@TransmissionType': 'Automatic',
                '@FuelType': 'Petrol',
                '@DriveType': 'Unspecified',
                '@PassengerQuantity': '5+',
                '@BaggageQuantity': '3',
                '@Code': 'IFAR',
                '@CodeContext': 'CARTRAWLER',
                '@DoorCount': '5',
                'VehMakeModel': {
                  '@Name': 'Toyota Rav4 or similar'
                },
                'PictureURL': 'https://cdn.cartrawler.com/otaimages/toyota/rav_4_nologo.jpg'
              },
              'TotalCharge': {
                '@RateTotalAmount': '878.98',
                '@EstimatedTotalAmount': '878.98',
                '@CurrencyCode': 'CAD'
              }
            },
            {
              '@Status': 'Available',
              'Vehicle': {
                '@AirConditionInd': 'true',
                '@TransmissionType': 'Automatic',
                '@FuelType': 'Petrol',
                '@DriveType': 'Unspecified',
                '@PassengerQuantity': '5',
                '@BaggageQuantity': '4',
                '@Code': 'PCAR',
                '@CodeContext': 'CARTRAWLER',
                '@DoorCount': '4',
                'VehMakeModel': {
                  '@Name': 'Chrysler 300 or similar'
                },
                'PictureURL': 'https://cdn.cartrawler.com/otaimages/chrysler/300_nologo.jpg'
              },
              'TotalCharge': {
                '@RateTotalAmount': '851.03',
                '@EstimatedTotalAmount': '851.03',
                '@CurrencyCode': 'CAD'
              }
            }
          ]
    });

    it("should be able to get it from cars json object under a vendor array of vehicles", function() {
      expect(carsService.getVendorsVehicles(vendorsVehiclesSupplied, vendorName)).toEqual(vendorsVehicles);
    });

    it("should be able to throw error when arguments are invalid", function() {
      expect(function() {
        carsService.getVendorsVehicles(1, 1)
      }).toThrowError(Error);
    });
  });

  describe("when getting vehicles sorted by price", function() {
    let vehiclesByPrice;

    beforeEach(function() {
      vehiclesByPrice = {"cars":[{"vehicle":{"id":"HERTZ2","vendorName":"HERTZ","airConditionInd":"Yes","transmissionType":"Automatic","fuelType":"Petrol","driveType":"Unspecified","passengerQuantity":"5","baggageQuantity":"2","doorCount":"2","vehMakeModelName":"Kia Rio or similar","pictureUrl":"https://cdn.cartrawler.com/otaimages/kia/rio_nologo.jpg"},"totalCharge":{"rateTotalAmount":"731.47","currencyCode":"CAD"}},{"vehicle":{"id":"HERTZ3","vendorName":"HERTZ","airConditionInd":"Yes","transmissionType":"Automatic","fuelType":"Petrol","driveType":"Unspecified","passengerQuantity":"5","baggageQuantity":"2","doorCount":"5","vehMakeModelName":"Ford Focus or similar","pictureUrl":"https://cdn.cartrawler.com/otaimages/ford/focus_sedan_nologo.jpg"},"totalCharge":{"rateTotalAmount":"731.49","currencyCode":"CAD"}},{"vehicle":{"id":"HERTZ1","vendorName":"HERTZ","airConditionInd":"Yes","transmissionType":"Automatic","fuelType":"Petrol","driveType":"Unspecified","passengerQuantity":"5","baggageQuantity":"4","doorCount":"3","vehMakeModelName":"Toyota Corolla or similar","pictureUrl":"https://cdn.cartrawler.com/otaimages/toyota/corolla_nologo.jpg"},"totalCharge":{"rateTotalAmount":"752.31","currencyCode":"CAD"}},{"vehicle":{"id":"AVIS1","vendorName":"AVIS","airConditionInd":"Yes","transmissionType":"Automatic","fuelType":"Petrol","driveType":"Unspecified","passengerQuantity":"5","baggageQuantity":"4","doorCount":"4","vehMakeModelName":"Chevrolet Impala or similar","pictureUrl":"https://cdn.cartrawler.com/otaimages/chevrolet/impala_nologo.jpg"},"totalCharge":{"rateTotalAmount":"836.25","currencyCode":"CAD"}},{"vehicle":{"id":"AVIS2","vendorName":"AVIS","airConditionInd":"Yes","transmissionType":"Automatic","fuelType":"Petrol","driveType":"Unspecified","passengerQuantity":"5","baggageQuantity":"4","doorCount":"3","vehMakeModelName":"Chevrolet Impala or similar","pictureUrl":"https://cdn.cartrawler.com/otaimages/chevrolet/impala_nologo.jpg"},"totalCharge":{"rateTotalAmount":"836.25","currencyCode":"CAD"}},{"vehicle":{"id":"ALAMO2","vendorName":"ALAMO","airConditionInd":"Yes","transmissionType":"Automatic","fuelType":"Petrol","driveType":"Unspecified","passengerQuantity":"5","baggageQuantity":"4","doorCount":"4","vehMakeModelName":"Chrysler 300 or similar","pictureUrl":"https://cdn.cartrawler.com/otaimages/chrysler/300_nologo.jpg"},"totalCharge":{"rateTotalAmount":"851.03","currencyCode":"CAD"}},{"vehicle":{"id":"ALAMO1","vendorName":"ALAMO","airConditionInd":"Yes","transmissionType":"Automatic","fuelType":"Petrol","driveType":"Unspecified","passengerQuantity":"5+","baggageQuantity":"3","doorCount":"5","vehMakeModelName":"Toyota Rav4 or similar","pictureUrl":"https://cdn.cartrawler.com/otaimages/toyota/rav_4_nologo.jpg"},"totalCharge":{"rateTotalAmount":"878.98","currencyCode":"CAD"}},{"vehicle":{"id":"AVIS3","vendorName":"AVIS","airConditionInd":"Yes","transmissionType":"Automatic","fuelType":"Petrol","driveType":"Unspecified","passengerQuantity":"5+","baggageQuantity":"3","doorCount":"5","vehMakeModelName":"Ford Escape or similar","pictureUrl":"https://cdn.cartrawler.com/otaimages/ford/escape_nologo.jpg"},"totalCharge":{"rateTotalAmount":"928.29","currencyCode":"CAD"}},{"vehicle":{"id":"AVIS5","vendorName":"AVIS","airConditionInd":"Yes","transmissionType":"Automatic","fuelType":"Petrol","driveType":"Unspecified","passengerQuantity":"5","baggageQuantity":"5","doorCount":"4","vehMakeModelName":"Chrysler 300 or similar","pictureUrl":"https://cdn.cartrawler.com/otaimages/chrysler/300_nologo.jpg"},"totalCharge":{"rateTotalAmount":"1071.92","currencyCode":"CAD"}},{"vehicle":{"id":"AVIS4","vendorName":"AVIS","airConditionInd":"Yes","transmissionType":"Automatic","fuelType":"Petrol","driveType":"Unspecified","passengerQuantity":"5","baggageQuantity":"5","doorCount":"4","vehMakeModelName":"Cadillac CTS or similar","pictureUrl":"https://cdn.cartrawler.com/otaimages/cadillac/cts_sedan_nologo.jpg"},"totalCharge":{"rateTotalAmount":"1118.83","currencyCode":"CAD"}}]};
    });

    it("should be able to get it from cars json object", function() {
      expect(carsService.getVehiclesByPrice()).toEqual(vehiclesByPrice);
    });
  });

  describe("when getting vehicle by it's Id", function() {
    let vehicle, id;

    beforeEach(function() {
      vehicle = {"vehicle":{"id":"HERTZ2","vendorName":"HERTZ","airConditionInd":"Yes","transmissionType":"Automatic","fuelType":"Petrol","driveType":"Unspecified","passengerQuantity":"5","baggageQuantity":"2","doorCount":"2","vehMakeModelName":"Kia Rio or similar","pictureUrl":"https://cdn.cartrawler.com/otaimages/kia/rio_nologo.jpg"},"totalCharge":{"rateTotalAmount":"731.47","currencyCode":"CAD"}};
      id = "HERTZ2";
    });

    it("should be able to get it from cars json object", function() {
      expect(carsService.getVehicleById(id)).toEqual(vehicle);
    });

    it("should be able to throw error when argument is invalid", function() {
      expect(function() {
        carsService.getVehicleById(1)
      }).toThrowError(Error);
    });
  });

  describe("when getting all vendor's vehicles", function() {
    let vehicles, vendorName;

    beforeEach(function() {
      vendorName = "ALAMO";
      vehicles = {"cars":[{"vehicle":{"id":"ALAMO2","vendorName":"ALAMO","airConditionInd":"Yes","transmissionType":"Automatic","fuelType":"Petrol","driveType":"Unspecified","passengerQuantity":"5","baggageQuantity":"4","doorCount":"4","vehMakeModelName":"Chrysler 300 or similar","pictureUrl":"https://cdn.cartrawler.com/otaimages/chrysler/300_nologo.jpg"},"totalCharge":{"rateTotalAmount":"851.03","currencyCode":"CAD"}},{"vehicle":{"id":"ALAMO1","vendorName":"ALAMO","airConditionInd":"Yes","transmissionType":"Automatic","fuelType":"Petrol","driveType":"Unspecified","passengerQuantity":"5+","baggageQuantity":"3","doorCount":"5","vehMakeModelName":"Toyota Rav4 or similar","pictureUrl":"https://cdn.cartrawler.com/otaimages/toyota/rav_4_nologo.jpg"},"totalCharge":{"rateTotalAmount":"878.98","currencyCode":"CAD"}}]}
    });

    it("should be able to get it from cars json object", function() {
      expect(carsService.getVehiclesByVendor(vendorName)).toEqual(vehicles);
    });

    it("should be able to throw error when argument is invalid", function() {
      expect(function() {
        carsService.getVehiclesByVendor(1)
      }).toThrowError(Error);
    });
  });
})

