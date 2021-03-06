class HttpError extends Error {
  constructor(message, errorCode) {
    super(message); // Add a message property
    this.code = errorCode; //Adds code proprty
  }
}

module.exports = HttpError;
