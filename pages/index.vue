<script setup>
import { useField } from 'vee-validate';
import * as yup from 'yup';

const { value: name, errorMessage: nameError } = useField(
  'nameRule',
  yup.string().required().min(8)
);
const { value: email, errorMessage: emailError } = useField(
  'emailRule',
  yup.string().required().email()
);

</script>

<template>
  <h1>バリデーションサンプル</h1>
  <input type="text" v-model="name">
  <p>{{ nameError }}</p>
  <input type="text" v-model="email">
  <p>{{ emailError }}</p>
</template>