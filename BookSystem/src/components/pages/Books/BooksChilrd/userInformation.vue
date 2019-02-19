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
        <el-table-column prop="operation" label="操作">
          <template slot-scope="scope">
            <div>
              <p>
                <!-- <el-button>查看</el-button>
                <el-button>还书</el-button> -->
                <span class="check">详情</span>
                <span class="check" @click="remove(scope.row)">删除</span>
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
// import axios from 'axios';
import { userInformation } from '../../../api/userInformation/userInformation'
export default {
  name: 'userInformation',
  data () {
    return {
      tableData: []
    }
  },
  methods: {
    init: function () {
      this.getUserInformation()
    },
    getParams: function () {
      const userName = this.tableData.userName
      const borrowNum = this.tableData.borrowNum
      const returned = this.tableData.returned
      const noReturn = this.tableData.noReturn
      const sex = this.tableData.sex
      const age = this.tableData.age
      const deposit = this.tableData.deposit
      const ID = this.tableData.ID
      const reputationNum = this.tableData.reputationNum
      let req = {
        userName,
        borrowNum,
        returned,
        noReturn,
        sex,
        age,
        deposit,
        ID,
        reputationNum
      }
      return req
    },
    getUserInformation () {
      let req = this.getParams()
      userInformation(req, res => {
        if (res.data && res.data.length) {
          this.tableData = res.data
        } else {
          this.tableData = []
        }
      }, (err) => {
        // this.logShow('获取借阅信息失败 resError:', err, 'ERROR')
      })
    },

    // 删除
    remove (val) {
      this.tableData = this.tableData.filter(item => item !== val)
    }

  },
  mounted () {
    this.init()
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
