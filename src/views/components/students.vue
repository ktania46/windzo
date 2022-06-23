<template>
  <form @submit.prevent="onSubmit">
    <!-- First and Last Name Row -->
    <div class="row">
      <div class="col-sm-6">
        <div class="form-group">
          <h1 class="text-1xl text-gray-900 font-medium dark:text-gray-200">
          <label for=""> Student Id:</label><input  @keypress="onlyNumber"  
           class="form-control" placeholder="Enter Student ID" 
          type="text" v-model="v$.form.studentId.$model">
          </h1><br>
          <h1 class="text-1xl text-gray-900 font-medium dark:text-gray-200">Displaying the data for student with ID: {{ v$.form.studentId.$model }}</h1>
          <div class="pre-icon os-icon os-icon-user-male-circle"></div>
          <!-- Error Message -->
          <div class="input-errors" v-for="(error, index) of v$.form.studentId.$errors" :key="index">
            <br><div class="text-sm dark:text-gray-400">{{ error.$message }}</div>
          </div>
        </div>
      </div>
    </div>
<br>
    <!-- Submit Button -->
    <div class="buttons-w">
      <button @click="chooseStd" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 
            focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 
            hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 
            dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 
            dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" :disabled="v$.form.$invalid" 
      style="margin-left:120px">Signup</button>
    </div>
    
  </form>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'


export function validId(id) {
  let validIdPattern = new RegExp("^[1-9][0-9]?$|^100$");
  if (validIdPattern.test(id)){
    return true;
  }
  return false;
}
// ^[1-9][0-9]?$|^100$

export default {

  setup () {
    return { v$: useVuelidate() }
  },

  data() {
    return {
      form: {
        studentId: '',
      }
    }
  },

  validations() {
    return {
      form: {
        studentId: { 
          required, id_validation: {
            $validator: validId,
            $message: 'Enter valid student Id'
          } 
        },
      },
    }
  },
}


</script>
