<template>
  <b-container>
    <b-row align-v="center" class="my-5">
      <b-col>
        <h1>👩‍👩‍👧 部屋をみんなに共有しよう 👩‍👩‍👧</h1>
      </b-col>
    </b-row>
    <b-row align-v="center" class="my-5">
      <b-col>
        <h5>部屋の URL</h5>
        <b-form-input id="room-url" v-model="roomURL" readonly></b-form-input>
      </b-col>
    </b-row>
    <b-row align-v="center" class="my-5">
      <b-col>
        <h5>現在の参加者</h5>
        <b-list-group>
          <b-list-group-item v-for="member in members" :key="member">
            {{ member }}
          </b-list-group-item>
        </b-list-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <router-link to="/show-team">
          <b-button block variant="outline-success">スタート</b-button>
        </router-link>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  data() {
    return {
      roomURL: "https://test.room.url",
      members: ["A太郎", "B子", "Cの助", "D美"],
    };
  },
};
</script>
