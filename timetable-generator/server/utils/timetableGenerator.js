const generateTimetable = (courses, preference) => {
    const timeSlots = preference === 'morning' 
      ? ['5:00 AM', '7:00 AM', '9:00 AM', '11:00 AM']
      : ['6:00 PM', '7:30 PM', '9:00 PM', '10:30 PM'];
  
    const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const timetable = {};
  
    weekdays.forEach(day => {
      timetable[day] = [];
      timeSlots.forEach(time => {
        const randomCourse = courses[Math.floor(Math.random() * courses.length)];
        if (randomCourse) {
          timetable[day].push({
            time,
            course: randomCourse.title,
            url: randomCourse.playlistUrl
          });
        }
      });
    });
  
    return timetable;
  };
  
  module.exports = { generateTimetable };