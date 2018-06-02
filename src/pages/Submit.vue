<template>
  <div class="main">
    <div class="submitView">
      <h3 class="heading">Submit a Location</h3>
      <input type="text" class="name" placeholder="Location Name">
      <input type="text" class="address" placeholder="Address">
      <input type="text" class="phone" placeholder="Phone Number">
      <h5 class="hours sub_Head">Hours</h5>
      <h5 class="open sub_Head">Open</h5>
      <h5 class="close sub_Head">Close</h5>
      <h4 class="day mon">Monday</h4>
      <div class="mon back_Strip"></div>
        <input type="time" class="mon_Open" value="00:00">
        <input type="time" class="mon_Close" value="00:00">
      <h4 class="day tue">Tuesday</h4>
      <div class="tue back_Strip"></div>
        <input type="time" class="tue_Open" value="00:00">
        <input type="time" class="tue_Close" value="00:00">
      <h4 class="day wed">Wednesday</h4>
      <div class="wed back_Strip"></div>
        <input type="time" class="wed_Open" value="00:00">
        <input type="time" class="wed_Close" value="00:00">
      <h4 class="day thu">Thursday</h4>
      <div class="thu back_Strip"></div>
        <input type="time" class="thu_Open" value="00:00">
        <input type="time" class="thu_Close" value="00:00">
      <h4 class="day fri">Friday</h4>
      <div class="fri back_Strip"></div>
        <input type="time" class="fri_Open" value="00:00">
        <input type="time" class="fri_Close" value="00:00">
      <h4 class="day sat">Saturday</h4>
      <div class="sat back_Strip"></div>
        <input type="time" class="sat_Open" value="00:00">
        <input type="time" class="sat_Close" value="00:00">
      <h4 class="day sun">Sunday</h4>
      <div class="sun back_Strip"></div>
        <input type="time" class="sun_Open" value="00:00">
        <input type="time" class="sun_Close" value="00:00">
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
  padding-top: 80px;
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

.name {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row: 3;
  height: 30px;
}

.address {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row: 4;
  height: 30px;
}

.phone {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row: 5;
  height: 30px;
}

.sub_Head {
  font-size: 1.2em;
  width: 100%;
  color: #ffe128;
  text-shadow: 0px 2px 5px black;
  grid-row: 7;
  text-align: center;
}

.day {

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

.back_Strip {
  grid-column: 2
  background-color: green;
}

</style>
