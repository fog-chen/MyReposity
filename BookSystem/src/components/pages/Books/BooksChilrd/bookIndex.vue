<template>
  <div class="hello">
    <ul class="cards">
      <li v-for="books in bookList" class="card">
        <div class="bookimg">
          <img :src="books.bookimg" alt="" class="image">
        </div>
        <!-- <span>{{books.bookName}}</span> -->
        <!-- <span>{{books.bookAutor}}</span> -->
        <div style="padding: 14px;">
          <span>
            {{books.bookName}}</span>
          <div class="bottom clearfix">
            <span>{{books.bookAutor}}</span>
          </div>
          <el-button type="text" class="button">借阅</el-button>
        </div>
      </li>
      <li class="clear"></li>
    </ul>
    <!-- <el-card :body-style="{ padding: '0px' }" class="card" shadow="hover">
      <img src="http://www.8887.tv/upload/201702/07/201702071719081183.jpg" class="image">
      <div style="padding: 14px;">
        <span>好吃的汉堡</span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <el-button type="text" class="button">操作按钮</el-button>
        </div>
      </div>
    </el-card> -->

  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'bookIndex',
  data () {
    return {
      currentDate: new Date(),
      bookList: []
    }
  },
  created: function () {
    axios.get('https://www.easy-mock.com/mock/5c28d4432140e71d51972e3a/books/books')
      .then(reponse => {
        this.bookList = reponse.data.data
        // console.log(reponse.data)
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  font-size: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
.cards {
  width: 100%;
  /* background: #a08; */
  color: #010101;
  clear: both;
}
.clear {
  clear: both;
}
.bookimg {
  height: 160px;
  /* box-shadow: 1px 1px 1px rgb(245, 223, 240); */
  overflow: hidden;
}
.card {
  width: 250px;
  height: 250px;
  margin: 10px;
  /* background: #efefef; */
  border: 1px solid #efefef;
  float: left;
  border-radius: 2px;
  background: #fff;
}
.hello {
  margin: 0 15px;
}
.card:hover {
  box-shadow: 0 0 10px #adadad;
  border-radius: 2px;
}
</style>
