<template>
  <div>
    <div class="myi-5">
      <h6 class="title-steps">
        <span class="ts-icon">
          <b-icon icon="bullseye" font-scale="1.2"></b-icon>
        </span>
        {{ this.steps[3].step_title }}
      </h6>

      <div class="offers-content">
        <div class="option-selection os-selected" v-for="index in 3" :key="index">
          <div class="first-line">
            <div class="cc-titre">
              <span>{{ steps[index - 1].step_name }}</span>
            </div>
            <div class="check-circle">
              <span class="cc-rond">
                <b-icon icon="check" font-scale="1"></b-icon>
              </span>
            </div>
          </div>
          <div class="cc-description">
            {{ steps[index - 1].value }}
          </div>
        </div>
        <div class="option-selection os-selected">
          <div class="first-line">
            <div class="cc-titre">
              <span>{{ isOnline }}</span>
            </div>
            <div
              :class="{
                'x-circle': !isConnected,
                'check-circle': isConnected
              }"
            >
              <span class="cc-rond">
                <b-icon v-if="isConnected" icon="check" font-scale="1"></b-icon>
                <b-icon v-else icon="x-circle" scale="1"></b-icon>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="book-bloc">
        <button class="book-btn" @click="setReservation()">
          {{ this.report_labels.call_to_action }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'ChooseOffer',
  props: {},
  data() {
    return {
      call_to_action: 'Book Now',
      value: null,
      step_title: 'Bilan de la commande'
    }
  },
  computed: {
    ...mapState(['steps', 'show_login_form', 'user', 'report_labels']),
    isConnected() {
      if (this.user) {
        return true
      } else {
        return false
      }
    },
    isOnline() {
      return this.user
        ? this.report_labels.user_state.online
        : this.report_labels.user_state.offline
    }
  },
  methods: {
    setReservation() {
      this.$emit('setReservation')
    }
  }
}
</script>

<style lang="scss">
$first-color: rgb(88 148 66);
$second-color: rgb(200, 66, 88);
$gray-color: #f8f9fa;

.offers-content {
  text-align: left;

  .option-selection {
    padding: 10px;
    margin: 1rem auto;
    margin-bottom: 25px;
    background-color: rgb(255, 255, 255);
    display: block;
    width: 75%;
    min-width: 14rem;
    text-align: left;
    // line-height: 1.5;
    border: 2px solid $gray-color;
    border-radius: 2px;
    border-radius: 0.25rem;
    box-shadow: 0px 3px 6px rgba(#000, 0.2);
    transition:
      width 250ms linear 0s,
      box-shadow ease 0.3s;

    .cc-titre {
      // font-size: 14px;
      font-weight: bold;
      margin-bottom: 10px;
      padding-right: 30px;

      .reduction {
        padding: 3px;
        background: black;
        color: white;
        margin-right: 6px;
      }
    }

    .cc-description {
      color: rgba(#000000, 0.6);
    }

    .check-circle,
    .x-circle {
      position: absolute;
      right: 15px;
      top: 0;

      .cc-rond {
        border-radius: 50px;
        border: 1px solid $gray-color;
        transition: ease 0.3s;
        // font-size: 24px;
        width: 25px;
        display: inline-flex;
        height: 25px;
        align-items: center;
        justify-content: center;
      }
    }
    .x-circle {
      .cc-rond {
        border-color: $second-color;
        background: $second-color;
        color: white;
      }
    }
    .check-circle {
      .cc-rond {
        background: transparent;
        color: white;
      }
    }

    .first-line {
      position: relative;
    }

    &:hover {
      box-shadow: 0px 3px 10px rgba(#000, 0.2);
      width: 76%;

      .check-circle {
        .cc-rond {
          background-color: rgba(#000000, 0.2);
        }
      }
    }
  }

  .os-selected {
    .x-circle {
      .cc-round {
        background-color: $second-color;
        border-color: $second-color;
      }
    }
    .check-circle {
      .cc-rond {
        background-color: $first-color;
        border-color: $first-color;
      }
    }

    &:hover {
      .check-circle {
        .cc-rond {
          background-color: $first-color;
          border-color: $first-color;
        }
      }
      .x-circle {
        .cc-round {
          background-color: $second-color;
          border-color: $second-color;
        }
      }
    }
  }
}

.book-bloc {
  width: 100%;
  margin-top: 5rem;

  .book-btn {
    display: block;
    width: 100%;
    padding: 10px 10px;
    background: lighten($first-color, 10);
    color: white;
    text-transform: uppercase;
    border: none;
    border-radius: 5px;
    transition: ease 0.4s;

    &:hover {
      background: $first-color;
    }
  }
}
</style>
