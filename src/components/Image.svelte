<script>
  export let src = "https://via.placeholder.com/150/150",
    height = 150,
    width = 150;
</script>

<style>
  .image-container {
    padding-bottom: 16px;
  }
  img {
    border-radius: 50%;
    width: 100%;
  }
</style>

<div style="height: {height}px; width:{width}px" class="image-container">
  <img {src} alt="" />
</div>
