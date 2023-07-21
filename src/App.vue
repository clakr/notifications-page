<script setup lang="ts">
import { inject, onBeforeMount } from "vue";
import NotificationItem from "@/components/NotificationItem.vue";
import { Notification } from "@/types";

const addSRHeading = inject("addSRHeading") as () => void;
const changeKeyboardBtnBackgroundColor = inject(
  "changeKeyboardBtnBackgroundColor"
) as () => void;

const notifications: Notification[] = [
  {
    user: {
      name: "Mark Webber",
      avatar: "/avatar-mark-webber.webp",
    },
    dated: "1m ago",
    read: false,
    type: "react",
    post: "My first tournament today!",
  },
  {
    user: {
      name: "Angela Gray",
      avatar: "/avatar-angela-gray.webp",
    },
    dated: "5m ago",
    read: false,
    type: "follow",
  },
  {
    user: {
      name: "Jacob Thompson",
      avatar: "/avatar-jacob-thompson.webp",
    },
    dated: "1 day ago",
    read: false,
    type: "join",
    group: "Chess Club",
  },
  {
    user: {
      name: "Rizky Hasanuddin",
      avatar: "/avatar-rizky-hasanuddin.webp",
    },
    dated: "5 days ago",
    read: true,
    type: "send",
    message:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
  },
  {
    user: {
      name: "Kimberly Smith",
      avatar: "avatar-kimberly-smith.webp",
    },
    dated: "1 week ago",
    read: true,
    type: "comment",
    image: "/image-chess.webp",
  },
  {
    user: {
      name: "Nathan Peterson",
      avatar: "/avatar-nathan-peterson.webp",
    },
    dated: "2 weeks ago",
    read: true,
    type: "react",
    post: "5 end-game strategies to increase your win rate",
  },
  {
    user: {
      name: "Anna Kim",
      avatar: "/avatar-anna-kim.webp",
    },
    dated: "2 weeks ago",
    read: true,
    type: "left",
    group: "Chess Club",
  },
];

onBeforeMount(() => {
  addSRHeading();
  changeKeyboardBtnBackgroundColor();
});
</script>

<template>
  <section class="p-2.4/1.6">
    <div class="flex items-center gap-x-.9">
      <h2 class="c-very-dark-grey-blue fs-2 fw-800">Notifications</h2>
      <span class="c-white fs-1.6 fw-800 bg-blue p-.2/1.1 br-.6">3</span>
      <button class="ml-auto c-dark-grey-blue fs-1.4 fw-500">
        Mark all as read
      </button>
    </div>
    <div class="flex flex-col gap-y-1 mt-2.4">
      <NotificationItem
        v-for="(notification, index) in notifications"
        :key="index"
        :notification="notification"
      />
    </div>
  </section>
</template>

<style scoped></style>
