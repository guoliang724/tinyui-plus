<template>
  <div>
    <!-- test button component -->
    <div class="row">
      <tiny-button>Regular</tiny-button>
      <tiny-button type="primary">Primary</tiny-button>
      <tiny-button type="success">Success</tiny-button>
      <tiny-button type="info">Info</tiny-button>
      <tiny-button type="warning">Warning</tiny-button>
      <tiny-button type="danger">Danger</tiny-button>
    </div>
    <!--  test plain button -->
    <div class="row">
      <tiny-button plain>Plain</tiny-button>
      <tiny-button type="primary" plain>Primary</tiny-button>
      <tiny-button type="success" plain>Success</tiny-button>
      <tiny-button type="info" plain>Info</tiny-button>
      <tiny-button type="warning" plain>Warning</tiny-button>
      <tiny-button type="danger" plain>Danger</tiny-button>
    </div>

    <!-- test round -->
    <div class="row">
      <tiny-button round>Round</tiny-button>
      <tiny-button round type="primary">Primary</tiny-button>
      <tiny-button round type="success">Success</tiny-button>
      <tiny-button plain round type="info">Info</tiny-button>
      <tiny-button plain round type="danger">Danger</tiny-button>
      <tiny-button plain round type="warning">Warning</tiny-button>
    </div>
    <!-- test disabled -->
    <div class="row">
      <tiny-button disabled>Disabled</tiny-button>
      <tiny-button disabled type="primary">Primary</tiny-button>
      <tiny-button disabled type="success">Success</tiny-button>
      <tiny-button disabled round type="info">Info</tiny-button>
      <tiny-button disabled round type="danger">Danger</tiny-button>
      <tiny-button disabled round type="warning">Warning</tiny-button>
    </div>
    <!-- test circle -->
    <div class="row">
      <tiny-button round circle>A</tiny-button>
      <tiny-button round circle type="primary">B</tiny-button>
      <tiny-button round circle type="success">C</tiny-button>
      <tiny-button plain round circle type="info">D</tiny-button>
      <tiny-button plain round circle type="danger">E</tiny-button>
      <tiny-button plain round circle type="warning">F</tiny-button>
    </div>
    <!-- test icon -->
    <div class="row">
      <tiny-button icon="milk-tea"></tiny-button>
      <tiny-button type="primary" icon="camera">Photograph</tiny-button>
      <tiny-button type="success" icon="wind-power" circle></tiny-button>
      <tiny-button type="info" icon="orange"></tiny-button>
      <tiny-button type="danger" icon="goblet"></tiny-button>
      <tiny-button type="warning" icon="cloudy"></tiny-button>
      <tiny-button type="info" plain icon="milk-tea">bubble Tea</tiny-button>
    </div>
    <!-- test click event -->
    <div class="row">
      <tiny-button type="primary" plain @click="handleClick('leon', $event)">click</tiny-button>
    </div>
  </div>
</template>

<script setup lang="ts">
function handleClick(name: string, event: MouseEvent) {
  alert(`button clicked by ${name}`)
  console.log(`button clicked by ${name}`, event)
}
</script>

<style scoped lang="scss">
.row {
  margin-bottom: 20px;
  width: 800px;
  display: flex;
  justify-content: space-evenly;
  margin: 20px auto;
}
</style>
