<script lang="ts">
    let { media_list } = $props();
</script>

<div class="media_entry">
    {#each media_list as entry (entry.id)}
        <p>Id: {entry.id} | Title: {entry.title} | Type: {entry.type}</p>
    {/each}
</div>


