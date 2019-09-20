<template>
<div class="BearControls">
  <slot />
</div>
</template>

<style lang="scss" scoped>
$black: rgba(#2c3e50, 0.7);

.BearControls {
  margin-top: 2rem;
  padding: 4rem;
  display: flex;
  justify-content: flex-end;

  .button {
    cursor: pointer;
    background: none;
    border: 1px solid $black;
    border-radius: 2rem;
    padding: 0.5rem 1.5rem;
    font-family: 'Overpass', sans-serif;
    font-size: 1.3rem;
    color: $black;

    &:active {
      position: relative;
      top: 0.2rem;
      left: 0.1rem;
    }

    &:focus { outline: none; }

    + .button {
      margin-left: 1rem;
    }
  }
}
</style>