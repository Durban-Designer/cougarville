<template>
  <div class="main">
    <div class="submitView">
      <h3>Submit a Location</h3>
      <input type="text" class="name" placeholder="Location Name">
      <input type="text" class="address" placeholder="Address">
      <input type="text" class="phone" placeholder="Phone Number">
      <h4>Monday</h4>
      <select class="mon_Open">
        <option value="12AM">12AM</option>
        <option value="1AM">1AM</option>
        <option value="2PM">2AM</option>
        <option value="3AM">3AM</option>
        <option value="4AM">4AM</option>
        <option value="5AM">5AM</option>
        <option value="6AM">6AM</option>
        <option value="7AM">7AM</option>
        <option value="8AM">8AM</option>
        <option value="9AM">9AM</option>
        <option value="10AM">10AM</option>
        <option value="11AM">11AM</option>
        <option value="12PM">12PM</option>
        <option value="1PM">1PM</option>
        <option value="2PM">2PM</option>
        <option value="3PM">3PM</option>
        <option value="4PM">4PM</option>
        <option value="5PM">5PM</option>
        <option value="6PM">6PM</option>
        <option value="7PM">7PM</option>
        <option value="8PM">8PM</option>
        <option value="9PM">9PM</option>
        <option value="10PM">10PM</option>
        <option value="11PM">11PM</option>
      </select>
      <select class="mon_Close">
        <option value="12AM">12AM</option>
        <option value="1AM">1AM</option>
        <option value="2PM">2AM</option>
        <option value="3AM">3AM</option>
        <option value="4AM">4AM</option>
        <option value="5AM">5AM</option>
        <option value="6AM">6AM</option>
        <option value="7AM">7AM</option>
        <option value="8AM">8AM</option>
        <option value="9AM">9AM</option>
        <option value="10AM">10AM</option>
        <option value="11AM">11AM</option>
        <option value="12PM">12PM</option>
        <option value="1PM">1PM</option>
        <option value="2PM">2PM</option>
        <option value="3PM">3PM</option>
        <option value="4PM">4PM</option>
        <option value="5PM">5PM</option>
        <option value="6PM">6PM</option>
        <option value="7PM">7PM</option>
        <option value="8PM">8PM</option>
        <option value="9PM">9PM</option>
        <option value="10PM">10PM</option>
        <option value="11PM">11PM</option>
      </select>
      <h4>Tuesday</h4>
      <select class="tues_Open">
        <option value="12AM">12AM</option>
        <option value="1AM">1AM</option>
        <option value="2PM">2AM</option>
        <option value="3AM">3AM</option>
        <option value="4AM">4AM</option>
        <option value="5AM">5AM</option>
        <option value="6AM">6AM</option>
        <option value="7AM">7AM</option>
        <option value="8AM">8AM</option>
        <option value="9AM">9AM</option>
        <option value="10AM">10AM</option>
        <option value="11AM">11AM</option>
        <option value="12PM">12PM</option>
        <option value="1PM">1PM</option>
        <option value="2PM">2PM</option>
        <option value="3PM">3PM</option>
        <option value="4PM">4PM</option>
        <option value="5PM">5PM</option>
        <option value="6PM">6PM</option>
        <option value="7PM">7PM</option>
        <option value="8PM">8PM</option>
        <option value="9PM">9PM</option>
        <option value="10PM">10PM</option>
        <option value="11PM">11PM</option>
      </select>
      <select class="tues_Close">
        <option value="12AM">12AM</option>
        <option value="1AM">1AM</option>
        <option value="2PM">2AM</option>
        <option value="3AM">3AM</option>
        <option value="4AM">4AM</option>
        <option value="5AM">5AM</option>
        <option value="6AM">6AM</option>
        <option value="7AM">7AM</option>
        <option value="8AM">8AM</option>
        <option value="9AM">9AM</option>
        <option value="10AM">10AM</option>
        <option value="11AM">11AM</option>
        <option value="12PM">12PM</option>
        <option value="1PM">1PM</option>
        <option value="2PM">2PM</option>
        <option value="3PM">3PM</option>
        <option value="4PM">4PM</option>
        <option value="5PM">5PM</option>
        <option value="6PM">6PM</option>
        <option value="7PM">7PM</option>
        <option value="8PM">8PM</option>
        <option value="9PM">9PM</option>
        <option value="10PM">10PM</option>
        <option value="11PM">11PM</option>
      </select>
      <h4>Wednesday</h4>
      <select class="wed_Open">
        <option value="12AM">12AM</option>
        <option value="1AM">1AM</option>
        <option value="2PM">2AM</option>
        <option value="3AM">3AM</option>
        <option value="4AM">4AM</option>
        <option value="5AM">5AM</option>
        <option value="6AM">6AM</option>
        <option value="7AM">7AM</option>
        <option value="8AM">8AM</option>
        <option value="9AM">9AM</option>
        <option value="10AM">10AM</option>
        <option value="11AM">11AM</option>
        <option value="12PM">12PM</option>
        <option value="1PM">1PM</option>
        <option value="2PM">2PM</option>
        <option value="3PM">3PM</option>
        <option value="4PM">4PM</option>
        <option value="5PM">5PM</option>
        <option value="6PM">6PM</option>
        <option value="7PM">7PM</option>
        <option value="8PM">8PM</option>
        <option value="9PM">9PM</option>
        <option value="10PM">10PM</option>
        <option value="11PM">11PM</option>
      </select>
      <select class="wed_Close">
        <option value="12AM">12AM</option>
        <option value="1AM">1AM</option>
        <option value="2PM">2AM</option>
        <option value="3AM">3AM</option>
        <option value="4AM">4AM</option>
        <option value="5AM">5AM</option>
        <option value="6AM">6AM</option>
        <option value="7AM">7AM</option>
        <option value="8AM">8AM</option>
        <option value="9AM">9AM</option>
        <option value="10AM">10AM</option>
        <option value="11AM">11AM</option>
        <option value="12PM">12PM</option>
        <option value="1PM">1PM</option>
        <option value="2PM">2PM</option>
        <option value="3PM">3PM</option>
        <option value="4PM">4PM</option>
        <option value="5PM">5PM</option>
        <option value="6PM">6PM</option>
        <option value="7PM">7PM</option>
        <option value="8PM">8PM</option>
        <option value="9PM">9PM</option>
        <option value="10PM">10PM</option>
        <option value="11PM">11PM</option>
      </select>
      <h4>Thursday</h4>
      <select class="thur_Open">
        <option value="12AM">12AM</option>
        <option value="1AM">1AM</option>
        <option value="2PM">2AM</option>
        <option value="3AM">3AM</option>
        <option value="4AM">4AM</option>
        <option value="5AM">5AM</option>
        <option value="6AM">6AM</option>
        <option value="7AM">7AM</option>
        <option value="8AM">8AM</option>
        <option value="9AM">9AM</option>
        <option value="10AM">10AM</option>
        <option value="11AM">11AM</option>
        <option value="12PM">12PM</option>
        <option value="1PM">1PM</option>
        <option value="2PM">2PM</option>
        <option value="3PM">3PM</option>
        <option value="4PM">4PM</option>
        <option value="5PM">5PM</option>
        <option value="6PM">6PM</option>
        <option value="7PM">7PM</option>
        <option value="8PM">8PM</option>
        <option value="9PM">9PM</option>
        <option value="10PM">10PM</option>
        <option value="11PM">11PM</option>
      </select>
      <select class="thur_Close">
        <option value="12AM">12AM</option>
        <option value="1AM">1AM</option>
        <option value="2PM">2AM</option>
        <option value="3AM">3AM</option>
        <option value="4AM">4AM</option>
        <option value="5AM">5AM</option>
        <option value="6AM">6AM</option>
        <option value="7AM">7AM</option>
        <option value="8AM">8AM</option>
        <option value="9AM">9AM</option>
        <option value="10AM">10AM</option>
        <option value="11AM">11AM</option>
        <option value="12PM">12PM</option>
        <option value="1PM">1PM</option>
        <option value="2PM">2PM</option>
        <option value="3PM">3PM</option>
        <option value="4PM">4PM</option>
        <option value="5PM">5PM</option>
        <option value="6PM">6PM</option>
        <option value="7PM">7PM</option>
        <option value="8PM">8PM</option>
        <option value="9PM">9PM</option>
        <option value="10PM">10PM</option>
        <option value="11PM">11PM</option>
      </select>
      <h4>Friday</h4>
      <select class="fri_Open">
        <option value="12AM">12AM</option>
        <option value="1AM">1AM</option>
        <option value="2PM">2AM</option>
        <option value="3AM">3AM</option>
        <option value="4AM">4AM</option>
        <option value="5AM">5AM</option>
        <option value="6AM">6AM</option>
        <option value="7AM">7AM</option>
        <option value="8AM">8AM</option>
        <option value="9AM">9AM</option>
        <option value="10AM">10AM</option>
        <option value="11AM">11AM</option>
        <option value="12PM">12PM</option>
        <option value="1PM">1PM</option>
        <option value="2PM">2PM</option>
        <option value="3PM">3PM</option>
        <option value="4PM">4PM</option>
        <option value="5PM">5PM</option>
        <option value="6PM">6PM</option>
        <option value="7PM">7PM</option>
        <option value="8PM">8PM</option>
        <option value="9PM">9PM</option>
        <option value="10PM">10PM</option>
        <option value="11PM">11PM</option>
      </select>
      <select class="fri_Close">
        <option value="12AM">12AM</option>
        <option value="1AM">1AM</option>
        <option value="2PM">2AM</option>
        <option value="3AM">3AM</option>
        <option value="4AM">4AM</option>
        <option value="5AM">5AM</option>
        <option value="6AM">6AM</option>
        <option value="7AM">7AM</option>
        <option value="8AM">8AM</option>
        <option value="9AM">9AM</option>
        <option value="10AM">10AM</option>
        <option value="11AM">11AM</option>
        <option value="12PM">12PM</option>
        <option value="1PM">1PM</option>
        <option value="2PM">2PM</option>
        <option value="3PM">3PM</option>
        <option value="4PM">4PM</option>
        <option value="5PM">5PM</option>
        <option value="6PM">6PM</option>
        <option value="7PM">7PM</option>
        <option value="8PM">8PM</option>
        <option value="9PM">9PM</option>
        <option value="10PM">10PM</option>
        <option value="11PM">11PM</option>
      </select>
      <h4>Saturday</h4>
      <select class="sat_Open">
        <option value="12AM">12AM</option>
        <option value="1AM">1AM</option>
        <option value="2PM">2AM</option>
        <option value="3AM">3AM</option>
        <option value="4AM">4AM</option>
        <option value="5AM">5AM</option>
        <option value="6AM">6AM</option>
        <option value="7AM">7AM</option>
        <option value="8AM">8AM</option>
        <option value="9AM">9AM</option>
        <option value="10AM">10AM</option>
        <option value="11AM">11AM</option>
        <option value="12PM">12PM</option>
        <option value="1PM">1PM</option>
        <option value="2PM">2PM</option>
        <option value="3PM">3PM</option>
        <option value="4PM">4PM</option>
        <option value="5PM">5PM</option>
        <option value="6PM">6PM</option>
        <option value="7PM">7PM</option>
        <option value="8PM">8PM</option>
        <option value="9PM">9PM</option>
        <option value="10PM">10PM</option>
        <option value="11PM">11PM</option>
      </select>
      <select class="sat_Close">
        <option value="12AM">12AM</option>
        <option value="1AM">1AM</option>
        <option value="2PM">2AM</option>
        <option value="3AM">3AM</option>
        <option value="4AM">4AM</option>
        <option value="5AM">5AM</option>
        <option value="6AM">6AM</option>
        <option value="7AM">7AM</option>
        <option value="8AM">8AM</option>
        <option value="9AM">9AM</option>
        <option value="10AM">10AM</option>
        <option value="11AM">11AM</option>
        <option value="12PM">12PM</option>
        <option value="1PM">1PM</option>
        <option value="2PM">2PM</option>
        <option value="3PM">3PM</option>
        <option value="4PM">4PM</option>
        <option value="5PM">5PM</option>
        <option value="6PM">6PM</option>
        <option value="7PM">7PM</option>
        <option value="8PM">8PM</option>
        <option value="9PM">9PM</option>
        <option value="10PM">10PM</option>
        <option value="11PM">11PM</option>
      </select>
      <h4>Sunday</h4>
      <select class="sun_Open">
        <option value="12AM">12AM</option>
        <option value="1AM">1AM</option>
        <option value="2PM">2AM</option>
        <option value="3AM">3AM</option>
        <option value="4AM">4AM</option>
        <option value="5AM">5AM</option>
        <option value="6AM">6AM</option>
        <option value="7AM">7AM</option>
        <option value="8AM">8AM</option>
        <option value="9AM">9AM</option>
        <option value="10AM">10AM</option>
        <option value="11AM">11AM</option>
        <option value="12PM">12PM</option>
        <option value="1PM">1PM</option>
        <option value="2PM">2PM</option>
        <option value="3PM">3PM</option>
        <option value="4PM">4PM</option>
        <option value="5PM">5PM</option>
        <option value="6PM">6PM</option>
        <option value="7PM">7PM</option>
        <option value="8PM">8PM</option>
        <option value="9PM">9PM</option>
        <option value="10PM">10PM</option>
        <option value="11PM">11PM</option>
      </select>
      <select class="sun_Close">
        <option value="12AM">12AM</option>
        <option value="1AM">1AM</option>
        <option value="2PM">2AM</option>
        <option value="3AM">3AM</option>
        <option value="4AM">4AM</option>
        <option value="5AM">5AM</option>
        <option value="6AM">6AM</option>
        <option value="7AM">7AM</option>
        <option value="8AM">8AM</option>
        <option value="9AM">9AM</option>
        <option value="10AM">10AM</option>
        <option value="11AM">11AM</option>
        <option value="12PM">12PM</option>
        <option value="1PM">1PM</option>
        <option value="2PM">2PM</option>
        <option value="3PM">3PM</option>
        <option value="4PM">4PM</option>
        <option value="5PM">5PM</option>
        <option value="6PM">6PM</option>
        <option value="7PM">7PM</option>
        <option value="8PM">8PM</option>
        <option value="9PM">9PM</option>
        <option value="10PM">10PM</option>
        <option value="11PM">11PM</option>
      </select>
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

h3 {
  font-size: 3em;
  text-align: center;
  width: 100%;
  color: #ffe128;
  text-shadow: 0px 2px 5px black;
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row-start: 1;
  grid-row-end: 2;
}

.submitView {
  padding-top: 80px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(14, 40px);
  width: 90%;
  height: 100%;
  margin-left: 5%;
}

.name {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row: 6;
  height: 30px;
}

.address {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row: 7;
  height: 30px;
}

.phone {
  grid-column-start: 1;
  grid-column-end: 7;
  grid-row: 8;
  height: 30px;
}

</style>
