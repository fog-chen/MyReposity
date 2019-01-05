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
        <el-table-column prop="date" label="入库时间" sortable>
          <template slot-scope="scope">
            <div>
              <p>
                {{stampToDate(scope.row.date)}}
                <!-- {{scope.row.date}} -->
              </p>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="bookNumber" label="数量" sortable>
          <template slot-scope="scope">
            <div>
              <p>
                {{scope.row.bookNumber}}
                <!-- {{scope.row.date}} -->
              </p>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="borrow" label="借阅数量" sortable>
          <template slot-scope="scope">
            <div>
              <p>
                {{scope.row.borrow}}
                <!-- {{scope.row.date}} -->
              </p>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="borrow" label="未归还数量" sortable>
          <template slot-scope="scope">
            <div>
              <p>
                {{scope.row.borrow}}
                <!-- {{scope.row.date}} -->
              </p>
            </div>
          </template>
        </el-table-column>
        <!-- <el-table-column prop="address" label="地址" :formatter="formatter">
        </el-table-column> -->
      </el-table>
    </div>
  </div>
</template>

<script>
import { stampToDate } from '../../../common/date';
// import { test } from '../../../common/date';
import axios from 'axios';
export default {
  name: 'bookInformation',
  data () {
    return {
      tableData: [],
      stampToDate: stampToDate
    }
  },
  created: function () {
    axios.get('https://www.easy-mock.com/mock/5c28d4432140e71d51972e3a/books/bookinformation')
      .then(reponse => {
        this.tableData = reponse.data.data
        // console.log(reponse.data)
      })
      .catch(error => {
        console.log(error)
      })

  },
  methods: {
    // test1: function () {
    //   console.log(stampToDate(1546584194))
    // }
  }
}
</script>

<style scoped>
.hello {
  margin: 0 15px;
}
</style>
