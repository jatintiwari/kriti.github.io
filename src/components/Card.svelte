<script>
  export let heading, subHeading;
</script>

<style>
  .card-container {
    max-width: 300px;
    margin: 0 8px 8px 0;
    width: 100%;
    height: 200px;
    border-radius: 13px;
    background-color: #151841;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    color: white;
    padding: 0 32px 16px;
  }

  .card-container:nth-child(4n), .card-container:first-child{
    margin-left: 10px;
  }

  .heading {
    font-size: var(--xl);
    padding-bottom: 8px;
  }
</style>

<div class="card-container box-shadow">
  <div class="heading bold">{heading}</div>
  <div class="subHeading">{subHeading}</div>
</div>
