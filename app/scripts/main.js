/**
  * Web app for Cartrawler technical test
  * 
  * @author Marek Dano
  * 
  */

import  carsService  from './cars-data-service';
import { carsData } from './cars-json';

/**
  * The main logic of the web app
  * 
  */
class App {

  constructor() {}

  /**
    * Get data of search by pickup and return dates 
    * and pickup and return locations. Get data of available  
    * cars sorted by price.
    * Display these data on the home page.
    *
    */
  homePage() {
    // get data for legend and display it
    const rentalCore = carsService.rentalCore();
    // get template "searchLegend" with populated data
    const html = MyApp.templates.searchLegend.html(rentalCore);
    const el = document.getElementById('main');
    el.innerHTML = html;

    // display data of available cars sorted by price
    this.carsByPrice();
  }

  /**
    * Get data of available cars sorted by price and 
    * append them to DOM element
    * 
    */
  carsByPrice() {
    const availableCarsByPrice = carsService.getVehiclesByPrice();
    carsService.getVehiclesByVendor('ALAMO');
    const el = document.getElementById('main');
    // get template "cars" with populated data
    const htmlOfCars = MyApp.templates.cars.html(availableCarsByPrice);
    el.innerHTML += htmlOfCars;
  }

  /**
    * Get data of selected car and display it  
    * 
    * @param id: string
    */
  carDetails(id) {
    const el = document.getElementById('main');
    //el.innerHTML = "";
    let context = carsService.getVehicleById(id);
    let html = MyApp.templates.carDetails.html(context);
    el.innerHTML = html;
  }

  /**
    * Initilize the app
    * 
    */
  init() {
    let run = () => {
      let obj = this;
      let carId = '';
      this.homePage();
      var buttons = document.querySelectorAll('button.btn-car-details');
      // add click event into buttons of car details
      buttons.forEach((button) => {
        button.addEventListener('click', function() {
          var id= $(this).attr('id');
          obj.carDetails(id);
        });
      });
    }
    return run();
  }
}

let app = new App().init();

export default App;


