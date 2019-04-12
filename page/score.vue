<template>
  <div class="scoreBox">
    <div class="your_scores_container">
      <header class="your_scores">
        <span class="score_num">{{score}}</span>
        <span class="fenshu">分！</span>
      </header>
      <div class="result_tip">{{scoreTips}}</div>
    </div>
    <div class="share_button" @click="showCover"></div>
    <div class="share_cover" v-show="showHide" @click="showCover">
      <img src="../images/5-2.png" class="share_img">
    </div>
    <div class="time">
      <span>总用时{{time}}秒！</span>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "",
  data() {
    return {
      rightArr: [3, 7, 11, 15, 19],
      score: 0,
      scoreTipsArr: [
        "你说，是不是把知识都还给小学老师了？",
        "及格！",
        "加油！",
        "差一点",
        "很棒"
      ],
      showHide: false,
      scoreTips: "" //分数提示
    };
  },
  computed: {
    ...mapState(["answerid","time"])
  },
  created() {
    this.getScore();
    this.getScoreTip();
    // document.body.style.backgroundImage = "url(../images/4-1.jpg)";
  },
  methods: {
    getScore() {
      this.answerid.forEach((item, index) => {
        if (item == this.rightArr[index]) {
          this.score += 20;
        }
      });
    },
    //是否显示分享提示
    showCover: function() {
      this.showHide = !this.showHide;
    },
    //根据分数显示提示
    getScoreTip: function() {
      let index = Math.ceil(this.score / 20);
      console.log(this.score);
      console.log(index);
      console.log(this.scoreTipsArr[index]);
      this.scoreTips = this.scoreTipsArr[index];
    }
  }
};
</script>

<style lang='less' scoped>
.scoreBox {
  position: fixed;
  right: 0;
  top: 0;
  left: 0;
  bottom: 0;
  background: url("../images/4-1.jpg") no-repeat;
  background-size: 100% 100%;
  .your_scores_container {
    width: 9.7rem;
    height: 9.1rem;
    background: url(../images/4-2.png) no-repeat;
    background-size: 100% 100%;
    margin: 0 auto 0;
    position: relative;
    .your_scores {
      position: absolute;
      width: 100%;
      text-indent: 3.3rem;
      top: 4.7rem;
      font-size: 1.4rem;
      font-weight: 900;
      font-family: "Microsoft YaHei";
      .score_num {
        font-family: Tahoma, Helvetica, Arial;
        color: #a51d31;
      }
      .fenshu {
        color: #a51d31;
      }
    }
    .result_tip {
      position: absolute;
      top: 7rem;
      width: 9rem;
      left: 0.6rem;
      color: #3e2415;
      font-size: 0.65rem;
      text-align: center;
    }
  }
  .share_button {
    width: 6.025rem;
    height: 2.4rem;
    margin: 0.8rem auto 0;
    background: url(../images/4-3.png) no-repeat 0.4rem 0;
    background-size: 5.825rem 100%;
  }
  .share_cover {
    position: fixed;
    right: 0;
    top: 0;
    left: 0;
    bottom: 0;
    background: url("../images/5-1.png") no-repeat;
    background-size: 100% 100%;
    opacity: 0.7;
  }
  .share_img {
    height: 10.975rem;
    width: 11.95rem;
    position: fixed;
    top: 0.5rem;
    left: 50%;
    margin-left: -5.975rem;
  }
  .time {
    width: 10rem;
    height: 5rem;
    // background: #339999;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2rem auto;
    border-radius: 50px;
    box-shadow: 0 0 50px rgba(0, 0, 0, .8);
    span {
      font-size: 20px;
      font-weight: bold;
      color: #fff;
    }
  }
}
</style>
