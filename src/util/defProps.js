export default function defineProperties (parent, obj) {
  for (let [key, value] of Object.entries(obj)) {
    parent[key] = value;
  }
}