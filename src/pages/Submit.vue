<template>
  <div class="main">
    <div class="submitView">
      <h3 class="heading">Submit a Location</h3>
      <input type="text" class="name bar_input" placeholder="Location Name">
      <input type="text" class="address bar_input" placeholder="Address">
      <input type="text" class="phone bar_input" placeholder="Phone Number">
      <div class="sub_Head_Bar">
        <h5 class="hours sub_Head">Hours</h5>
        <h5 class="open sub_Head">Open</h5>
        <h5 class="close sub_Head">Close</h5>
      </div>
      <h4 class="day mon">Monday</h4>
        <input type="time" class="mon_Open time" value="00:00">
        <input type="time" class="mon_Close time" value="00:00">
      <h4 class="day tue">Tuesday</h4>
        <input type="time" class="tue_Open time" value="00:00">
        <input type="time" class="tue_Close time" value="00:00">
      <h4 class="day wed">Wednesday</h4>
        <input type="time" class="wed_Open time" value="00:00">
        <input type="time" class="wed_Close time" value="00:00">
      <h4 class="day thu">Thursday</h4>
        <input type="time" class="thu_Open time" value="00:00">
        <input type="time" class="thu_Close time" value="00:00">
      <h4 class="day fri">Friday</h4>
        <input type="time" class="fri_Open time" value="00:00">
        <input type="time" class="fri_Close time" value="00:00">
      <h4 class="day sat">Saturday</h4>
        <input type="time" class="sat_Open time" value="00:00">
        <input type="time" class="sat_Close time" value="00:00">
      <h4 class="day sun">Sunday</h4>
        <input type="time" class="sun_Open time" value="00:00">
        <input type="time" class="sun_Close time" value="00:00">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Submit',
  data () {
    return {}
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
  grid-template-columns: repeat(3, 1fr);
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
  grid-column-end: 4;
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
  grid-column-end: 4;
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
  grid-row: 7;
  grid-column-start: 1;
  grid-column-end: 4;
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
  font-size: 1em;
  text-align: left;
  text-shadow: none;
  margin-top: 10px;
  border-bottom: solid 1px #ffe128;
}

.mon, .mon_Open, .mon_Close {
  grid-row: 8;
}

.mon {
  grid-column: 1;
}

.tue, .tue_Open, .tue_Close{
  grid-row: 9;
}

.tue {
  grid-column: 1;
}

.wed, .wed_Open, .wed_Close{
  grid-row: 10;
}

.wed {
  grid-column: 1;
}

.thu, .thu_Open, .thu_Close{
  grid-row: 11;
}

.thu {
  grid-column: 1;
}

.fri, .fri_Open, .fri_Close{
  grid-row: 12;
}

.fri {
  grid-column: 1;
}

.sat, .sat_Open, .sat_Close{
  grid-row: 13;
}

.sat {
  grid-column: 1;
}

.sun, .sun_Open, .sun_Close{
  grid-row: 14;
}

.sun {
  grid-column: 1;
}

</style>
