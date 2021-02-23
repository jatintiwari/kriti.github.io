<script>
  export let heading,
    subHeading,
    containerClass = "";
</script>

<div class={containerClass}>
  <div class="container-heading bold">{heading}</div>
  {#if subHeading}
    <div class="center text-grey container-subheading thin xxl-h-padding">
      {@html subHeading}
    </div>
  {/if}
</div>
