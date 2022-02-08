import { ElButton, ElTable, ElTableColumn } from "element-plus";
import { defineComponent, h, ref, resolveComponent } from "vue";

export default defineComponent({
  name: "DrawItem",

  props: {
    configData: Object,
  },
  emits: ["update:modelValue"],

  setup(props: any, { emit, attrs }) {
    const tableData = [
      {
        date: "2016-05-03",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2016-05-02",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2016-05-04",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2016-05-01",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
    ];

    const config = [
      {
        prop: "date",
        label: "日期",
        width: "180",
      },
      {
        prop: "name",
        label: "姓名",
        width: "180",
      },
      {
        prop: "address",
        label: "地址",
        width: "180",
      },
    ];

    const flag = true;

    return () => {
      return (
        <el-col>
          <el-form-item label="测试">
            {h(
              ElTable,
              {
                data: tableData,
                border: true,
              },
              () => [
                config.map((item) => {
                  return h(ElTableColumn, item);
                }),
                <ElTableColumn fixed="right" label="操作" width="120">
                  {!flag ? <ElButton type="text">详情</ElButton> : null}
                  {flag ? <ElButton type="text">删除</ElButton> : null}
                </ElTableColumn>,
              ]
            )}
          </el-form-item>
        </el-col>
      );
    };
  },
});
