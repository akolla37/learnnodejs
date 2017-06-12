var buf = new Buffer('Heellloooo','utf8');
console.log(buf);
console.log(buf.toString());
console.log(buf.toJSON());
console.log(buf[2]);

buf.write('World');
console.log(buf.toString());
