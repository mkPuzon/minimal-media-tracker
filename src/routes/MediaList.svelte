<script lang="ts">
    import { MEDIA_TYPES } from '$lib/types';
    import type { MediaItem } from '$lib/types';

    let { media_list, onDelete } = $props();
    let editing_id = $state<number | null>(null);

    let edit_title = $state('');
    let edit_type = $state('');
    let edit_date = $state('');

    function toggle_edit_menu(entry: MediaItem) {
        if (editing_id == entry.id) {
            entry.title = edit_title;
            entry.type = edit_type;
            entry.date = new Date(edit_date);

            edit_title = '';
            edit_type = '';
            edit_date = '';
            editing_id = null;
        } else { // load entry into buffer
            editing_id = entry.id;
            edit_title = entry.title;
            edit_type = entry.type;
            edit_date = entry.date.toISOString().split('T')[0];
        }
    }
</script>

<div class="log">
<div class="media-entrys">
    {#each [...media_list].reverse() as entry (entry.id)}
        <div class="media-entry">

            <h3>{entry.title}</h3>
            <h4>{entry.type.toUpperCase()}</h4>

            <button onclick={() => toggle_edit_menu(entry)}>{editing_id === entry.id ? 'Save & Close' : 'Edit'}</button>
            <button onclick={() => onDelete(entry.id)}>Delete</button>

            {#if editing_id == entry.id}
                <label for='title-{entry.id}'>Title:</label>
                <input id='title-{entry.id}' type='text' bind:value={edit_title}>

                <label for='type-{entry.id}'>Type:</label>
                <select id='type-{entry.id}' bind:value={edit_type}>
                    {#each MEDIA_TYPES as type (type)}
                        <option value={type}>{type}</option>
                    {/each}
                </select>

                <label for='date-{entry.id}'>Date:</label>
                <input id='date-{entry.id}' type='date' bind:value={edit_date}>
        {/if}
        </div>
    {/each}
</div>
</div>

<style>
.log {
    display: flex;
    overflow: wrap;
}
.media-entrys {
    width: 50vw;
    background-color: rgb(255, 255, 255, 0.1);
    border: 4px solid white;
    border-radius: 4px;
}
.media-entry {
    border: 4px solid black;
    background-color: rgb(255, 255, 255, 0.2);
    padding: 16px;
    margin: 16px;
}
    .media-entry h3 {
        padding: 0px;
        margin: 0px;
        font-family: 'orbitron';
    }
    .media-entry h4 {
        padding: 0px;
        margin: 0px;
        font-size: 0.8rem;
        color: var(--accent);
        font-family: 'orbitron';
    }
    .media-entry button {
        margin-top: 8px;
    }
</style>