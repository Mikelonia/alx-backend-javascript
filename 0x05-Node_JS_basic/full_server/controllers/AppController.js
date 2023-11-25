/**
 * Contains the miscellaneous route handlers.
 * @author Michael Okpako <https://github.com/Mikelonia>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
