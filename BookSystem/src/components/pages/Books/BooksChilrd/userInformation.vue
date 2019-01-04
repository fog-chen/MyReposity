<template>
  <div class="hello">
    <div>
      <el-table :data="tableData" style="width: 100%" :default-sort="{prop: 'date', order: 'descending'}" border>
        <el-table-column prop="userName" label="用户">
          <template slot-scope="scope">
            <div>
              <p>
                {{scope.row.userName}}
              </p>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="borrowNum" label="借阅书籍本数">
          <template slot-scope="scope">
            <div>
              <p>
                {{scope.row.borrowNum}}
              </p>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="returned" label="归还本数">
          <template slot-scope="scope">
            <div>
              <p>
                {{scope.row.returned}}
              </p>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="noReturn" label="未归还本数">
          <template slot-scope="scope">
            <div>
              <p>
                <!-- {{stampToDate(scope.row.date)}} -->
                {{scope.row.noReturn}}
              </p>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="sex" label="性别">
          <template slot-scope="scope">
            <div>
              <p>
                <!-- {{stampToDate(scope.row.date)}} -->
                {{scope.row.sex===1?'男':'女'}}
              </p>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="age" label="年龄">
          <template slot-scope="scope">
            <div>
              <p>
                <!-- {{stampToDate(scope.row.date)}} -->
                {{scope.row.age}}
              </p>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="deposit" label="押金">
          <template slot-scope="scope">
            <div>
              <p>
                <!-- {{stampToDate(scope.row.date)}} -->
                {{scope.row.deposit}}
              </p>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="ID" label="身份证" width="150px">
          <template slot-scope="scope">
            <div>
              <p>
                <!-- {{stampToDate(scope.row.date)}} -->
                {{scope.row.ID}}
              </p>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="reputationNum" label="信誉分">
          <template slot-scope="scope">
            <div>
              <p>
                <!-- {{stampToDate(scope.row.date)}} -->
                {{scope.row.reputationNum}}
              </p>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="operation" label="操作" :formatter="formatter">
          <template slot-scope="scope">
            <div>
              <p>
                <!-- <el-button>查看</el-button>
                <el-button>还书</el-button> -->
                <span class="check">查看</span>
                <span class="return">还书</span>
              </p>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
// import axios from 'axios';
import axios from 'axios';
export default {
  name: 'userInformation',
  data () {
    return {
      tableData: []
    }
  },
  created: function () {
    axios.get('https://www.easy-mock.com/mock/5c28d4432140e71d51972e3a/books/userInformation')
      .then(response => {
        this.tableData = response.data.data
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  margin: 0 15px;
}
.check,
.return {
  color: #409eff;
  cursor: pointer;
}
.el-table td {
  padding: 0;
}
</style>
