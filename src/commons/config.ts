export const baseComponents = [
  {
    tag: "el-input",
    label: "单行输入",
    placeholder: "请输入",
    defaultValue: undefined,
    style: { width: "100%" },
    clearable: true,
    "prefix-icon": "",
    "suffix-icon": "",
    maxlength: null,
    "show-word-limit": false,
    readonly: false,
    disabled: false,
    span: 24,
  },
  {
    tag: "el-button",
    label: "按钮",
    span: 24,
  },
  {
    tag: "el-switch",
    label: "开关",
    loading: false,
    defaultValue: undefined,
    span: 24,
  },
  {
    tag: "el-date-picker",
    label: "日期选择",
    type: "date",
    placeholder: "请选择",
    defaultValue: undefined,
    span: 24,
  },
  {
    tag: "el-table",
    label: "表格",
    defaultValue: undefined,
    data: [
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
    ],
    config: [
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
    ],
    border: true,
    span: 20,
  },
  {
    tag: "el-pagination",
    label: "分页",
    layout: "prev, pager, next",
    total: 50,
  },
];
