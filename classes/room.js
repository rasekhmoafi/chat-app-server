class Room{
  constructor(roomId, roomTitle, namespace, privateRoom = false ) {
    this._id = roomId;
    this.title = roomTitle;
    this.namespace = namespace;
    this.privateRoom = privateRoom;
    this.history = [];
  }

  addMessage(message) {
    this.history.push(message);
  }
  clearHistory() {
    this.history = [];
  }
}

module.exports = Room;
