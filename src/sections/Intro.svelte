<script>
  import Image from "../components/Image.svelte";
  import About from "./About.svelte";

  export let isMobile;
</script>

<style>
  .intro-container {
    display: flex;
  }
  .intro-container.mobile {
    flex-wrap: wrap;
    justify-content: center;
  }
  .intro-image {
    padding: 16px 16px 0;
    text-align: center;
  }
  .name {
    margin-top: 0;
  }
</style>

<div class="intro-container container-fluid {isMobile ? 'mobile' : ''}">
  <div class="intro-image">
    <Image src={'src/images/intro.png'} />
    <h3 class="name">Kriti</h3>
  </div>
  <div class="intro-text">
    <p>
      I am a post graduate in Economics and currently pursuing B.Ed from
      Chitkara College of Education, Chitkara University.
    </p>
    <p>
      I am a highly organised and a patient person who believes in finding
      solutions to problems in hand.
    </p>
    <p>
      I am currently working part time with an NGO, Anugrah Siksha Kendra- A
      center for Dyslexic Students which has increased my love for teaching even
      more.
    </p>
    <p>
      I am a creative person who is always up for new activities. I love
      exploring new things and places.
    </p>
    <p>
      I am very dedicated and self motivated in addition to
      this I strive to perfect every task I take up.
    </p>
    <p>
      I have imbibed my disciplined behavior from my mother's lifestyle and it
      is now a part of who I am.
    </p>
    <About />
  </div>
</div>
