import { ElButton, ElTable, ElTableColumn } from "element-plus";
import {
  computed,
  defineComponent,
  h,
  ref,
  resolveComponent,
  watch,
} from "vue";
import "@/styles/drawItem.less";

export default defineComponent({
  name: "DrawItem",

  props: {
    configData: Object,
  },

  setup(props: any, { attrs }) {
    // 生成组件
    const { onActiveItem } = attrs as any;

    //#region 处理处理组件 v-model 值
    const vModel = ref(props.configData.defaultValue);

    const modelEvent = (e: any) => {
      vModel.value = e;
    };

    // 找一个中间值defaultValue，来传递绑定的数据
    watch(
      () => vModel.value,
      (curr) => {
        onActiveItem(Object.assign(props.configData, { defaultValue: curr }));
      }
    );

    watch(
      () => props.configData.defaultValue,
      (curr) => {
        vModel.value = curr;
      }
    );
    //#endregion

    //#处理table 表头
    const tableConfig = computed(() => {
      return !props.configData.jsonConfig
        ? props.configData.config
        : JSON.parse(props.configData.jsonConfig);
    });

    //#处理table 数据
    const tableData = computed(() => {
      return !props.configData.jsonData
        ? props.configData.data
        : JSON.parse(props.configData.jsonData);
    });

    return () => {
      return (
        <div class="item">
          <el-col
            class="itemCol"
            span={props.configData.span}
            onClick={(e: any) => {
              // 这里传出去的不是clone的对象
              onActiveItem(
                Object.assign(props.configData, {
                  jsonData: JSON.stringify(tableData.value),
                  jsonConfig: JSON.stringify(tableConfig.value),
                })
              );
              e.stopPropagation();
            }}
          >
            <el-form-item
              label={
                props.configData.tag === "el-table"
                  ? ""
                  : props.configData.label
              }
            >
              {props.configData.tag === "el-table"
                ? h(
                    ElTable,
                    {
                      data: tableData.value,
                      border: true,
                    },
                    () => [
                      tableConfig.value.map((item: any) => {
                        return h(ElTableColumn, item);
                      }),
                      <ElTableColumn fixed="right" label="操作" width="120">
                        {!props.configData.flag ? (
                          <ElButton type="text">详情</ElButton>
                        ) : null}
                        {!props.configData.flag ? (
                          <ElButton type="text">删除</ElButton>
                        ) : null}
                      </ElTableColumn>,
                    ]
                  )
                : h(
                    resolveComponent(props.configData.tag),
                    Object.assign(props.configData, {
                      modelValue: vModel.value,
                      "onUpdate:modelValue": modelEvent,
                    })
                  )}
            </el-form-item>
          </el-col>
        </div>
      );
    };
  },
});
