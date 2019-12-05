<template>
  <div 
    class="progress"
    :class="[
      status ? `is-${status}` : ''
    ]"
  >
    <div class="progress-bar">
      <div class="progress-bar__outer" :style="{height: strokeWidth + 'px'}">
        <div class="progress-bar__inner" :style="barStyle">
          <div class="progress-bar__innerText" v-if="textInside && showText">{{ percentage }}%</div>
        </div>
      </div>
    </div>

    <div 
      class="progress__text" 
      :style="{fontSize: progressTextSize + 'px'}"
      v-if="!textInside && showText"
    >
      <template v-if="!status">{{ percentage }}%</template>
      <i v-else class="icon" :class="iconClass"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    strokeWidth: {
      type: Number,
      default: 6
    },
    percentage: {
      type: Number,
      required: true,
      default: 0,
      // validator (value) {
      //   return value >= 0 && value <= 100
      // },
      validator: val => val >= 0 && val <= 100
    },
    status: {
      type: String
    },
    type: {
      type: String,
      default: 'line',
      validator: val => ['circle', 'line'].includes(val)
    },
    textInside: {
      type: Boolean,
      default: false
    },
    showText: {
      type: Boolean,
      default: true
    },
    color: {
      type: String
    }
  },
  computed: {
    progressTextSize () {
      return 12 + this.strokeWidth * 0.4;
    },
    stroke () {
      let color;
      if(this.color) {
        return this.color;
      }
      switch (this.status) {
        case 'success':
          color = '#13ce66';
          break;
        case 'exception':
          color = '#ff4949';
          break;
        default:
          color = '#20a0ff';
      }
      return color;
    },
    barStyle () {
      return {
        width: this.percentage + '%', 
        backgroundColor: this.stroke
      }
    },
    iconClass () {
      if(this.type === 'line') {
        return this.status === 'success'
               ? 'icon-circle-check'
               : 'icon-circle-close'
      } else {
        return this.status === 'success'
               ? 'icon-check'
               : 'icon-close'
      }
    }

  },
}
</script>


<style>
@font-face {
  font-family: 'icon';  /* project id 1221311 */
  src: url('./icon/iconfont.eot');
  src: url('./icon/iconfont.eot?#iefix') format('embedded-opentype')
  url('./icon/iconfont.woff2') format('woff2')
  url('./icon/iconfont.woff') format('woff')
  url('./icon/iconfont.ttf') format('truetype')
  url('./icon/iconfont.svg#iconfont') format('svg')
}

.icon {
  font-family: 'icon' !important;
  font-size: 16px;
  font-style: normal;
}

.icon-circle-check::before {
  content: '\e655';
}

.icon-circle-close::before {
  content: '\e6a7';
}

.icon-check::before {
  content: '\e6b1';
}

.icon-close::before {
  content: '\e615';
}

.progress.is-success .progress__text {
  color: #67c23a;
}
.progress.is-exception .progress__text {
  color: #f56c6c;
}

.progress-bar {
  display: inline-block;
  box-sizing: border-box;
  /* width: calc(100% - 50px); */
  width: 120%;
  padding-right: 50px;
  margin-right: -50px;
}

.progress-bar__outer {
  border-radius: 100px;
  background: none;
}


.progress-bar__inner {
  height: 60%;
  line-height: 1;
  border-radius: 100px;
  transition: width .6s ease;
  text-align: right;
  background: #2eb67c;
  background: -webkit-linear-gradient(left,#2eb67c,#4fea96) no-repeat;
}

.progress-bar__innerText {
  display: inline-block;
  color: #fff;
  font-size: 0;
  margin: 0 5px;
  vertical-align: middle;
}

.progress__text {
  display: inline-block;
  margin-left: 10px;
  color: #606266;
}
</style>
