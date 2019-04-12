<template>
  <div class="contentBox">
    <div class="topBox">
      <div class="topContent" v-if="father == 'home'">{{week}}</div>
      <div class="topContent" v-if="father == 'item'">题目：{{topic}}</div>
    </div>
    <div v-if="father == 'home'">
      <div class="content_style homebg"></div>
      <router-link to="item" class="button_style start"></router-link>
    </div>
    <div v-if="father == 'item'">
      <div class="content_style itembg">
        <div class="item_list_container">
          <header class="item_title">{{itemDetail[topic-1].topic_name}}</header>
          <ul>
            <li
              class="item_list"
              v-for="(item,index) in itemDetail[topic-1].topic_answer"
              :key="index"
              @click="choose(index,item.topic_answer_id)"
            >
              <span
                class="option_style"
                :class="{'has_choosed':isActive == index}"
              >{{chooseType(index)}}</span>
              <span class="option_detail">{{item.answer_name}}</span>
            </li>
          </ul>
        </div>
      </div>
      <span class="button_style next" @click="nextItem()" v-if="topic<itemDetail.length"></span>
      <span class="button_style submit" @click="submitItem()" v-else></span>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { getClientSize } from "../config/util.js";
export default {
  name: "",
  props: ["father"],
  computed: {
    ...mapState(["week", "topic", "itemDetail","timer"]),
    width() {
      return getClientSize().width;
    },
    height() {
      return getClientSize().height;
    }
  },
  data() {
    return {
      isActive: null,
      chooseId: null //选中答案id
    };
  },
  methods: {
    ...mapActions(["addNum"]),
    choose(index, id) {
      (this.isActive = index), (this.chooseId = id);
      // console.log(this.isActive);
      // console.log(this.chooseId);
    },
    chooseType: index => {
      switch (index) {
        case 0:
          return "A";
          break;
        case 1:
          return "B";
          break;
        case 2:
          return "C";
          break;
        case 3:
          return "D";
          break;
      }
    },
    nextItem() {
      if (this.isActive !== null) {
        this.isActive = null;
        this.addNum(this.chooseId)
      } else {
        alert('还没选择答案');
      }
    },
    submitItem() {
      if (this.isActive !== null) {
        this.isActive = null;
        this.addNum(this.chooseId)
        clearInterval(this.timer)
        this.$router.push('score')
      } else {
        	alert('还没选择答案')
      }
    }
  }
};
</script>

<style lang='less' scoped>
.contentBox {
  position: fixed;
    right: 0;
    top: 0;
    left: 0;
    bottom: 0;
    background: url('../images/1-1.jpg') no-repeat;
    background-size: 100% 100%;
  .topBox {
    position: absolute;
    height: 7.35rem;
    width: 3.25rem;
    top: -1.3rem;
    right: 1.6rem;
    background: url(../images/WechatIMG2.png) no-repeat;
    background-size: 100% 100%;
    z-index: 999;
    .topContent {
      position: absolute;
      left: 0.48rem;
      bottom: 1.1rem;
      height: 0.7rem;
      width: 2.5rem;
      font-size: 0.6rem;
      font-family: "黑体";
      font-weight: 600;
      color: #a57c50;
      text-align: center;
    }
  }
  .content_style {
    height: 11.625rem;
    width: 15.15rem;
    background-repeat: no-repeat;
    position: absolute;
    top: 4.1rem;
    left: 1rem;
  }
  .homebg {
    background-image: url(../images/1-2.png);
    background-size: 13.142rem 100%;
    background-position: right center;
  }
  .itembg {
    background-image: url(../images/2-1.png);
    background-size: 13.142rem 100%;
    background-position: right center;
  }
  .button_style {
    display: block;
    height: 2.1rem;
    width: 4.35rem;
    background-size: 100% 100%;
    position: absolute;
    top: 16.5rem;
    left: 50%;
    margin-left: -2.4rem;
    background-repeat: no-repeat;
  }
  .start {
    background-image: url(../images/1-4.png);
  }
  .next {
    background-image: url(../images/2-2.png);
  }
  .submit {
    	background-image: url(../images/3-1.png);
  }

  .item_list_container {
    position: absolute;
    height: 7rem;
    width: 8rem;
    top: 2.4rem;
    left: 4rem;
    -webkit-font-smoothing: antialiased;
  }
  .item_title {
    font-size: 0.65rem;
    color: #00e;
    line-height: 0.7rem;
  }
  .item_list {
    font-size: 0;
    margin-top: 0.4rem;
    width: 10rem;
    span {
      display: inline-block;
      font-size: 0.6rem;
      color: #00e;
      vertical-align: middle;
    }
    .option_style {
      height: 0.725rem;
      width: 0.725rem;
      border: 1px solid #fff;
      border-radius: 50%;
      line-height: 0.725rem;
      text-align: center;
      margin-right: 0.3rem;
      font-size: 0.5rem;
      font-family: "Arial";
    }
    .has_choosed {
      background-color: #ffd400;
      color: #575757;
      border-color: #ffd400;
    }
    .option_detail {
      width: 7.5rem;
      padding-top: 0.11rem;
    }
  }
}
</style>
