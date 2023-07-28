<template>
  <!-- <slot></slot> will be replaced by the "markup" inside the <template></template> of the -->
  <!-- ...component that is rendering the component with the slot -->
  <!-- anything between the 2 slot-tags will be rendered as default in case no "markup" is present in the other component -->
  <form>
    <div class="help">
      <slot name="help">No form to render</slot>
    </div>
    <div class="fields">
      <slot name="fields">No form to render</slot>
    </div>
    <div class="buttons">
      <slot name="buttons">No form to render</slot>
    </div>
    <slot></slot>
    <!-- <slot>No form to render</slot> -->
  </form>
</template>
