class Namespace{
  constructor(_id, title, imageUrl, endpoint ) {
    this._id = _id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.endpoint = endpoint;
    this.rooms = [];
  }

  addRoom(roomObj) {
    this.rooms.push(roomObj);
  }
}

module.exports = Namespace;
