
export default {
  
  /**
  * Format date object to the format of e.g. Mon, 22 Sep 14, 11:00
  * @params date: object
  * 
  * return string of formatted date
  */
  formatDate(date) {
    return moment(date).format('ddd, D MMM YY, h:mm');
  }
}