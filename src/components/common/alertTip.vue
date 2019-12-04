<template>
  <!-- 警告弹出框 -->
     <div class="alert_container">
      <section class="tip_text_container">
        <div class="tip_icon">
          <span class="one"></span>
          <span class="two"></span>
        </div>
        <p class="tip_text">{{ alertText }}</p>
        <div class="confrim" @click="closeTip">确认</div>
      </section>
    </div>
</template>

<script>
export default {
  props: {
    alertText: String
  },
  methods: {
    closeTip() {
      this.$emit('closeTip')
    }
  }
}
</script>


<style scoped>
 /* 警告弹出框 */
.alert_container{position: fixed;top: 0;left: 0;right: 0;bottom: 0;z-index: 200;background: rgba(0, 0, 0, .5)}
.alert_container .tip_text_container{position: absolute;top: 50%;left: 36%;margin-left: -110p;width: 30%;animation: tipMove .4s;background-color: rgba(255, 255, 255, 1);border: 1px;padding-top: 20px;display: flex;justify-content: center;align-items: center;flex-direction: column;border-radius: 5px}
.alert_container .tip_text_container .tip_icon{width: 55px;height: 55px;border: 2px solid #f8cb86;border-radius: 50%;font-size: 20px;display: flex;justify-content: center;align-items: center;flex-direction: column;}
.alert_container .tip_text_container .tip_icon .one{width: 2px;height: 30px;background-color: #f8cb86;}
.alert_container .tip_text_container .tip_icon .two{width: 2px;height: 2px;border: 1px;border-radius: 50%;margin-top: 2px;background-color: #f8cb86}
.alert_container .tip_text_container .tip_text{font-size: 14px;color: #333;line-height: 20px;text-align: center;margin-top: 10px;padding: 0 5px}
.alert_container .tip_text_container .confrim{font-size: 18px;font-weight: bold;margin-top: 10px;background-color: #3cdfa5;width: 100%;text-align: center;line-height: 45px;border: 1px; color: #fff;border-bottom-left-radius: 5px;border-bottom-right-radius: 5px}
</style>