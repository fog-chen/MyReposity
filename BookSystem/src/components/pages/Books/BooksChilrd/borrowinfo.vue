<template>
  <div class="hello">
    <div>
      <el-table :data="tableData" style="width: 100%" :default-sort="{prop: 'date', order: 'descending'}" border>
        <el-table-column prop="bookNum" label="编号" sortable>
          <template slot-scope="scope">
            <div>
              <p>
                {{scope.row.bookNum}}
              </p>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="bookName" label="书名" sortable>
          <template slot-scope="scope">
            <div>
              <p>
                {{scope.row.bookName}}
              </p>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="bookAutor" label="作者" sortable>
          <template slot-scope="scope">
            <div>
              <p>
                {{scope.row.bookAutor}}
              </p>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="Borrower" label="借阅人" sortable>
          <template slot-scope="scope">
            <div>
              <p>
                <!-- {{stampToDate(scope.row.date)}} -->
                {{scope.row.Borrower}}
              </p>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="borrowDate" label="借书时间" sortable>
          <template slot-scope="scope">
            <div>
              <p>
                {{scope.row.borrowDate}}
              </p>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="returnDate" label="还书时间" sortable>
          <template slot-scope="scope">
            <div>
              <p>
                {{scope.row.returnDate}}
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
import axios from 'axios';
export default {
  name: 'borrowinfo',
  data () {
    return {
      tableData: []
    }
  },
  created: function () {
    axios.get('https://www.easy-mock.com/mock/5c28d4432140e71d51972e3a/books/borrow')
      .then(response => {
        this.tableData = response.data.data
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.check,
.return {
  color: #409eff;
  cursor: pointer;
}
.hello {
  margin: 0 15px;
}
</style>
