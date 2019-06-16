<template>
  <div class="portfolio">
    <div class="showcase">
      <h3>welcome to my</h3>
      <h1>Portfolio</h1>
    </div>
    <div class="banner">
      <div class="card"></div>
      <div class="card-text">
        <h3>this is the csrd</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, eaque magnam optio alias eius consequuntur commodi nobis nihil. Necessitatibus facere id aspernatur sapiente aut tenetur iusto quo totam nulla temporibus et aliquam veniam deleniti placeat quasi accusamus iure iste, officiis dicta cupiditate molestiae corrupti ex vel tempora. Praesentium, quia explicabo?</p>
      </div>
      <div class="card"></div>
    </div>

    <div class="about-me">
      <div alt class="about-img"></div>
      <h1 class="about-title">Mohammad Portfolio</h1>
      <div class="about-text">
        <h2 class="about-subtitle">Front End Developer</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus quisquam tempore doloremque dicta porro natus amet ab reiciendis accusantium architecto suscipit aut, repellat quasi obcaecati. Ratione quas porro qui ab?</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam nihil, numquam laudantium ipsam totam quae labore tempore. Quidem excepturi atque eius. Architecto, optio. Facere expedita accusamus officiis corporis delectus officia. Ullam, nisi eaque tempora ab iste totam dolore? Laboriosam, facilis.</p>
      </div>
    </div>
    <section class="portfolio-main">
      <h1>My Work</h1>
      <div class="portfolio-items">
        <figure class="portfolio-item">
          <img src="../assets/asset_mobile_tablet_UI_2.png" alt="img1">
          <figcaption>
            <h2 class="portfolio-title">Project Name</h2>
            <p class="portfolio-desc">A short description about the project</p>
            <a href="#" class="portfolio-link">More info</a>
          </figcaption>
        </figure>
        <figure class="portfolio-item featured">
          <img src="../assets/asset_TV_UI.png" alt="img1">
          <figcaption>
            <h2 class="portfolio-title">Project Name</h2>
            <p class="portfolio-desc">A short description about the project</p>
            <a href="#" class="portfolio-link">More info</a>
          </figcaption>
        </figure>
        <figure class="portfolio-item">
          <img src="../assets/asset_website_UI.png" alt="img1">
          <figcaption>
            <h2 class="portfolio-title">Project Name</h2>
            <p class="portfolio-desc">A short description about the project</p>
            <a href="#" class="portfolio-link">More info</a>
          </figcaption>
        </figure>
      </div>
    </section>
    <section class="contact">
      <h1>Contact Me</h1>
      <form action>
        <label class="name">
          Name:
          <input type="text" id="name">
        </label>
        <label for class="email">
          Email:
          <input id="email">
        </label>
        <label message="message" class="message">
          Message:
          <textarea name id="message" cols="30" rows="10"></textarea>
        </label>
        <input type="button" class="button" value="SEND">
      </form>
    </section>
    <footer>
      <p>Follow me n sicial media</p>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
