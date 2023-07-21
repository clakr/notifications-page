<script lang="ts" setup>
import { Notification } from "@/types";

defineProps<{ notification: Notification }>();
</script>

<template>
  <article class="p-1.6 bg-snow br-.8 grid grid-cols-[3.9rem_1fr]">
    <img :src="notification.user.avatar" alt="Mark Webber Avatar" />
    <div>
      <b>{{ notification.user.name }}</b>
      <template v-if="notification.type === 'react'">
        <p>reacted to your recent post</p>
        <strong>{{ notification.post }}</strong>
      </template>
      <span
        v-if="!notification.read"
        class="block w-.8 h-.8 bg-red rounded-full"
      />
    </div>
    <span>{{ notification.dated }}</span>
  </article>
</template>
