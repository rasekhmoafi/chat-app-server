const Namespace = require('./namespace');
const Room = require('./room');

let namespaces = [];
let googleNs = new Namespace(0, 'google', 'https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/google-logo.png', '/google')
let appleNs = new Namespace(1, 'apple', 'https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/apple-logo.png', '/apple')
let facebookNs = new Namespace(2, 'facebook', 'https://s3.amazonaws.com/cdn.designcrowd.com/blog/100-Famous-Brand%20Logos-From-The-Most-Valuable-Companies-of-2020/facebook-logo.png', '/facebook')



googleNs.addRoom(new Room(0, 'angular', 'google'))
googleNs.addRoom(new Room(1, 'chrome', 'google', true))
googleNs.addRoom(new Room(2, 'android', 'google'))

appleNs.addRoom(new Room(0, 'iphone', 'apple', true))
appleNs.addRoom(new Room(1, 'macbook', 'apple'))
appleNs.addRoom(new Room(2, 'ios', 'apple'))

facebookNs.addRoom(new Room(0, 'social', 'facebook'))
facebookNs.addRoom(new Room(1, 'privacy', 'facebook'))

namespaces.push(googleNs, appleNs,facebookNs);

module.exports = namespaces;
