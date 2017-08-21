<template>
  <div id="app">
    <Sheader></Sheader>
    <Group>
    </Group>
    <Checker></Checker>
    <tab :line-width="200" :defaultColor="'yellow'">
      <tab-item >aaa</tab-item>
    </tab>
    <FormPreview :header-label="lw" :header-value="'我是内容'"></FormPreview>
  </div>
</template>

<script>
  import  Sheader from "./components/header.vue"
  import Group from "vux/src/components/group/"
  import  Checker  from 'vux/src/components/checker/checker.vue'
  import  Tab  from 'vux/src/components/tab/tab.vue'
  import TabItem from 'vux/src/components/tab/tab-item.vue'
  import  FormPreview  from 'vux/src/components/form-preview'

  export default {
    components: {
      Sheader,
      Group,
      Checker,
      Tab,
      TabItem,
      FormPreview
    },
    data(){
        return {
            lw:'我是'
        }
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    background-color: #ccc;
  }
</style>
