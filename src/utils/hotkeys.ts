import { ref, Ref } from "vue";

export function useHotKeys() {
  const hotKeys: Ref = ref([]);

  const runHotKeys = (event: any) => {
    let key = event.key;
    if (["Control", "Shift", "Meta"].includes(key)) return false;
    if (event.ctrlKey) key = "ctr+" + key;
    if (event.shiftKey) key = "shift+" + key;
    if (event.metaKey) key = "meta+" + key;
    hotKeys.value.forEach(
      (el: { callback: any; keys: Array<string | number> }) => {
        if (el.keys.map((k) => k.toString()).includes(key)) {
          el.callback(event);
        }
      }
    );
  };

  return {
    hotKeys,
    runHotKeys,
  };
}
