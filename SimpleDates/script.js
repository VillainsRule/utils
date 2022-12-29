const date = {
  raw: Date.now(),
  full: new Date(),
  
  zone: new Date().toString().split(' ')[6].split('(')[1],
  gmt: Number(new Date().toString().split(' ')[5].split('-')[1]),
  
  weekday: new Date().toString().split(' ')[1],
  month: {
    str: new Date().toString().split(' ')[1],
    int: Number(new Date().toLocaleString().split('/')[0])
  },
  day: Number(new Date().toString().split(' ')[2]),
  year: Number(new Date().toString().split(' ')[3]),
  mmddyy: new Date().toLocaleString().split(',')[0],
  
  fulltime: new Date().toLocaleString().split(' ')[1] + ' ' + new Date().toLocaleString().split(' ')[2],
  time: new Date().toLocaleString().split(' ')[1],
  meridiem: new Date().toLocaleString().split(' ')[2],
  hour: Number(new Date().toLocaleString().split(' ')[1].split(':')[0]),
  minute: Number(new Date().toLocaleString().split(' ')[1].split(':')[1]),
  second: Number(new Date().toLocaleString().split(' ')[1].split(':')[2])
}
