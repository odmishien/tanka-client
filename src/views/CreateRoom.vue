<template>
  <b-container>
    <b-row align-v="center">
      <b-col>
        <h1>👩‍👩‍👧 部屋をみんなに共有しよう 👩‍👩‍👧</h1>
      </b-col>
    </b-row>
    <b-row align-v="center">
      <b-col>
        <b-form-input v-model="roomURL" readonly></b-form-input>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  data() {
    return {
      roomURL: "https://test.room.url",
    };
  },
};
</script>
