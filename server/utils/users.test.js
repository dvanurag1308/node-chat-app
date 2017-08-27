var {Users} = require('./users');
var expect = require('expect');

describe('Users', () => {
    var users;
    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: 1,
            name: 'Mike',
            room: 'Node Course'
        }, {
            id: 2,
            name: 'Jen',
            room: 'React Course'
        }, {
            id: 3,
            name: 'Julie',
            room: 'Node Course'
        }];
    });

    it('should add a user', () => {
        var users = new Users();
        var user = {id: 123, name: 'test', room: 'room'};
        var addUser = users.addUser(user.id, user.name, user.room);
        expect(addUser.id).toBe(user.id);
        expect(addUser.name).toBe(user.name);
        expect(addUser.room).toBe(user.room);
    });

    it('should remove a user', () => {
        var users = new Users();
        var user1 = {id: 123, name: 'test', room: 'room'};
        var user2 = {id: 1234, name: 'test1', room: 'room1'};
        users.addUser(user1.id, user1.name, user1.room);
        users.addUser(user2.id, user2.name, user2.room);
        expect(users.users).toEqual([user1, user2]);
        users.removeUser(user2.id);
        expect(users.users).toEqual([user1]);
    })
});