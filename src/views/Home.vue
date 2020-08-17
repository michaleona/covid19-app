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
            <span class="covid-banner-title">Kasus Terkonfirmasi</span>
            <span class="covid-banner-time">{{ lastTimeUpdated }}</span>
            <span class="covid-banner-case">{{ confirmedCases | thousandSeparator }}</span>
            <span class="covid-banner-addition">
              <i class="el-icon-top"></i> +{{ updatedConfirmed | thousandSeparator }} kasus
            </span>
          </div>
        </el-col>
      </el-row>
      <el-row class="covid-content-container">
        <el-col>
          <div class="covid-card">
            <div class="covid-card-container">
              <div class="covid-card-cases">
                <span class="title">Sembuh</span>
                <span class="total">{{ recoveredCases | thousandSeparator }}</span>
                <span class="addition">
                  <i class="el-icon-top success"></i>
                  +{{ updatedRecovered | thousandSeparator }} kasus
                </span>
              </div>
              <div class="covid-card-cases">
                <span class="title">Meninggal</span>
                <span class="total">{{ deathCases | thousandSeparator }}</span>
                <span class="addition">
                  <i class="el-icon-top danger"></i> +{{ updatedDeath | thousandSeparator }} kasus
                </span>
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
        <el-col>
          <h4 class="section-title">Kasus Berdasarkan Provinsi</h4>
          <div class="covid-card updated-cases">
            <div class="cases-list" v-for="data in dataByProvince" :key="data.fid">
              <h5>{{ data.provinsi }}</h5>
              <div class="cases-number">
                <div>
                  <span class="number warning">{{ data.kasusPosi | thousandSeparator }}</span>
                  <span class="title">Positif</span>
                </div>
                <div>
                  <span  class="number success">{{ data.kasusSemb | thousandSeparator }}</span>
                  <span class="title">Sembuh</span>
                </div>
                <div>
                  <span class="number danger">{{ data.kasusMeni | thousandSeparator }}</span>
                  <span class="title">Meninggal</span>
                </div>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      dataByProvince: [],
      confirmedCases: 0,
      recoveredCases: 0,
      deathCases: 0,
      lastTimeUpdated: null,
      updatedConfirmed: 0,
      updatedRecovered: 0,
      updatedDeath: 0,
    };
  },
  filters: {
    thousandSeparator(data) {
      return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
  },
  methods: {
    timeConverter(unixTimestamp) {
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };

      const t = new Date(unixTimestamp).toLocaleDateString('id-ID', options);
      const s = `${new Date(unixTimestamp).getHours()}:${new Date(unixTimestamp).getMinutes()}`;
      return `${t} ${s}`;
    },
    getCases() {
      axios
        .get('https://covid19.mathdro.id/api/countries/indonesia/confirmed')
        .then((response) => {
          this.confirmedCases = response.data[0].confirmed;
          this.recoveredCases = response.data[0].recovered;
          this.deathCases = response.data[0].deaths;
          this.lastTimeUpdated = this.timeConverter(response.data[0].lastUpdate);
        });
    },
    getUpdatedCases() {
      axios
        .get('https://cors-anywhere.herokuapp.com/https://data.covid19.go.id/public/api/update.json')
        .then((response) => {
          this.updatedConfirmed = response.data.update.penambahan.jumlah_positif;
          this.updatedRecovered = response.data.update.penambahan.jumlah_sembuh;
          this.updatedDeath = response.data.update.penambahan.jumlah_meninggal;
        });
    },
    getCasesByProvince() {
      axios
        .get('https://indonesia-covid-19.mathdro.id/api/provinsi/')
        .then((response) => {
          this.dataByProvince = response.data.data;
        });
    },
  },
  mounted() {
    this.getCases();
    this.getUpdatedCases();
    this.getCasesByProvince();
  },
};
</script>

<style lang="scss" scoped>
.success {
  color: #35a556;
}

.danger {
  color: #fa514f;
}

.warning {
  color: #f39c12;
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
    &.updated-cases {
      height: 100%;
      padding-bottom: 32px;
    }
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

  .cases-list {
    h5 {
      font-weight: 600;
      font-size: 14px;
      line-height: 16px;
      margin-bottom: 8px;

      border-bottom: 0.5px solid #ecf0f1;
      padding-bottom: 8px;
    }
    .cases-number {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        .number {
          font-size: 16px;
          font-weight: bold;
        }
        .title {
          font-size: 12px;
        }
      }
    }
  }
  .section-title {
      margin: 0px;
      margin-bottom: 16px;
    }
}
</style>
