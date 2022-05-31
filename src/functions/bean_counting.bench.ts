import { countChar, countCharCool } from "./bean_counting.ts";

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing
elit. Donec iaculis enim et sem pharetra sagittis.
Nunc semper, neque id volutpat aliquet, sapien diam vehicula augue,
semper efficitur mauris ipsum ut justo. Aenean urna tortor,
tempus vitae sodales non, posuere id mauris. Quisque consectetur,
turpis sed sagittis fermentum, orci magna pharetra sem, vitae vulputate
risus urna vitae eros. Aenean sagittis ipsum dolor, sed iaculis lacus
faucibus sit amet. Proin at suscipit dolor. Sed volutpat ipsum id metus
dictum gravida. Curabitur ut diam ac sapien finibus mattis.

Vivamus lobortis suscipit lorem, quis rutrum quam molestie quis.
In hac habitasse platea dictumst. Nunc id mi id ipsum consequat
dictum vitae a mi. Quisque sapien est, consequat nec neque aliquet,
porttitor mollis leo.`;

Deno.bench("[countCharCool]", { group: "Counting" }, () => {
  countCharCool(lorem, "q");
});

Deno.bench("[countCharRegex]", { group: "Counting" }, () => {
  countChar(lorem, "q");
});
