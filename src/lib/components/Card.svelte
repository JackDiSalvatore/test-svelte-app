<section>
  <slot name="title" />
  <slot name="description" />

  <footer>
    <slot />
  </footer>
</section>

<style>
  section {
    width: var(--card-width);
    margin: var(--card-margin);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 2px solid grey;
    border-radius: 0.375rem;
    background-color: var(--card-background-color);
    color: var(--card-color);
  }
</style>
