var tyUtilsJqGrid={
   //初始化参数   
   params:{
        rowNum:10000,//默认显示行数为20,如果不做分页，需要修改
      },
   //列配置
   colModel:{
        align:'left',//对齐方式：left, center, right
        classes:'',//设置列的css。多个class之间用空格分隔，如：'class1 class2'
        editable:false,//单元格是否可编辑
        editoptions:null,//编辑规则,如：{edithidden:true,required:true,number:true,minValue:10,maxValue:100}},设定 年龄的最大值为100，最小值为10，而且为数字类型，并且为必输字段。
        edittype:'text',//可以编辑的类型。可选值：text, textarea, select, checkbox, password, button, image and file.
        fixed:false,//列宽是否固定（渲染时不会放大缩小，但仍然会受到拖动影响）
        //单元格格式化方法
        formatter:function(cellvalue, options, rowObj){
        },
        hidden:false,//初始化时是否隐藏
        index:'colIndex',//索引。其和后台交互的参数为sidx
        key:false,//当从服务器端返回的数据中没有id时，将此作为唯一rowid使用只有一个列可以做这项设置。如果设置多于一个，那么只选取第一个，其他被忽略,没有设置则取序号
        label:'colLabel',//显示的列名
        name:'colName',//表格列的名称,查询数据或用于匹配渲染时的数据列名
        resizable:true,// 是否可以被resizable
        search:true,// 在搜索模式下，定义此列是否可以作为搜索列
        sortable:true,// 是否可排序
        sorttype:'text',//用在当datatype为local时，定义搜索列的类型，可选值：int/integer - 对integer排序float/number/currency - 排序数字date - 排序日期text - 排序文本
         width:150,//宽度
         //单元格反格式化方法(获取单元格内容时可通过jqgrid getrowdata而不是人工解析)
        unformat:function(cellvalue, options, rowObj){
        },
   }
 
}
