import { defineStore } from "pinia";
import axios from "axios";

export const StoreApi = defineStore({
  id: "StoreApi",

  state: () => ({
    // System
    error: null,
    request: null,

    // Data
    data: [],
  }),

  actions: {
    async load() {
      if (!localStorage.getItem("apiArtigos")) {
        try {
          // request
          this.request = await axios.get("https://vida-com-deus.onrender.com/artigos");
          // Cache
          localStorage.setItem("apiArtigos", JSON.stringify(this.request));
          // pinia
          this.data = this.request;
        } catch (error) {
          this.error = error.message;
        }
      } else {
        this.data = JSON.parse(localStorage.getItem("apiArtigos"));
      }

      // return
      return this.data;
    },
  },
});
