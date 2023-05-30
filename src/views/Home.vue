<template>
  <span> Cosa c'e qui? </span>
  <v-btn @click="loader.load(true)">Carica</v-btn>
  <v-row align="center" justify="center">
    <v-main>
      <!-- Deve trovarsi dentro ad un v-main -->
      <v-row justify="center">
        <v-btn color="success" class="mt-12" @click="loader.load(true)">
          Show Overlay
        </v-btn>

        <v-overlay
          v-model="loader.loading"
          contained
          class="align-center justify-center"
        >
          <v-btn color="success" @click="loader.load(false)">
            Hide Overlay
          </v-btn>
        </v-overlay>
      </v-row>
    </v-main>
  </v-row>
</template>

<script lang="ts" setup>
import { useLoaderStore } from "@/store/loaderStore";

const loader = useLoaderStore();
</script>
