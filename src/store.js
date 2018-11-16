import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    lessons: "",
    excercises: "",
    accessibility: {
      contrast: false,
      ruler: false,
      dyslexia: false
    }
  },
  mutations: {

    setLessons: (state, lessons) => {
      state.lessons = lessons;
    },

    setExcercises: (state, excercises) => {
      state.excercises = excercises;
    },

    toggleAccessibility: (state, name) => {
      state.accessibility[name] = !state.accessibility[name]
    },

  },
  getters: {

    getExerciseByRoute: (state) => (route) => {
      return state.excercises.find(excercise => excercise.data().route === route)
    },

    getExerciseByName: (state) => (name) => {
      return state.excercises.find(excercise => excercise.name === name)
    }

  },
});
