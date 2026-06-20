<script lang="ts">
    import type { MediaItem } from '$lib/types';
    import { MEDIA_TYPES } from '$lib/types';

    let { onAdd } = $props<{
        onAdd: (item: MediaItem) => void;
    }>();

    let form = $state({
        title: '',
        type: '' 
    });

    function add_item() {
        if(form.title && form.type) {
            onAdd({
                title: form.title,
                type: form.type
            });

            form.title = '';
            form.type = '';
        }
    }

</script>


<div class="form">
    <label for=title>Media title:</label>
    <input id='title' type='text' bind:value={form.title}>

    <label for=type>Media type:</label>
    <select bind:value={form.type}>
        {#each MEDIA_TYPES as type (type)}
            <option value={type}>{type}</option>
        {/each}
    </select>

    <button onclick={add_item}>Add log</button>
</div>


<style>
</style>