<template>
  <div class="main">
    <div class="submitView">
      <h3 class="heading">Submit a Location</h3>
      <input v-model="name" type="text" class="name bar_input" placeholder="Location Name">
      <input v-model="address" type="text" class="address bar_input" placeholder="Address">
      <input v-model="phone" type="text" class="phone bar_input" placeholder="Phone Number">
      <div class="sub_Head_Bar">
        <h5 class="hours sub_Head">Hours</h5>
        <h5 class="open sub_Head">Open</h5>
        <h5 class="close sub_Head">Close</h5>
      </div>
      <h4 class="day mon">Monday</h4>
      <div v-on:click="test = true" class="monToggle toggle"></div>
        <input v-model="hours.monday.start" type="time" class="monOpen openTime time">
        <input v-model="hours.monday.end" type="time" class="monClose closeTime time">
      <h4 class="day tue">Tuesday</h4>
      <div class="tueToggle toggle"></div>
        <input v-model="hours.tuesday.start" type="time" class="tueOpen openTime time">
        <input v-model="hours.tuesday.end" type="time" class="tueClose closeTime time">
      <h4 class="day wed">Wednesday</h4>
      <div class="wedToggle toggle"></div>
        <input v-model="hours.wednesday.start" type="time" class="wedOpen openTime time">
        <input v-model="hours.wednesday.end" type="time" class="wedClose closeTime time">
      <h4 class="day thu">Thursday</h4>
      <div class="thuToggle toggle"></div>
        <input v-model="hours.thursday.start" type="time" class="thuOpen openTime time">
        <input v-model="hours.thursday.end" type="time" class="thuClose closeTime time">
      <h4 class="day fri">Friday</h4>
      <div class="friToggle toggle"></div>
        <input v-model="hours.friday.start" type="time" class="friOpen openTime time">
        <input v-model="hours.friday.end" type="time" class="friClose closeTime time">
      <h4 class="day sat">Saturday</h4>
      <div class="satToggle toggle"></div>
        <input v-model="hours.saturday.start" type="time" class="satOpen openTime time">
        <input v-model="hours.saturday.end" type="time" class="satClose closeTime time">
      <h4 class="day sun">Sunday</h4>
      <div class="sunToggle toggle"></div>
        <input v-model="hours.sunday.start" type="time" class="sunOpen openTime time">
        <input v-model="hours.sunday.end" type="time" class="sunClose closeTime time">
      <button type="button" class="submitButton">Submit Bar</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Submit',
  data () {
    return {
      test: true,
      name: '',
      address: '',
      phone: '',
      hours: {
        monday: {
          start: '',
          end: '',
          open: true
        },
        tuesday: {
          start: '',
          end: '',
          open: true
        },
        wednesday: {
          start: '',
          end: '',
          open: true
        },
        thursday: {
          start: '',
          end: '',
          open: true
        },
        friday: {
          start: '',
          end: '',
          open: true
        },
        saturday: {
          start: '',
          end: '',
          open: true
        },
        sunday: {
          start: '',
          end: '',
          open: true
        }
      }
    }
  }
}
</script>

<style scoped lang="less">

.main {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #888;
}

h3, h4, h5{
  padding: 0;
  margin: 0;
}

.submitView {
  padding-top: 124px;
  display: grid;
  grid-template-columns: 1fr 20px repeat(2, 1fr);
  grid-template-rows: repeat(20, 40px);
  grid-gap: 4px;
  width: 90%;
  height: 100%;
  margin-left: 5%;
}

.heading {
  font-size: 2em;
  text-align: center;
  width: 100%;
  color: #ffe128;
  text-shadow: 0px 2px 5px black;
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 2;
}

input {
  height: 36px;
  background-image: url('../assets/noise2.jpg');
  border: none;
  color: #ffe128;
  border-bottom: solid 1px #ffe128;
  padding-top: 12px;
  padding-left: 2px;
}

input.time {
  margin-top: 4px;
}

.name, .address, .phone ,{
  grid-column-start: 1;
  grid-column-end: 5;
  font-family: verdana;
}

.name::placeholder, .address::placeholder, .phone::placeholder {
  color: #ffe128;
  font-family: verdana;
  font-size: 1.2em
}

.name {
  grid-row: 3;
}

.address {
  grid-row: 4;
}

.phone {
  grid-row: 5;
}

.sub_Head_Bar {
  grid-row: 6;
  grid-column-start: 1;
  grid-column-end: 5;
  margin-top: 8px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-bottom: solid 1px #ffe128;
}

.sub_Head, .day{
  font-size: 1.5em;
  width: 100%;
  color: #ffe128;
  text-align: left;
  grid-row: 1;
}

.day {
  font-size: .8em;
  text-align: left;
  text-shadow: none;
  margin-top: 10px;
  border-bottom: solid 1px #ffe128;
  grid-column: 1;
}

.toggle {
  grid-column: 2;
  background-image: url('../assets/open_Icon.png');
  background-repeat: no-repeat;
  margin-top: 20px;
  z-index: 10;
}

.openTime {
  grid-column: 3;
}

.closeTime{
  grid-column: 4;
}

.mon, .monToggle, .monOpen, .monClose,{
  grid-row: 7;
}

.tue, .tueToggle, .tueOpen, .tueClose{
  grid-row: 8;
}

.wed, .wedToggle, .wedOpen, .wedClose{
  grid-row: 9;
}

.thu, .thuToggle, .thuOpen, .thuClose{
  grid-row: 10;
}

.fri, .friToggle, .friOpen, .friClose{
  grid-row: 11;
}

.sat, .satToggle, .satOpen, .satClose{
  grid-row: 12;
}

.sun, .sunToggle, .sunOpen, .sunClose{
  grid-row: 13;

}

.submitButton {
  grid-column-start: 3;
  grid-column-end: 5;
  grid-row: 14;
  background-image: url('../assets/noise2.jpg');
  background-repeat: no-repeat;
  border: 0;
  border-bottom: solid 1px #ffe128;
  color: #ffe128;
  font-size: 1.5em;
  margin-top: 4px;
}

</style>
