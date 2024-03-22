<!--模板:表示页面视图html-->
<template>
  <div>
    <h1>{{ msg }}</h1>
    <!--    使用elementUI的组件-按钮-->
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
    <el-input-number style="width: 300px" v-model="num" @change="handleChange" :min="1" :max="5"
                     label="描述文字"></el-input-number>


    <!--    引入el-table-->
    <el-table
      :data="tableData"
      stripe
      style="width: 70%;margin-top: 10px;margin-bottom: 10px">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>

    <!--    引入树形控件 el-tree-->

    <el-tree :data="data" :props="defaultProps" style="margin-left: 100px" @node-click="handleNodeClick"></el-tree>

    <table>
      <tr>
        <td>第1行第1列</td>
        <td>第1行第2列</td>
        <td>第1行第3列</td>
      </tr>
      <tr>
        <td rowspan="2">第2行第1列</td>
        <td>第2行第2列</td>
        <td>第2行第3列</td>
      </tr>
      <tr>

        <td>第3行第2列</td>
        <td>第3行第3列</td>
      </tr>
      <tr>
        <td rowspan="2">第4行第1列</td>
        <td>第4行第2列</td>
        <td>第4行第3列</td>
      </tr>
      <tr>

        <td>红烧肉<img src="@/assets/2.png" width="100"></td>
        <td>第5行第3列</td>
      </tr>
    </table>
  </div>
</template>

<!--定义数据和操作方法, 默认导出-->
<script>
export default {
  name: "yinhai",
  data() {//数据池
    return {

      data: [{
        label: '家用电器',
        children: [{
          label: '电视',
          children: [{
            label: '教育电视'
          },
            {
              label: '全面屏电视'
            }
          ]
        }]
      }, {
        label: '一级 2',
        children: [{
          label: '二级 2-1',
          children: [{
            label: '三级 2-1-1'
          }]
        }, {
          label: '二级 2-2',
          children: [{
            label: '三级 2-2-1'
          }]
        }]
      }, {
        label: '一级 3',
        children: [{
          label: '二级 3-1',
          children: [{
            label: '三级 3-1-1'
          }]
        }, {
          label: '二级 3-2',
          children: [{
            label: '三级 3-2-1'
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      },

      msg: "Welcome to yinhai!",
      num: 1,
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods: {
    handleChange(value) {
      //这里我们可以获取到用户增加/减少的值
      console.log(value);
    }
  }
}
</script>

<!--样式,css, 可以去修饰页面视图
前端的要求不高，但是也要会一点
margin: 0 auto; 0 表示上下的边距, auto表示左右居中
-->
<style scoped>
div {
  width: 900px;
  background-color: aliceblue;
  margin: 0 auto;
}

table, tr, td {
  border: 1px solid red;
  border-collapse: collapse;
}

table {
  margin: 0 auto;
  width: 600px;
  height: 380px;
}

h1 {
  color: red;
}
</style>
