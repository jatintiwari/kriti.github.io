<script>
  import SectionHeading from "./../components/SectionHeading.svelte";
  import Image from "./../components/Image.svelte";

  export let image, name, intro, text;
</script>

<style>
  .testimonial-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px auto;
  }

  .testimonial {
    padding: 32px;
    display: flex;
    overflow: hidden;
    margin: 16px 0;
    width: 750px;
  }

  .left-container {
    width: 30%;
  }
  .right-container {
    width: 70%;
    padding: 0 16px;
  }
  .description {
    padding: 8px 0 0 16px;
    line-height: 24px;
  }
  .sub-text {
    line-height: 18px;
  }
  .quote {
    font-size: 48px;
    height: 38px;
    color: var(--secondry);
  }

  .text {
    line-height: 20px;
    font-size: var(--md1);
  }
</style>

<div class="testimonial-container glide__slide">
  <div class="testimonial box-shadow">
    <div class="left-container">
      <Image src={image} />
      <div class="description">
        <div class="writer-name bold">{name}</div>
        <div class="sub-text text-grey small">
          {@html intro}
        </div>
      </div>
    </div>
    <div class="right-container">
      <div class="quote">"</div>
      <div class="text thin">{text}</div>
    </div>
  </div>
</div>
