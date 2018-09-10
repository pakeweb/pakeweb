<template>
  <div class="sharing-container">
    <div class="sharing-caption">
      Beritahu mereka <span class="mobile-hide">tentang kami</span>
    </div>
    <social-sharing
      url="https://vuejs.org/"
      title="The Progressive JavaScript Framework"
      description="Intuitive, Fast and Composable MVVM for building interactive interfaces."
      quote="Vue is a progressive framework for building user interfaces."
      hashtags="vuejs,javascript,framework"
      twitter-user="vuejs"
      network-tag="div"
      inline-template
    >
      <div
        class="sharing"
      >
        <network network="twitter">
          <v-icon name="brands/twitter" />
          <span class="network-title">Twitter</span>
        </network>
        <network network="facebook">
          <v-icon name="brands/facebook" />
          <span class="network-title">Facebook</span>
        </network>
        <network network="googleplus">
          <v-icon name="brands/google-plus-g" />
          <span class="network-title">Google+</span>
        </network>
        <network network="linkedin">
          <v-icon name="brands/linkedin" />
          <span class="network-title">LinkedIn</span>
        </network>
        <network network="pinterest">
          <v-icon name="brands/pinterest" />
          <span class="network-title">Pinterest</span>
        </network>
        <network network="email">
          <v-icon name="envelope" />
          <span class="network-title">Email</span>
        </network>
        <network network="sms">
          <v-icon name="comment" />
          <span class="network-title">SMS</span>
        </network>
        <network network="whatsapp">
          <v-icon name="brands/whatsapp" />
          <span class="network-title">Whatsapp</span>
        </network>
        <network network="telegram">
          <v-icon name="brands/telegram" />
          <span class="network-title">Telegram</span>
        </network>
        <network network="line">
          <v-icon name="brands/line" />
          <span class="network-title">Line</span>
        </network>
      </div>
    </social-sharing>
  </div>
</template>

<script>
import '@pkg/vue-awesome/icons/brands/facebook'
import '@pkg/vue-awesome/icons/brands/google-plus-g'
import '@pkg/vue-awesome/icons/brands/line'
import '@pkg/vue-awesome/icons/brands/linkedin'
import '@pkg/vue-awesome/icons/brands/pinterest'
import '@pkg/vue-awesome/icons/brands/telegram'
import '@pkg/vue-awesome/icons/brands/twitter'
import '@pkg/vue-awesome/icons/brands/whatsapp'
import '@pkg/vue-awesome/icons/envelope'
import '@pkg/vue-awesome/icons/comment'

import Network from '@pkg/vue-social-sharing/src/social-sharing-network'
import SocialSharing from '@pkg/vue-social-sharing/src/social-sharing'

export default {
  components: {
    SocialSharing,
    Network,
  },
}
</script>

<style>
.sharing-caption {
  padding: 0.5rem 0;
  font-weight: bold;
}
.sharing-container {
  margin-top: 2.5rem;
  font-size: 90%;
}
.sharing {
  border-top: 1px solid #eaecef;
  padding-top: 1.2rem;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: stretch;
}
.sharing > div {
  flex-grow: 1;
  flex-basis: 20%;
  cursor: pointer;
  padding-bottom: 0.6rem;
}
@media (max-width: 860px) {
  .sharing > div {
    flex-basis: 33%;
  }
}
@media (max-width: 419px) {
  .sharing > div {
    flex-basis: 50%;
  }
}
</style>
