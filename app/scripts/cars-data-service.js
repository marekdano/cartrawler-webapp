import { carsData } from './cars-json';
import helper from './helper';

export default {

  /**
    * Get object of core rental data which contains 
    * pick up date time, return date time and location names
    * for both times 
    * 
    * return object of rental core date
    */
  rentalCore() {
    if(carsData) {
      return {
          pickUpDateTime: helper.formatDate(carsData[0]['VehAvailRSCore']['VehRentalCore']['@PickUpDateTime']),
          returnDateTime: helper.formatDate(carsData[0]['VehAvailRSCore']['VehRentalCore']['@ReturnDateTime']),
          pickUpLocationName: carsData[0]['VehAvailRSCore']['VehRentalCore']['PickUpLocation']['@Name'],
          returnLocationName: carsData[0]['VehAvailRSCore']['VehRentalCore']['ReturnLocation']['@Name']
      }
    } else {
      throw new Error('Cars data do not exist.');
    }
  },

  /**
    * Get a list of all available vehicles for all vendors
    * 
    * return object of all available vehicles
    */
  getAvailableVehicles() {
    if(carsData) {
      const vehiclesAvailable = carsData[0]['VehAvailRSCore']['VehVendorAvails'];
      let vehicles = [];
      vehiclesAvailable.forEach((vendor) => {
        vehicles = vehicles.concat(this.getVendorsVehicles(vendor['VehAvails'], vendor['Vendor']['@Name']));
      });
      return {
        cars: vehicles
      }
    } else { 
      throw new Error('Cars data do not exist.');
    }
  },

  /**
    * Get vendor's available vehicles
    *
    * @param vendorsVehicles: Object
    * @param vendorName: string
    * 
    * return array of vendor's available vehicles
    */
  getVendorsVehicles(vendorsVehicles, vendorName) {
    // add id to the vehicle in the format vendorName + index
    // e.g. "AVIS3"
    if(typeof vendorsVehicles === 'object' || typeof vendorName === 'string') {
      let index = 0;
      return vendorsVehicles.map((vehicle) => {
        index++;
        if(vehicle['@Status'] === 'Available') {
          return {
            vehicle: {
              id: vendorName + index,
              vendorName: vendorName,
              airConditionInd: vehicle['Vehicle']['@AirConditionInd'] ? 'Yes' : 'No',
              transmissionType: vehicle['Vehicle']['@TransmissionType'],
              fuelType: vehicle['Vehicle']['@FuelType'],
              driveType: vehicle['Vehicle']['@DriveType'],
              passengerQuantity: vehicle['Vehicle']['@PassengerQuantity'],
              baggageQuantity: vehicle['Vehicle']['@BaggageQuantity'],
              doorCount: vehicle['Vehicle']['@DoorCount'],
              vehMakeModelName: vehicle['Vehicle']['VehMakeModel']['@Name'],
              pictureUrl: vehicle['Vehicle']['PictureURL']
            },
            totalCharge: {
              rateTotalAmount: vehicle['TotalCharge']['@RateTotalAmount'],
              currencyCode: vehicle['TotalCharge']['@CurrencyCode']
            }
          }
        }     
      });
    } else {
      throw new TypeError('Wrong type of parameters was supplied');
    }
  },

  /**
    * Get vendors available vehicles sorted by price ascendingly
    * 
    * return object of sorted vehicles
    */
  getVehiclesByPrice() {
    const arrayOfCars = this.getAvailableVehicles()['cars'];
    const sortedCars = arrayOfCars.sort((car1, car2) => {
      return car1.totalCharge.rateTotalAmount - car2.totalCharge.rateTotalAmount
    })
    return {
      cars: sortedCars
    }
  },

  /**
    * Get available vehicle by its ID
    * 
    * @param id: string
    *
    * return object of vehicle
    */
  getVehicleById(id) {
    if(typeof id === 'string') {
       const arrayOfCars = this.getAvailableVehicles()['cars'];
       return arrayOfCars.find((car) => {
         return car.vehicle.id === id;
       });
    } else {
      throw new TypeError('Wrong type of parameter was supplied');
    }
  },

  /**
    * Get available vehicle by a vendor
    * 
    * @param vendorName: string
    * 
    * return object of vendor's vehicle
    */
  getVehiclesByVendor(vendorName) {
    if(typeof vendorName === 'string') {
      const arrayOfCars = this.getVehiclesByPrice()['cars'];
      const vehicles = arrayOfCars.filter((car) => {
        return car.vehicle.vendorName === vendorName;
      })
      return {
        cars: vehicles
      }
    } else {
      throw new TypeError('Wrong type of parameter was supplied');
    }
  }
}
