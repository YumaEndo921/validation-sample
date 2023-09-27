<script setup>
import { useField, useForm } from "vee-validate";
import * as yup from "yup";
import { setLocale } from "yup";
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

const schema = yup.object({
  name: yup.string().required("必ず入力してください").min(8).label("8"),
  email: yup.string().required().email(),
  startDate: yup.date().required(),
  endDate: yup
    .date()
    .required()
    .test(
      "endData_validate",
      "開始日以降の日付を選択してください",
      () => endDate.value > startDate.value
    ),
});

const { errors, handleSubmit } = useForm({
  validationSchema: schema,
});

const { value: name } = useField("name");
const { value: email } = useField("email");
const { value: startDate } = useField("startDate");
const { value: endDate } = useField("endDate");
</script>

<template>
  <h1>バリデーションサンプル</h1>
  <form>
    <!-- <input type="text" v-model="name" /> -->
    <!-- <p>{{ nameError }}</p> -->
    <p>{{ errors.name }}</p>
    <!-- <input type="text" v-model="email" /> -->
    <!-- <p>{{ emailError }}</p> -->
    <p>{{ errors.email }}</p>
    <!-- <button type="submit">送信</button> -->
  </form>
  <div class="width">
    <p>開始日</p>
    <Datepicker
      v-model="startDate"
      format="yyyy年MM月dd日 HH:mm"
      select-text="決定"
      cancel-text="キャンセル"
      class="datepicker"
    />
  </div>
  <div class="width">
    <p>終了日</p>
    <Datepicker
      v-model="endDate"
      format="yyyy年MM月dd日 HH:mm"
      select-text="決定"
      cancel-text="キャンセル"
      class="datepicker"
    />
  </div>
  <p>{{ errors.endDate }}</p>
</template>

<style lang="scss" scoped>
.datepicker {
  &::v-deep(.dp__action_row) {
    flex-wrap: wrap;
    row-gap: 8px;
  }
  &::v-deep(.dp__action_button) {
    width: max-content;
    height: fit-content;
  }
}
.width {
  width: 300px;
}
</style>
