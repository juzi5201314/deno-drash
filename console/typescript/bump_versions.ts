/**
 * Bump versions in the deps file.
 *
 * Other places to bump versions:
 * - mod.ts
 * - mod_test.ts
 * - README.md
 * - REQUIREMENTS.md
 * - console/install_deno
 */
async function bumpVersions(fromV: string, toV: string) {
  // deps.ts
  let depData = new TextDecoder().decode(
    await Deno.readAll(await Deno.open("./deps.ts")),
  );
  depData = depData.replace(new RegExp(fromV, "g"), toV);
  Deno.writeFileSync("./deps.ts", new TextEncoder().encode(depData));

  return depData;
}

let result = await bumpVersions("v0.55.0", "v0.56.0");

console.log(result);
