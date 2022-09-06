<template>
  <div>
    <uk-container>
      <uk-alert type="danger" title="Error">Some error with program</uk-alert>
      <uk-alert type="warning" title="Opps">Something strange happend</uk-alert>
      <uk-alert type="success" title="Ok">Saved</uk-alert>
      <div class="uk-margin-bottom">
        <uk-btn @click="modal1 = !modal1" type="default" size="small">
          No title
        </uk-btn>
        <uk-btn @click="modal2 = !modal2" type="primary" pill rounded>
          title + close outside
        </uk-btn>
        <uk-btn @click="modal3 = !modal3" type="danger" size="large" rounded>
          Header and footer
        </uk-btn>
        <uk-btn @click="modal4 = !modal4" type="secondary" size="small" pill>
          Center
        </uk-btn>
      </div>
      <div class="uk-margin-bottom">
        <uk-modal v-model="modal1">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </uk-modal>
        <uk-modal v-model="modal2" close-outside title="Header">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </uk-modal>
        <uk-modal
          v-model="modal3"
          title="Header"
          extended
          footer
          :esc-close="false"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
          <template #footer>
            <div class="uk-text-center">footer</div>
          </template>
        </uk-modal>
        <uk-modal v-model="modal4" title="Header" center :bg-close="false">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </uk-modal>
      </div>
      <div class="uk-margin-bottom">
        <uk-section bg-color="primary">
          <uk-container xsmall>Hello</uk-container>
        </uk-section>
      </div>
      <div class="uk-margin-bottom">
        <uk-btn type="danger" to="/test"> Btn </uk-btn>
      </div>
      <uk-article title="Article">
        <uk-article type="lead"> Lorem ipsum dolor sit. </uk-article>
        <uk-article type="meta"> Lorem ipsum dolor sit 1. </uk-article>
        Lorem ipsum dolor sit amet.
      </uk-article>
      <div class="uk-margin-bottom">
        <uk-badge :count="10" />
      </div>
      <div class="uk-margin-bottom">
        <uk-column
          class="uk-padding"
          col-s="3"
          col-m="4"
          col-l="5"
          col-xl="6"
          divider
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            at culpa, deserunt dignissimos eos error ex exercitationem fuga
            impedit inventore magni minus necessitatibus nesciunt possimus
            reiciendis rem totam ullam ut.
          </p>
          <uk-column-span>
            All we have to decide is what to do with the time that is given us.
          </uk-column-span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            at culpa, deserunt dignissimos eos error ex exercitationem fuga
            impedit inventore magni minus necessitatibus nesciunt possimus
            reiciendis rem totam ullam ut.
          </p>
        </uk-column>
      </div>
      <div class="uk-margin-bottom">
        <hr class="uk-divider-icon" />
      </div>

      <div class="uk-margin-bottom">
        <uk-grid small row="large" column="small" child="1-5" divider>
          <uk-width>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum,
            officiis.
          </uk-width>
          <div>fdfdf</div>
          <div>dfdfdf</div>
          <div>aasd</div>
          <div>aasd</div>
          <div>11111</div>
        </uk-grid>
      </div>
    </uk-container>
  </div>
</template>

<script setup lang="ts">
import ukContainer from "./components/Container";
import ukAlert from "./components/Alert";
import ukModal from "./components/Modal";
import ukSection from "./components/Section";
import ukBtn from "./components/Btn";
import ukArticle from "./components/Article";
import ukBadge from "./components/Badge";
import ukColumn from "./components/Column";
import ukColumnSpan from "./components/ColumnSpan";
import ukGrid from "./components/Grid";
import ukWidth from "./components/Width";
import { ref } from "vue";

const modal1 = ref(false);
const modal2 = ref(false);
const modal3 = ref(false);
const modal4 = ref(false);
</script>

<style>
@import "uikit/dist/css/uikit.css";
</style>
