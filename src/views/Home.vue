<template>
  <div class="container">
    <div class="left-page">
      <draggable
        :list="baseComponents"
        :group="{ name: 'componentGroupId', pull: 'clone', put: false }"
        :sort="false"
        :clone="cloneComponent"
        item-key="tagIcon"
      >
        <template #item="{ element }">
          <div @click="addComponent(element)">
            {{ element.label }}
          </div>
        </template>
      </draggable>
    </div>
    <div class="center-page">
      <!-- {{ state.drawList }} -->
      <el-form>
        <draggable
          :list="state.drawList"
          group="componentGroupId"
          item-key="name"
        >
          <template #item="{ element }">
            <DrawItem
              :configData="element"
              @activeItem="activeItemInfo"
            ></DrawItem>
          </template>
        </draggable>
      </el-form>
    </div>
    <div class="right-page">
      <!-- {{ state.rightItem }} -->
      <RightPage :rightItem="state.rightItem"></RightPage>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, watch } from "vue";
import draggable from "vuedraggable";
import DrawItem from "@/components/DrawItem";
import TestDrawItem from "@/components/TestDrawItem";
import RightPage from "@/components/RightPage";
import { baseComponents } from "@/commons/config";
import { deepClone } from "@/utils/base";

const currentTab = ref("field");
const state = reactive({
  rightItem: {} as any,
  drawList: [] as any,
});

const cloneComponent = (original: any) => {
  return deepClone(original);
};

const addComponent = (element: any) => {
  const clonElemnt = cloneComponent(element);
  state.drawList.push(clonElemnt);
};

const activeItemInfo = (currItem: any) => {
  state.rightItem = currItem;
};
</script>

<style lang="less">
@import "~@/styles/home.less";
</style>
