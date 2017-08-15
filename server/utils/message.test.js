var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate the correct message object', () => {
        var from = 'anurag', text = 'hello';

        var res = generateMessage(from, text);
        expect(res.from).toBe(from);
        expect(res.text).toBe(text);
        expect(res.createdAt).toBeA('number');
    })
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = 'admin', longitude = 23, latitude = 24;
        var url = `https://www.google.com/maps?q=${latitude},${longitude}`;
        var res = generateLocationMessage(from, latitude, longitude);
        expect(res.createdAt).toBeA('number');
        expect(res).toInclude({
            from,
            url
        });
    });
});