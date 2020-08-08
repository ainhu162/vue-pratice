<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Http</h1>
        <div class="form-group">
          <label for>Username</label>
          <input type="text" v-model="user.name" name id class="form-control" />
        </div>
        <div class="form-group">
          <label for>Mail</label>
          <input type="text" v-model="user.email" name id class="form-control" />
        </div>
        <button @click="submit" type="submit" class="btn btn-primary">Submit</button>
        <hr />
        <input type="text" v-model="node" />
        <hr />
        <button @click="fetchData" class="btn btn-primary">Get Data</button>
        <br />
        <br />
        <ul class="list-group">
          <li class="list-group-item" :key="key" v-for="(u,key) in users">
            <p>Name: {{u.name}}</p>
            <p>Mail: {{u.email}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "",
        email: "",
      },
      users: [],
      resource: null,
      node: "data",
    };
  },
  methods: {
    submit() {
      // this.$http
      //   .post("https://vuejs-http-ead37.firebaseio.com/data.json", this.user)
      //   .then(
      //     (res) => {
      //       console.log(res);
      //     },
      //     (err) => {
      //       console.log(err);
      //     }
      //   );
      // this.resource.save({}, this.user);
      this.resource.saveAlt(this.user); // <-- custom action
    },
    fetchData() {
      // this.$http
      //   .get("")
      //   .then((res) => {
      //     return res.json();
      //   })
      //   .then((res) => {
      //     this.users = res;
      //   });
      // this.resource.get({}).then((res) => {
      //   console.log(res);
      //   this.users = res.body;
      // });

      // dynamic url
      this.resource.getData({ node: this.node }).then((res) => {
        this.users = res.body;
      });
    },
  },
  created() {
    const customActions = {
      saveAlt: { method: "POST", url: "alternative.json" },
      getData: { method: "GET" },
    };
    this.resource = this.$resource("{node}.json", {}, customActions);
  },
};
</script>

<style>
</style>
