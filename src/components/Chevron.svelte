<script>
  export let fill = "#b7b7b7",
    direction = "",
    height = 24,
    width = 24,
    open = false;
</script>

<style>
  .chevron {
    display: inline-flex;
  }
  svg {
    fill: var(--border-grey);
    transition: transform 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  .open svg {
    transform: rotate(180deg);
    fill: white;
  }

  .left {
    transform: rotate(90deg);
  }
  .right {
    transform: rotate(-90deg);
  }
</style>

<div class="chevron {direction}" class:open style="height:{height}px;">
  <svg xmlns="http://www.w3.org/2000/svg" {height} viewBox="0 0 24 24" {width}>
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" {fill} />
  </svg>
</div>
