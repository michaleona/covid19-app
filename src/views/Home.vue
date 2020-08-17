<template>
  <el-row>
    <el-col :xs="{span: 24}" :md="{span: 6, offset: 9}" class="covid-container">
      <el-row>
        <el-col class="covid-banner-container">
          <div class="covid-header">
            <i class="el-icon-s-data"></i>
          </div>
          <div class="covid-banner"></div>
          <img class="covid-banner-illustration" src="@/assets/Cough-Illustration.svg" />
          <div class="covid-banner-content">
            <span class="covid-banner-title">Kasus Aktif di Indonesia</span>
            <span class="covid-banner-time">19 Agustus 2020 12:48 WIB</span>
            <span class="covid-banner-case">128,776</span>
            <span class="covid-banner-addition"><i class="el-icon-top"></i> +2,776 kasus</span>
          </div>
        </el-col>
      </el-row>
      <el-row class="covid-content-container">
        <el-col>
          <div class="covid-card">
            <div class="covid-card-container">
              <div class="covid-card-cases">
                <span class="title">Sembuh</span>
                <span class="total">87,558</span>
                <span class="addition"><i class="el-icon-top success"></i> +2,500 kasus</span>
              </div>
              <div class="covid-card-cases">
                <span class="title">Meninggal</span>
                <span class="total">5,968</span>
                <span class="addition"><i class="el-icon-top danger"></i> +2,500 kasus</span>
              </div>
            </div>
          </div>
        </el-col>
        <el-col>
          <div class="covid-card purple">
            <span class="title">Cara Mencegah Penyebaran COVID-19</span>
            <span class="arrow">
              Cari Tahu
              <i class="el-icon-right"></i>
            </span>
            <img class="covid-card-illustration" src="@/assets/Person-Mask.svg" />
          </div>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.success {
  color: #35A556;
}

.danger {
  color: #FA514F;
}

.covid-container {
  background-color: #f8f8ff;
  height: 100vh;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  position: relative;

  .el-icon-menu {
    font-size: 24px;
  }

  .covid-banner-container {
    position: relative;
    overflow: hidden;

    .covid-header {
      position: absolute;
      top: 24px;
      left: 24px;
      width: 100%;
      z-index: 1;
      color: #ffffff;
      i {
        transform: rotate(90deg);
        zoom: 1.4;
      }
    }
  }

  .covid-banner {
    height: 250px;
    width: 100%;
    background: rgb(87, 121, 255);
    border-radius: 0 0 50% 50%/0 0 100% 100%;
    transform: scaleX(1.8);
    position: relative;
  }

  .covid-banner-illustration {
    position: absolute;
    bottom: 40px;
    left: 24px;
    width: 160px;
    height: 160px;
  }

  .covid-banner-content {
    color: #ffffff;
    position: absolute;
    top: 60px;
    right: 24px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .covid-banner-title {
    font-weight: bold;
    font-size: 16px;
  }

  .covid-banner-time {
    font-size: 12px;
  }

  .covid-banner-case {
    font-size: 40px;
    font-weight: bold;
  }

  .covid-banner-addition {
    font-size: 12px;
  }

  .covid-content-container {
    padding: 24px;
    position: absolute;
    width: 100%;
    top: 160px;

    .el-col {
      margin-bottom: 24px;
    }
  }

  .covid-card {
    background: #ffffff;
    height: 100px;
    border-radius: 10px;
    padding: 0px 32px;
    -webkit-box-shadow: 0px 10px 20px 0px rgba(183, 183, 255, 0.16);
    -moz-box-shadow: 0px 10px 20px 0px rgba(183, 183, 255, 0.16);
    box-shadow: 0px 10px 20px 0px rgba(183, 183, 255, 0.16);
    display: flex;
    flex-direction: column;
    justify-content: center;
    &-container {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }
    &-cases {
      display: flex;
      flex-direction: column;
      align-items: center;
      .title {
        font-size: 12px;
        text-transform: uppercase;
        font-weight: 600;
        color: #7777ff;
      }
      .total {
        font-size: 24px;
        font-weight: bold;
        line-height: 32px;
      }
      .addition {
        font-size: 12px;
        color: #7a7a84;
      }
    }

    &.purple {
      background-color: #5779ff;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding-top: 24px;
      padding-bottom: 24px;
      position: relative;
      .title {
        color: #ffffff;
        text-transform: unset;
        width: 60%;
        font-size: 14px;
        margin-bottom: 16px;
      }
      .arrow {
        color: #ffffff;
        padding: 8px 12px;
        border-radius: 4px;
        background-color: #3e5ed1;
        font-size: 12px;
      }
    }
  }

  .covid-card-illustration {
    position: absolute;
    bottom: 0px;
    right: 4px;
    height: 150px;
  }
}
</style>
