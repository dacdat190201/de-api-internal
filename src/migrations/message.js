class Message {
  constructor(isSuccess, message, data) {
    this.isSuccess = isSuccess;
    this.message = message;
    this.data = data;
  }
}

module.exports = Message;
