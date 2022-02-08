import {
  computed,
  defineComponent,
  h,
  reactive,
  ref,
  resolveComponent,
  watch,
} from "vue";

export default defineComponent({
  name: "RightPage",

  props: {
    rightItem: Object,
  },

  setup(props: any, { emit }) {
    const currentTab = ref("field");

    return () => {
      return (
        <>
          <el-tabs v-model={currentTab.value}>
            <el-tab-pane label="组件属性" name="field" />
            <el-tab-pane label="表单属性" name="form" />
          </el-tabs>
          <div>
            <el-form v-show={currentTab.value === "field"}>
              <el-form-item label="占位提示">
                <el-input v-model={props.rightItem.placeholder} />
              </el-form-item>
              <el-form-item label="便签名">
                <el-input v-model={props.rightItem.label} />
              </el-form-item>
              <el-form-item label="输入值">
                <el-input v-model={props.rightItem.defaultValue} />
              </el-form-item>
              <el-form-item label="表单栅格">
                <el-slider
                  v-model={props.rightItem.span}
                  marks={{ 12: "" }}
                  max={24}
                  min={1}
                ></el-slider>
              </el-form-item>
              <el-form-item label="列表表头">
                <el-input
                  type="textarea"
                  v-model={props.rightItem.jsonConfig}
                />
              </el-form-item>
              <el-form-item label="列表数据">
                <el-input type="textarea" v-model={props.rightItem.jsonData} />
              </el-form-item>
            </el-form>
            <el-form v-show={currentTab.value === "form"}>
              <el-form-item label="默认值">
                <el-input placeholder="请输入默认值"></el-input>
              </el-form-item>
            </el-form>
          </div>
        </>
      );
    };
  },
});
