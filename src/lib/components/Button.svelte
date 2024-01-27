<button
  {...$$props}
  on:click
  class="button"
  class:!bg-accent={$$props.active}
  class:border-none={$$props.active}
>
  <slot />
</button>
