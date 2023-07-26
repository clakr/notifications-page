<script lang="ts" setup>
import { Notification } from "@/types";

defineProps<{ notification: Notification }>();
</script>

<template>
  <article
    :class="[
      'p-1.6 br-.8 grid gap-.3/1.3 fs-1.4 laptop:(p-1.8/2 gap-.4/1.9 fs-1.6)',
      notification.read ? 'bg-white' : 'bg-snow',
      notification.type === 'comment'
        ? 'grid-cols-[3.9rem_1fr_3.9rem]'
        : 'grid-cols-[3.9rem_1fr]',
    ]"
  >
    <img
      class="row-span-2"
      :src="notification.user.avatar"
      alt="Mark Webber Avatar"
    />
    <div class="space-x-.6">
      <b
        class="c-very-dark-grey-blue fw-800 cursor-pointer [&:active,&:hover,&:focus]:c-blue"
      >
        {{ notification.user.name }}
      </b>

      <!-- reacted -->
      <template v-if="notification.type === 'react'">
        <span class="break-words c-dark-grey-blue fw-500">
          reacted to your recent post
        </span>
        <strong
          class="c-dark-grey-blue fw-700 cursor-pointer [&:active,&:hover,&:focus]:c-blue"
        >
          {{ notification.post }}
        </strong>
      </template>

      <!-- followed -->
      <span
        v-if="notification.type === 'follow'"
        class="break-words c-dark-grey-blue fw-500"
      >
        followed you
      </span>

      <!-- joined -->
      <template v-if="notification.type === 'join'">
        <span class="break-words c-dark-grey-blue fw-500">
          has joined your group
        </span>
        <strong class="c-blue fw-700 cursor-pointer">
          {{ notification.group }}
        </strong>
      </template>

      <!-- sent -->
      <span
        v-if="notification.type === 'send'"
        class="break-words c-dark-grey-blue fw-500"
      >
        sent you a private message
      </span>

      <!-- commented -->
      <span
        v-if="notification.type === 'comment'"
        class="break-words c-dark-grey-blue fw-500"
      >
        commented on your picture
      </span>

      <!-- left -->
      <template v-if="notification.type === 'left'">
        <span class="break-words c-dark-grey-blue fw-500">
          left the group
        </span>
        <strong class="c-blue fw-700">
          {{ notification.group }}
        </strong>
      </template>

      <span
        v-if="!notification.read"
        class="w-.8 h-.8 bg-red rounded-full inline-block"
      />
    </div>
    <span
      :class="[
        'c-grey-blue fw-500',
        notification.type === 'comment' ? 'order-1' : '',
      ]"
    >
      {{ notification.dated }}
    </span>

    <div
      v-if="notification.type === 'send'"
      class="c-dark-grey-blue fw-500 p-1.6 border border-very-light-grey-blue br-.5 col-start-2 mt-.9 cursor-pointer [&:active,&:hover,&:focus]:bg-light-grey-blue"
    >
      {{ notification.message }}
    </div>

    <img
      v-if="notification.type === 'comment'"
      class="col-start-3 row-span-2 cursor-pointer"
      :src="notification.image"
      alt=""
    />
  </article>
</template>
