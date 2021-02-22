<script>
  export let isMobile;

  import Header from "./sections/Header.svelte";
  import Intro from "./sections/Intro.svelte";
  import Certificates from "./sections/Certificates.svelte";
</script>

<style>

</style>

<Header {isMobile} />
<Intro {isMobile} />
<Certificates />
