<script lang="ts">
    import type { MediaItem } from '$lib/types';

    let { onAdd } = $props<{
        onAdd: (item: MediaItem) => void;
    }>();

    let form = $state({
        title: '',
        type: '' 
    });

    // function toMediaItem(): MediaItem {
    //     return {
    //         id: Date.now(),
    //         title: form.title,
    //         type: form.type
    //     };
    // }

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
    <input id='type' type='text' bind:value={form.type}>

    <button onclick={add_item}>Add log</button>
</div>

<pre>{JSON.stringify(form, null, 2)}</pre>


<style>

</style>