// src/store/modules/user/index.js

import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  // id: 'user', // id必填，且需要唯一
  state: () => {
    return {
      name: '张三',
    };
  },
  getters: {
    nameLength: (state) => state.name.length,
  },
  actions: {
    updateName(name) {
      this.name = name;
    },
  },
});
