<template>
  <div class="d-flex align-items-center justify-content-between">
    <span>{{ tooltip.label }}</span>
    <b-button
      variant="link"
      size="sm"
      class="p-0 pr-1"
      v-b-tooltip.hover
      :title="tooltip.message"
    >
      <v-icon name="info" class="icon-alignment-center" />
    </b-button>
  </div>
</template>

<script src="./tooltipLabel.js"></script>