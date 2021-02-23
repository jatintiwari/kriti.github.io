<script>
  import { onMount } from "svelte";
  import Chevron from "./../components/Chevron.svelte";

  export let isMobile;

  let showCompanyDropDownHover = false;

  const handleNavigation = event => {
    const target = event.target;
    const id = target.dataset.id;
    const element = document.getElementById(id);
    console.log({ element });
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
</script>

<style>
  .header-container {
    padding-top: 16px;
    padding-bottom: 16px;
    box-shadow: 1px 3px 5px #ccc;
    margin-bottom: 16px;
    background: white;
    position: sticky;
    top: 0px;
  }
  .header-container.mobile {
    padding-top: 8px;
    padding-bottom: 8px;
  }
  .header {
    display: flex;
    justify-content: space-between;
  }
  .header-container.mobile .header {
    justify-content: center;
  }
  .links {
    padding: 8px 16px;
    font-size: 14px;
    margin-right: 16px;
    transition: all 0.3s linear;
    border: 0;
    letter-spacing: 0.5px;
    color: black;
    text-decoration: none;
    border-bottom: 2px solid transparent;
    background-color: transparent;
  }

  .dropdown-container:hover .links,
  .links:hover {
    border-bottom-color: var(--secondry);
  }

  .dropdown-container,
  .buttons-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .button {
    background-color: var(--secondry);
    color: white;
    border: 1px solid var(--secondry);
    padding: 8px 16px;
    border-radius: 23.5px;
  }
</style>

<div class="header-container container-fluid {isMobile ? 'mobile' : ''}">
  <div class="header">
    <div class="buttons-container" on:click={handleNavigation}>
      <button class="links" data-id="expertise">Intro</button>
      <button class="links" data-id="certificates">Certificates</button>
      <a target="_blank" href="./src/images/resume.pdf" class="links">Resume</a>
    </div>
  </div>
</div>
