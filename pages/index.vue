<script setup>
import { useField } from 'vee-validate';
const { value } = useField("value")

</script>

<template>
  <h1>バリデーションサンプル</h1>
  <input type="text" v-model="value">
  <p>{{ value }}</p>
</template>