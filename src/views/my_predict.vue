<template>
  <div>
    <input type="file" @change="handleFileUpload" accept=".csv">
    <button @click="uploadFile">Upload</button>
    <div v-if="resultData">
      <p>Download Link:</p>
      <a :href="resultData" download>Download Result</a>
    </div>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      selectedFile: null,
      resultData: null
    };
  },
  methods: {
    handleFileUpload(event) {
      this.selectedFile = event.target.files[0];
    },
    uploadFile() {
      const formData = new FormData();
      formData.append("file", this.selectedFile);

      fetch("https://database-experiment-flask.azurewebsites.net/upload", {
        method: "POST",
        body: formData
      })
        .then(response => response.json())
        .then(data => {
          if (data.code === 200) {
            this.resultData = "https://database-experiment-flask.azurewebsites.net/download/" + data.data;
          } else {
            console.error(data.data);
          }
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>
  